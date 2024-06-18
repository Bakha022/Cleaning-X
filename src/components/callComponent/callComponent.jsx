import React from 'react'
import { FaPhone } from "react-icons/fa6"
import style from './callComponent.module.css'

const CallComponent = ({color}) => {
	return (
		<div className={style['call-row']}>
			<a href="tel:+994853117">
			<button className={style['fa-phone']}>
				<FaPhone className={style['call-icon']} />
			</button>
			</a>
			<div className={style["call-title"]}>
				<p style={{color: color}} className={style['call-text']}>Call us now</p>
				<p style={{color: color}} className={style['call-number']}>(414) 567 - 2109</p>
			</div>
		</div>
	)
}

export default CallComponent