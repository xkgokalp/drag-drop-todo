import React from "react"
import DeleteButton from "./DeleteButton"
import { toast } from "react-toastify"
import { useDrag } from "react-dnd"

function TaskCard({ tasks, setTasks, task }: any) {
	const [{ isDragging }, drag] = useDrag(() => ({
		//use the drag hook for dragging tasks
		type: "task",
		item: { id: task.id },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}))

	function handleDelete() {
		const newTasks = tasks.filter((t: any) => t.id !== task.id) //delete the task
		localStorage.setItem("tasks", JSON.stringify(newTasks))
		setTasks(newTasks)

		toast.info("Task deleted successfully!")
	}

	return (
		<div
			className="px-4 py-2 w-full "
			//className=" px-4 py-2 flex-grow min-w-0 flex w-full"
		>
			<div
				ref={drag}
				className={`bg-white relative p-4 mt-2 shadow-md rounded-md cursor-grab flex-wrap ${
					isDragging ? "opacity-25" : "opacity-100"
				}`}
			>
				<div className="flex flex-row justify-between ">
					<h1 className=" font-bold max-w-full break-words mb-1">
						{task.title}
					</h1>
					<DeleteButton onClick={handleDelete} />
				</div>

				<p className="flex-wrap break-words pr-3">{task.description}</p>
				<p className=" flex justify-end text-gray-400 italic text-sm">
					Assignee : {task.assignee}
				</p>
			</div>
		</div>
	)
}

export default TaskCard
