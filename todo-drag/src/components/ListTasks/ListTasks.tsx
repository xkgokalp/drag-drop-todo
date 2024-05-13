import React, { useEffect, useState } from "react"
import { TaskProps } from "../../types"
import Section from "./Section"

const ListTasks = ({ tasks, setTasks }: TaskProps) => {
	const [todos, setTodos] = useState<any>([])
	const [inProgress, setInProgress] = useState<any>([])
	const [done, setDone] = useState<any>([])

	const statuses = ["To Do", "In Progress", "Done"]

	useEffect(() => {
		//useEffect hook to filter tasks based on status
		const filteredTodos = tasks?.filter(
			(task: any) => task?.status === "To Do",
		)
		const filteredInProgress = tasks?.filter(
			(task: any) => task?.status === "In Progress",
		)
		const filteredDone = tasks?.filter(
			(task: any) => task?.status === "Done",
		)

		setTodos(filteredTodos)
		setInProgress(filteredInProgress)
		setDone(filteredDone)
	}, [tasks])

	return (
		<div className="flex gap-16 justify-evenly w-4/5 ">
			{statuses.map((status, index) => (
				<Section
					key={index}
					status={status}
					tasks={tasks}
					setTasks={setTasks}
					todos={todos}
					inProgress={inProgress}
					done={done}
				/>
			))}
		</div>
	)
}

export default ListTasks
