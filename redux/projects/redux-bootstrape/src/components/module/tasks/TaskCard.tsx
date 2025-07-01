import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch } from "@/hooks/useRedux";
import { cn } from "@/lib/utils";
import { deleteTask, toggleTaskComplete, type ITask } from "@/redux/features/task/taskSlice";
import { Trash } from "lucide-react";
import { AddTaskModal } from "./AddTaskModal";

interface TaskProps
{
    task: ITask
}

export default function TaskCard ( { task }: TaskProps )
{
    const dispatch = useAppDispatch();
    // console.log(task.isCompleted)

    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn( `size-3 rounded-full ${ task?.priority === "LOW"
                            ? "bg-green-500"
                            : task?.priority === "MEDIUM"
                                ? "bg-yellow-500"
                                : "bg-violet-500"
                        }` )}>
                    </div>
                    <h1 className={cn(task?.isCompleted ? "line-through" : "")}>{task?.title}</h1>
                </div>
                <div className="flex items-center ml-auto">
                    <p>Is completed:</p>
                    <p className={cn(`p-2 text-md ${task?.isCompleted === true ? "text-green-700" : "text-rose-600"}`)}>{task.isCompleted.toString()}</p>
                </div>
                
                <div className="flex gap-3 items-center">
                    <Button onClick={() =>
                    {
                        dispatch(deleteTask(task.id))
                    }}
                        variant={"link"} className="p-0 text-violet-500 cursor-pointer">
                        <Trash />
                    </Button>
                    <AddTaskModal mode="edit" task={task}/>
                    <Checkbox checked={task.isCompleted} onClick={() =>
                    {
                        // console.log(task.id)
                        dispatch( toggleTaskComplete(task.id) )
                    }} />
                </div>
            </div>
            <p className={cn(task?.isCompleted ? "line-through text-violet-500" : "")}>{task?.description}</p>
        </div>
    );
}
