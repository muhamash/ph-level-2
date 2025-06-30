import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { ITask } from "@/redux/features/task/taskSlice";
import { Trash } from "lucide-react";

interface TaskProps
{
    task: ITask
}

export default function TaskCard({task}: TaskProps) {
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn(`size-3 rounded-full ${
                        task?.priority === "LOW"
                            ? "bg-green-500"
                            : task?.priority === "MEDIUM"
                                ? "bg-yellow-500"
                                : "bg-violet-500"
                    }`)}>
                    </div>
                    <h1>{task?.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button variant={"link"} className="p-0 text-violet-500 cursor-pointer">
                        <Trash/>
                    </Button>
                    <Checkbox/>
                </div>
            </div>
            <p className="mt-5">{task?.description}</p>
        </div>
    );
}
