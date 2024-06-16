import React from 'react'
import BtnsComponents from '../btnComponent/btnsComponents'
import heroImg from "../../assets/imgs/IMAGE (1).png"
import "./heroComponent.css"
import CallComponent from '../callComponent/callComponent'

const HeroComponent = () => {
	return (
		<div className='row'>
				<div className="hero-left">
					<h2>Quality cleaning for your home</h2>
					<p className='hero-text'>
						Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
					</p>
					<div className="hero-row">
						<BtnsComponents word={"Get a free quote"} status={"primary"}/>
						<CallComponent/>
					</div>
				</div>
				<div className="hero-right">
						<img className='heroImg' style={{width:"799px"}} src={heroImg} alt="hero-img" />
				</div>
		</div>
	)
}

export default HeroComponent