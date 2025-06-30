import { useAppSelector } from "@/hooks/useRedux";
import { selectTasks } from "@/redux/features/task/taskSlice";

export default function Task ()
{
  const tasks = useAppSelector(selectTasks)
  console.log( tasks )
  
  return (
    <div>
      Task
    </div>
  )
}
