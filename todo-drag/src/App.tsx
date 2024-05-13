import React, { useState, useEffect } from "react"
import "./App.css"
import CreateTask from "./components/CreateTask"
import ListTasks from "./components/ListTasks/ListTasks"
import { data } from "./data"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

function App() {
	const [tasks, setTasks] = useState<any>(data || [])

	useEffect(() => {
		//useEffect hook to get tasks from local storage
		const tasks = localStorage.getItem("tasks")
		if (tasks) {
			setTasks(JSON.parse(tasks))
		}
	}, [])

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
