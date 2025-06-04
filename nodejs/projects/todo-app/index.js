const http = require( "http" )
const path = require( "path" )
const fs = require( "fs" )

const filePath = path.join( __dirname, './db/todo.json' )


const server = http.createServer( ( req, res ) =>
{
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname
    // res.end( "Welcome to the todo server" )
    const data = fs.readFileSync( filePath, "utf-8" )
    const todos = JSON.parse(data);
    if ( req.url === '/get/todos' && req.method === 'GET' )
    {
        res.writeHead( 200, {
            "Content-Type": "application/json",
            "email": "test@email"
        } )
        // res.setHeader( "Content-Type", "text/plain" )
        // res.statusCode = 202
        res.end( JSON.stringify( {
            data: todos,
            status : 200
        }))
    }
    else if (req.url === '/post/create-todos' && req.method === 'POST') {
        let data = '';
    
        req.on('data', (chunk) => {
            data += chunk;
        });
    
        req.on('end', () => {
            try {
                const { title, body } = JSON.parse(data);
                const createdAt = new Date().toLocaleString(); 
    
                const todoData = fs.readFileSync(filePath, "utf-8");
                const allTodos = JSON.parse(todoData);
    
                const newTodo = { title, body, createdAt };
                allTodos.push(newTodo);
    
                fs.writeFileSync(filePath, JSON.stringify(allTodos, null, 4), "utf-8");
    
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    status: 201,
                    message: "Todo created successfully!",
                    newTodo
                }));
            }
            catch ( err )
            {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    status: 400,
                    error: "Invalid JSON or request body"
                }));
            }
        });
    }
    else if ( req.url.startsWith("/get") && req.method === 'GET' )
    {
        res.writeHead( 200, {
            "Content-Type": "application/json",
            "email": "test@email"
        } )
        // res.setHeader( "Content-Type", "text/plain" )
        // res.statusCode = 202
        // const url = new URL( req.url )
        // console.log( url )
        const title = url.searchParams.get( "title" )
        const data = fs.readFileSync( filePath, "utf-8" )
        const parsedData = JSON.parse( data )
        const todo = parsedData.find( todo => todo.title === title )
        
        if ( !todo )
        {
            res.end("todo not found")
        }

        res.end( JSON.stringify(todo))
    }
    
    else
    {
        res.end("Routes not found!!")
    }
})

server.listen( 5000, "127.0.0.1", () =>
{
    console.log("Server listening on port: 5000")
})