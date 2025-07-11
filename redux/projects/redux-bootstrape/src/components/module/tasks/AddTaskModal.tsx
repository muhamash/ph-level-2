import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import
    {
        Dialog,
        DialogClose,
        DialogContent,
        DialogDescription,
        DialogFooter,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
    } from "@/components/ui/dialog";
import
    {
        Form,
        FormControl,
        FormDescription,
        FormField,
        FormItem,
        FormLabel,
        FormMessage,
    } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import
    {
        Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue
    } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/hooks/useRedux";
import { cn } from "@/lib/utils";
import { useCreateMutation } from "@/redux/api/baseApi";
import { addTask, updateSIngleTask, type ITask } from "@/redux/features/task/taskSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Edit2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface TaskModalProps {
    mode?: "add" | "edit";
    task?: ITask;
}
  
export function AddTaskModal ({ mode, task }: TaskModalProps)
{
    const [ open, setOpen ] = useState( false )
    const [createTask, {data, isLoading, isError}] = useCreateMutation()

    const formSchema = z.object( {
        title: z.string().min( 1, "Title is required" ),
        description: z.string().min( 1, "Description is required" ),
        dueDate: z.date( { required_error: "Due date is required" } ),
        priority: z.string().min( 1, "Priority is required" ),
        isComplete: z.boolean().optional(),
    } );

    const form = useForm( {
        resolver: zodResolver( formSchema ),
        defaultValues: {
            title: task?.title ?? "",
            description: task?.description ?? "",
            priority: task?.priority ?? "low",
            dueDate: task ? new Date( task.dueDate ) : undefined,
        },
    } );

    const dispatch = useAppDispatch()
  
    const onSubmit = ( data ) =>
    {
        // console.log( data );
        // form.reset()
        const payload = {
            ...data,
            dueDate: data.dueDate ? data.dueDate.toISOString() : null,
        };
        
        if ( mode === 'add' )
        {
            dispatch( addTask( payload ) );
        }
        else if ( mode === "edit" )
        {
            const payload = {
                ...data,
                id: task.id,
                dueDate: data.dueDate ? data.dueDate.toISOString() : null,
            };

            dispatch( updateSIngleTask( payload ) );
        }
        else
        {
            throw Error("from on submit")
        }

        form.reset();
        setOpen( false )
        
        const res = await createTask(payload).unwrap()

    };
  
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary">{mode === "add" ? "Add Task" : <Edit2Icon />}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new task</DialogTitle>
                    <DialogDescription>
                        Make changes to your task here. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit( onSubmit )} className="space-y-4">
                        {/* Title */}
                        <FormField
                            control={form.control}
                            name="title"
                            // rules={{ required: "This field is required" }}
                            render={( { field } ) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Task title" {...field} />
                                    </FormControl>
                                    <FormDescription>This is the task title name</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
  
                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            // rules={{ required: "This field is required" }}
                            render={( { field } ) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Task description" {...field} />
                                    </FormControl>
                                    <FormDescription>This is the task description</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
  
                        {/* Due date */}
                        <FormField
                            control={form.control}
                            name="dueDate"
                            // rules={{ required: "This field is required" }}
                            render={( { field } ) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Due date of the task</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? format( field.value, "PPP" ) : "Pick a date"}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                captionLayout="dropdown"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>Your task due date.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
  
                        <div className="flex justify-between">
                            {/* Priority */}
                            <FormField
                                control={form.control}
                                name="priority"
                                // rules={{ required: "This field is required" }}
                                render={( { field } ) => (
                                    <FormItem>
                                        <FormLabel>Priority</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select priority" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="LOW">Low</SelectItem>
                                                <SelectItem value="MEDIUM">Medium</SelectItem>
                                                <SelectItem value="HIGH">High</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>Select priority</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
  
                            {/* isComplete */}
                            {/* <FormField
                                control={form.control}
                                name="isComplete"
                                // rules={{ required: "This field is required" }}
                                render={( { field } ) => (
                                    <FormItem className="flex flex-row items-center gap-2">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div>
                                            <FormLabel className="text-sm font-normal">isComplete</FormLabel>
                                            <FormDescription>
                                                Mark as complete if finished.
                                            </FormDescription>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                        </div>
  
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline" type="button">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
  }