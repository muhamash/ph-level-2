import Gear from "@/assets/logo/Gear";
import { Link } from "react-router";
import { ModeToggle } from "../Toggle";
// console.log(Gear)

export default function Nav ()
{
    return (
        <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5'>
            <div className='flex items-center'>
                <Gear /> <span className='font-bold ml-2'>ToDo</span>
            </div>
            <Link to={"/task"}>Task</Link>
            <Link to={"/"}>User</Link>
            <div className="ml-auto">
                <ModeToggle />
            </div>
        </nav>
    );
}
