import React from 'react'
import services from '../../constants/services'
import BtnsComponents from '../btnComponent/btnsComponents'
import style from "./ServicesComponent.module.css"
import ServicesItemCards from './servicesItemCards'


const ServicesComponent = () => {
	return (
		<section className='container'>
			<div id='services' className="services-component">
				<div className={style["row"]}>
					<h1>Our Services</h1>
					<BtnsComponents word={"Explore services"} status={"light"} />
				</div>

				<div className={style["row-2"]}>
					{
						services.map((item, key) => {
							return <ServicesItemCards key={key} props={item} />
						})
					}
				</div>

			</div>
		</section>
	)
}

export default ServicesComponent