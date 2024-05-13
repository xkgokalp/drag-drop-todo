import React, { useState, useEffect } from "react"
import "./App.css"
import CreateTask from "./components/CreateTask"
import ListTasks from "./components/ListTasks/ListTasks"
import { data, dataTwo } from "./data"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { v4 as uuidv4 } from "uuid"

function App() {
	const dataWithIds = dataTwo.map((task: any) => ({
		...task,
		id: uuidv4(),
	}))

	const [tasks, setTasks] = useState<any>(dataWithIds || [])

	useEffect(() => {
		const tasks = localStorage.getItem("tasks")
		if (tasks) {
			setTasks(JSON.parse(tasks))
		}
	}, [])

	console.log("tasks", tasks)

	return (
		<DndProvider backend={HTML5Backend}>
			<ToastContainer />
			<div className="  w-full h-screen flex flex-col items-center pt-10 gap-10">
				<h1 className="text-4xl font-bold text-white">TODO APP</h1>
				<CreateTask tasks={tasks} setTasks={setTasks} />
				<ListTasks tasks={tasks} setTasks={setTasks} />
			</div>
		</DndProvider>
	)
}

export default App
