import React from "react"
import SectionHeader from "./SectionHeader"
import TaskCard from "./TaskCard"

type SectionProps = {
	status?: string
	tasks?: any
	setTasks?: any
	todos: any
	inProgress?: any
	done?: any
	setActiveCard?: any
}

function Section({
	status,
	tasks,
	setTasks,
	todos,
	inProgress,
	done,
	setActiveCard,
}: SectionProps) {
	let bg = "bg-red-400"
	let tasksToMap = todos

	if (status === "In Progress") {
		bg = "bg-yellow-400"
		tasksToMap = inProgress
	} else if (status === "Done") {
		bg = "bg-green-400"
		tasksToMap = done
	}

	return (
		<div className="flex flex-col w-3/4 rounded-b-md rounded-bl-md">
			<SectionHeader status={status} tasksToMap={tasksToMap} bg={bg} />
			<div className="bg-rose-50 rounded-b-md rounded-bl-md pb-2 ">
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
