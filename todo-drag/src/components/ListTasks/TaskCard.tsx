import React from "react"
import DeleteButton from "./DeleteButton"
import { toast } from "react-toastify"

function TaskCard({ tasks, setTasks, task }: any) {
	console.log("tasks", tasks)
	function handleDelete() {
		const newTasks = tasks.filter((t: any) => t.id !== task.id)
		setTasks(newTasks)

		toast.info("Task deleted successfully!")
	}

	return (
		<div className=" px-4 py-2 " draggable>
			<div className="bg-white relative p-4 mt-2 shadow-md rounded-md cursor-grab">
				<div className="flex flex-row justify-between">
					<h1 className=" font-bold">{task.title}</h1>
					<DeleteButton onClick={handleDelete} />
				</div>

				<p>{task.description}</p>
				<p>Assignee : {task.assignee}</p>
			</div>
		</div>
	)
}

export default TaskCard
