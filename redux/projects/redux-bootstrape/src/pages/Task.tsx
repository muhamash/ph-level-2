import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";

export default function Task ()
{
  const tasks = useAppSelector( selectTasks )
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.todo.filter); 
  console.log( tasks, filter )
  // const { data, isLoading, isError } = useGetTasksQuery( undefined, { pollingInterval: 1000, refetchOnFocus: true, refetchOnMountOrArgChange: true, refetchOnReconnect: true } );

  
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between gap-5">
        <h1 className="mr-auto">Task</h1>
        <Tabs defaultValue={filter}>
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger onClick={() => dispatch( updateFilter( "all" ) )} value="all">All</TabsTrigger>
            <TabsTrigger onClick={() => dispatch( updateFilter( "low" ) )} value="low">Low</TabsTrigger>
            <TabsTrigger onClick={() => dispatch( updateFilter( "medium" ) )} value="medium">Medium</TabsTrigger>
            <TabsTrigger onClick={() => dispatch( updateFilter( "high" ) )} value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal mode="add"/>
      </div>

      <div className="space-y-5 mt-5">
        {
          tasks?.map( task => (
            <TaskCard key={task?.id} task={task} />
          ) )
        }
      </div>
      {
        tasks?.length === 0 && (
          <div className="text-rose-600">
            No tasks found!
          </div>
          )
      }
    </div>
  );
}
