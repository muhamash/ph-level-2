import { Server } from "http";
import app from "./app/app";
import mongooseConnect from "./config/mongoose";

let server: Server
const PORT = 5000;

async function main(params:type) {
  try
  {
    mongooseConnect();

    server = app.listen( PORT, () =>
    {
      console.log( `🌎 Server is running at http://localhost:${ PORT }` );
    } );
  }
  catch ( error )
  {
    console.log(error)
  }
};

main();