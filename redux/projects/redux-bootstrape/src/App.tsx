<<<<<<< HEAD
import { Button } from "./components/ui/button"
=======
import { Outlet } from "react-router";
import Nav from "./components/layouts/Nav";
import { Button } from "./components/ui/button";
>>>>>>> origin/redux/intro

function App() {

  return (
<<<<<<< HEAD
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button className="cursor-pointer" variant={"outline"}>Test button</Button>
    </div>
  )
=======
    <div>
      <Nav />
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Outlet/>
        <Button className="cursor-pointer" variant={"outline"}>Test button</Button>
      </div>
    </div>
  );
>>>>>>> origin/redux/intro
}

export default App
