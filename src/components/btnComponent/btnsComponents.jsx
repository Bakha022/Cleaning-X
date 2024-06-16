import React from 'react'

import "./btnsComponents.css"

const BtnsComponents = (props) => {
	
	const {status, word, width, height} = props
	
	return (
		<>
			<button  style={{width}, {height}} className={`BtnComponent ${status}`}>
				{word}
			</button>
		</>
	)
}

export default BtnsComponents