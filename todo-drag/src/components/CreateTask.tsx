import React from "react"
import CustomButton from "./CustomButton/CustomButton"
import { useState } from "react"

type TaskProps = {
	tasks: { id: number; title: string }[]
	setTasks: React.Dispatch<
		React.SetStateAction<{ id: number; title: string }[]>
	>
}

const CreateTask = ({ tasks, setTasks }: TaskProps) => {
	const [task, setTask] = useState({
		id: "",
		name: "",
		status: "",
	})

	return (
		<div className="flex gap-10">
			<input
				type="text"
				className=" border-2 border-slate-400 rounded-md bg-slate-100 h-12 w-80 px-2"
			/>
			<CustomButton text="Add Task" onClick={() => {}} />
		</div>
	)
}

export default CreateTask
