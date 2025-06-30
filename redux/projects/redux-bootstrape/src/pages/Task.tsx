import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { useAppSelector } from "@/hooks/useRedux";
import { selectTasks } from "@/redux/features/task/taskSlice";

export default function Task ()
{
  const tasks = useAppSelector(selectTasks)
  console.log( tasks )
  
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between">
        <h1>Task</h1>
        <AddTaskModal/>
      </div>

      <div className="space-y-5 mt-5">
        {
          tasks?.map( task => (
            <TaskCard key={task?.id} task={ task } />
          ))
        }
      </div>
    </div>
  );
}
