import React from "react"

interface CustomButtonProps {
	onClick?: () => void
	text?: string
}

const CustomButton = ({ onClick, text }: CustomButtonProps) => {
	return (
		<button
			//onClick={onClick}
			className=" bg-blue-500 text-white rounded-lg px-4 h-12 hover:bg-blue-600 transition-colors w-full"
		>
			{text}
		</button>
	)
}

export default CustomButton
