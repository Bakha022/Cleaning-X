import React from 'react'

import style from "./Contact.module.css"
import CallComponent from '../callComponent/callComponent'
import BtnsComponents from '../btnComponent/btnsComponents'

const ContactComponent = () => {
	return (
		<div className={style["contact-component"]}>
			<div className={style['contact-row']}>
				<div className={style["left"]}>
					<h1 className={style["contact-title"]}>
							Contact Us
					</h1>
					<p className={style["contact-subtitle"]}>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
					<CallComponent/>
					<div className={style["line"]}></div>
					<h2 className={style["left-title"]}></h2>
					<p className={style["left-subtitle"]}>
						Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.
					</p>
					<BtnsComponents word={"Browse our packages"} status={"light"}/>
				</div>
				<div className={style["right"]}>
					
				</div>
			</div>
		</div>
	)
}

export default ContactComponent