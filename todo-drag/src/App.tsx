import React, { useState, useEffect } from "react"
import "./App.css"
import CreateTask from "./components/CreateTask"
import ListTasks from "./components/ListTasks/ListTasks"
import { data } from "./data"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
	const [tasks, setTasks] = useState<any>(data || [])

	//console.log("tasks", tasks)

	useEffect(() => {
		const tasks = localStorage.getItem("tasks")
		if (tasks) {
			setTasks(JSON.parse(tasks))
		}
	}, [])

	return (
		<>
			<ToastContainer />
			<div className="  w-full h-screen flex flex-col items-center pt-10 gap-10">
				{/* <h1 className="text-4xl font-bold text-white">TODO APP</h1> */}
				<CreateTask tasks={tasks} setTasks={setTasks} />
				<ListTasks tasks={tasks} setTasks={setTasks} />
			</div>
		</>
	)
}

export default App
