const Comment = (props) => {
	return(
		<>
			<li
			style={{listStyleType: "none"}}
			>
				{props.message}
			</li>
		</>
	)
}

export default Comment