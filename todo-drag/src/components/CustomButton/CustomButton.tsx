import "./CustomButton.css"
interface CustomButtonProps {
	onClick?: () => void
	text?: string
}

const CustomButton = ({ onClick, text }: CustomButtonProps) => {
	return (
		<button
			//onClick={onClick}
			className="custom-button text-cyan-900 rounded-lg px-4 h-12 hover:bg-blue-600 transition-colors w-full"
		>
			{text}
		</button>
	)
}

export default CustomButton
