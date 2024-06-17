import React from 'react'
import { FaPhone } from "react-icons/fa6"
import './callComponent.css'

const CallComponent = ({color}) => {
	return (
		<div className='call-row'>
			<a href="tel:+994853117">
			<button className='fa-phone'>
				<FaPhone className='call-icon' />
			</button>
			</a>
			<div className="call-title">
				<p style={{color: color}} className='call-text'>Call us now</p>
				<p style={{color: color}} className='call-number'>(414) 567 - 2109</p>
			</div>
		</div>
	)
}

export default CallComponent