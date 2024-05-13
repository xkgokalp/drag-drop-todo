import React from "react"
import SectionHeader from "./SectionHeader"
import TaskCard from "./TaskCard"
import { useDrop } from "react-dnd"

type SectionProps = {
	status?: string
	tasks?: any
	setTasks?: any
	todos: any
	inProgress?: any
	done?: any
	//setActiveCard?: any
}

function Section({
	status,
	tasks,
	setTasks,
	todos,
	inProgress,
	done,
}: //setActiveCard,
SectionProps) {
	const [{ isOver }, drop] = useDrop(() => ({
		accept: "task",
		drop: (item: any) => addItemToSection(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}))

	let bg = "bg-red-600"
	let tasksToMap = todos

	if (status === "In Progress") {
		bg = "bg-yellow-500"
		tasksToMap = inProgress
	} else if (status === "Done") {
		bg = "bg-green-500"
		tasksToMap = done
	}

	console.log("tasks in Sec", tasks)

	//function for dragging and dropping tasks
	function addItemToSection(id: any) {
		setTasks((prevTasks: any) => {
			const modifiedTasks = prevTasks.map((task: any) => {
				if (task.id === id) {
					return { ...task, status: status }
				}
				return task
			})
			localStorage.setItem("tasks", JSON.stringify(modifiedTasks))
			return modifiedTasks
		})

		// const task = tasks?.find((t: any) => t?.id === id)
		// console.log("task", task)

		// if (task) {
		// 	const newTasks = tasks?.filter((t: any) => t?.id !== id)
		// 	task.status = status
		// 	const updatedTasks = [...newTasks, task]

		// 	setTasks((prevTasks: any) => {
		//         localStorage.setItem("tasks", JSON.stringify(updatedTasks))
		//         return updatedTasks
		//     })
		// } else {
		// 	// Handle the case where the task is not found
		// 	console.error("Task with ID", id, "not found in tasks")
		// }

		// //console.log("task", task)
	}

	return (
		<div className="flex flex-col w-1/3 rounded-b-md rounded-bl-md max-w-fit">
			<SectionHeader status={status} tasksToMap={tasksToMap} bg={bg} />
			<div
				ref={drop}
				className={` rounded-b-md rounded-bl-md pb-2 shadow-2xl ${
					isOver ? "bg-slate-400" : "bg-rose-50"
				}`}
			>
				{tasksToMap &&
					tasksToMap.map((task: any) => (
						<TaskCard
							key={task.id}
							task={task}
							tasks={tasks}
							setTasks={setTasks}
						/>
					))}
			</div>
		</div>
	)
}

export default Section
