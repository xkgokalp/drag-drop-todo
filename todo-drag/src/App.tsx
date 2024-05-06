import React, { useState } from "react"
import "./App.css"
import CreateTask from "./components/CreateTask"
import ListTasks from "./components/ListTasks"

function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, title: "Task 1" },
		{ id: 2, title: "Task 2" },
		{ id: 3, title: "Task 3" },
	])
	return (
		<div className=" bg-slate-100 w-full h-screen flex flex-col items-center pt-4 gap-16">
			<CreateTask tasks={tasks} setTasks={setTasks} />
			<ListTasks />
		</div>
	)
}

export default App
