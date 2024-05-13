import React from "react"

type SectionHeaderProps = {
	bg: string
	tasksToMap: any
	status?: string
}

function SectionHeader({ bg, tasksToMap, status }: SectionHeaderProps) {
	return (
		<div
			className={`${bg} flex bg-blue-400 px-6 py-2 rounded-t-md rounded-tr-md w-full`}
		>
			<div className=" flex flex-row w-full justify-between ">
				<h2 className="uppercase font-bold">{status}</h2>
				<div className="flex h-6 w-6 rounded-lg bg-neutral-600 items-center justify-center">
					<h1 className=" text-white"> {tasksToMap.length}</h1>
				</div>
			</div>
		</div>
	)
}

export default SectionHeader
