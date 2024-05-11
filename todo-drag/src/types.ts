export type TaskProps = {
	tasks: {
		id?: string | number
		title?: string
		description?: string
		status?: string
		assignee?: string
	}[]
	setTasks: React.Dispatch<
		React.SetStateAction<
			{
				id?: string | number
				title?: string
				description?: string
				status?: string
				assignee?: string
			}[]
		>
	>
}
