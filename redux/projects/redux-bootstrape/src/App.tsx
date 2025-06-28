import Nav from "./components/layouts/Nav"
import { Button } from "./components/ui/button"

function App() {

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Nav/>
      <Button className="cursor-pointer" variant={"outline"}>Test button</Button>
    </div>
  )
}

export default App
