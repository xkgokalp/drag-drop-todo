import React from "react"
import CustomButton from "./CustomButton/CustomButton"
import { useState } from "react"
import { TaskProps } from "../types"
import { v4 as uuidv4 } from "uuid"
import { data } from "../data"
import { toast } from "react-toastify"

type EachTaskProps = {
	id: string | number
	title: string
	description: string
	status: string
	assignee: string
}

const CreateTask = ({ tasks, setTasks }: TaskProps) => {
	const [task, setTask] = useState<EachTaskProps>({
		id: "",
		title: "",
		description: "",
		status: "To Do",
		assignee: "",
	})

	//console.log(task)

	function handleSubmit(e: any) {
		e.preventDefault() //prevent the page from refreshing

		if (task?.title?.length < 3)
			return toast.error("Task title must be at least 3 characters long!")

		if (task.title?.length > 100)
			return toast.error(
				"Task title must be less than 100 characters long!",
			)

		setTasks((prevTasks: any) => {
			const list = [...prevTasks, task]
			localStorage.setItem("tasks", JSON.stringify(list))
			return list
		})

		toast.success("Task created successfully!")

		setTask({
			id: "",
			title: "",
			description: "",
			status: "To Do",
			assignee: "",
		})
	}

	return (
		<form className="w-3/4" onSubmit={handleSubmit}>
			<div className="flex gap-16 flex-row border-red-600 w-full">
				<div className=" flex flex-col w-1/2 gap-6">
					<input
						type="text"
						className=" border-2 border-slate-400 rounded-md bg-slate-100 h-12  px-2"
						placeholder="Enter Task..."
						value={task?.title}
						onChange={(e: any) =>
							setTask({
								...task,
								id: uuidv4(),
								title: e.target?.value,
							})
						}
					/>
					<select
						className=" border-2 border-slate-400 rounded-md bg-slate-100 h-12 px-2"
						value={task?.status}
						onChange={(e: any) =>
							setTask({
								...task,
								status: e.target?.value,
							})
						}
					>
						<option value="To Do">To Do</option>
						<option value="In Progress">In Progress</option>
						<option value="Done">Done</option>
					</select>
					<input
						type="text"
						className=" border-2 border-slate-400 rounded-md bg-slate-100 h-12 px-2"
						placeholder="Assignee"
						value={task?.assignee}
						onChange={(e: any) =>
							setTask({
								...task,
								assignee: e.target?.value,
							})
						}
					/>
				</div>
				<div className=" flex flex-col w-1/2 gap-6">
					<textarea
						className=" border-2 border-slate-400 rounded-md bg-slate-100 w-full h-2/3 p-4"
						// rows={10}
						// cols={50}
						placeholder="Enter Description..."
						value={task?.description}
						onChange={(e: any) =>
							setTask({
								...task,
								description: e.target?.value,
							})
						}
					/>
					<CustomButton text="Add Task" />
				</div>
			</div>
		</form>
	)
}

export default CreateTask
