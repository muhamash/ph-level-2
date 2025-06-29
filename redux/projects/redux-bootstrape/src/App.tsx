import Nav from "./components/layouts/Nav";
import { Button } from "./components/ui/button";

function App() {

  return (
    <div>
      <Nav />
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button className="cursor-pointer" variant={"outline"}>Test button</Button>
      </div>
    </div>
  );
}

export default App
