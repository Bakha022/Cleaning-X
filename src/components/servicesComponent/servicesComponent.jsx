import React from 'react'
import BtnsComponents from '../btnComponent/btnsComponents'
import ServicesItemCards from './servicesItemCards'
import services from '../../constants/services'
import style from "./ServicesComponent.module.css"


const ServicesComponent = () => {
	return (
		<div className="services-component">
			<div className={style["row"]}>
				<h1>Our Services</h1>
				<BtnsComponents word={"Explore services"} status={"light"}/>
			</div>

			<div className={style["row-2"]}>
					{
						services.map((item, key)=> {
							return <ServicesItemCards key={key} props={item}/>
						})
					}
			</div>

		</div>
	)
}

export default ServicesComponent