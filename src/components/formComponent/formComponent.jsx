import React from 'react'

import BtnsComponents from '../btnComponent/btnsComponents'
import style from "./Form.module.css"

const FormComponent = () => {
	return (
		<form action="#">
			<div className={style["inputList"]}>
				<div className={style["input-items"]}>
					<label htmlFor="name">Full name</label>
					<input required name='name' type="text" />
				</div>
				<div className={style["input-items"]}>
					<label htmlFor="phoneNumber">Phone number</label>
					<input required name='phoneNumber' type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
				</div>
				<div className={style["input-items"]}>
					<label htmlFor="address">Address</label>
					<input required name='address' type="text" />
				</div>
				<div className={style["input-items"]}>
					<label htmlFor="email">Email</label>
					<input required name='email' type="email" />
				</div>
				<div className={style["input-items"]}>
					<label htmlFor="service">Requested service</label>
					<input required name='service' type="text" />
				</div>
				<div className={style["input-items"]}>
					<label htmlFor="day">Day of service</label>
					<input required name='day' type="text" />
				</div>
			</div>

			<div className={style["texts"]}>
				<label htmlFor="texarea">Add a note</label>
				<textarea name="texarea" id="texarea"></textarea>
			</div>


			<BtnsComponents width={"219px"} word={"Submit message"} status={"primary"} />
		</form>
	)
}

export default FormComponent