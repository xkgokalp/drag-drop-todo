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
}

function Section({
	status,
	tasks,
	setTasks,
	todos,
	inProgress,
	done,
}: SectionProps) {
	const [{ isOver }, drop] = useDrop(() => ({
		//useDrop hook for dropping tasks
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
	}

	return (
		<div className="flex flex-col w-1/3 max-w-[350px] rounded-b-md rounded-bl-md ">
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
