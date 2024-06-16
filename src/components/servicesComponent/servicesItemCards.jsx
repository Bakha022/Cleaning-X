import React from 'react'

import style from "./ServicesComponent.module.css"

const ServicesItemCards = ({props}) => {
	return (
		<div className={style['services-row-card']}>
					<div className={style['card']}>
						<div className={style["service-img"]}>
								<img src={props.img} alt="" />
						</div>
						<h3>	
							{props.title}
						</h3>
						<p className={style["card-text"]}>{props.subtitle}</p>
					</div>
			</div>
	)
}

export default ServicesItemCards