import React from "react"
import CustomButton from "./CustomButton/CustomButton"
import { useState } from "react"
import { TaskProps } from "../types"
import { v4 as uuidv4 } from "uuid"
import { data } from "../data"
import { toast } from "react-toastify"
import { BiTask } from "react-icons/bi"
import { ImMenu3 } from "react-icons/im"
import { BsFillFilePersonFill } from "react-icons/bs"
import { MdDescription } from "react-icons/md"

import "./CreateTask.css"

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
		<div className=" w-4/5 p-4 bg-cyan-800 rounded-2xl shadow-2xl">
			<form onSubmit={handleSubmit}>
				<div className="flex gap-16 flex-row border-red-600 w-full">
					<div className=" flex flex-col w-1/2 gap-4">
						<div className="input-div">
							<label className="input-label">
								<h1 className="text-white">Title</h1>
								{<BiTask className="text-lg text-white" />}
							</label>
							<input
								type="text"
								className=" border-2 border-slate-400 rounded-2xl bg-slate-100 h-12  px-2 "
								src="../assets/envelope.png"
								placeholder="Enter Title..."
								value={task?.title}
								onChange={(e: any) =>
									setTask({
										...task,
										id: uuidv4(),
										title: e.target?.value,
									})
								}
							></input>
						</div>
						<div className="input-div">
							<label className="input-label">
								<h1 className="text-white">Status</h1>
								{<ImMenu3 className="text-lg text-white" />}
							</label>
							<select
								//className=" border-2 border-slate-400 rounded-2xl bg-slate-100 h-12 px-2"
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
						</div>
						<div className="input-div">
							<label className="input-label">
								<h1 className="text-white">Assignee</h1>
								{
									<BsFillFilePersonFill className="text-lg text-white" />
								}
							</label>
							<input
								type="text"
								className=" border-2 border-slate-400 rounded-2xl bg-slate-100 h-12 px-2"
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
					</div>
					<div className=" flex flex-col w-1/2 gap-11">
						<div className="input-div h-2/3">
							<label className="input-label">
								<h1 className="text-white">Description</h1>
								{
									<MdDescription className="text-lg text-white" />
								}
							</label>
							<textarea
								className=" border-2 border-slate-400 rounded-2xl bg-slate-100 w-full h-full p-4"
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
						</div>
						<CustomButton text="Add Task" />
					</div>
				</div>
			</form>
		</div>
	)
}

export default CreateTask
