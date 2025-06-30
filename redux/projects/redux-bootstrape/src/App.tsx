import { Outlet } from "react-router";
import Nav from "./components/layouts/Nav";

function App() {

  return (
    <div>
      <Nav />
      <Outlet />
      {/* <div className="flex min-h-svh flex-col items-center justify-center gap-10">

        <Outlet />
        
        <Button className="cursor-pointer" variant={"outline"}>Test button</Button>
      </div> */}
    </div>
  );
}

export default App
