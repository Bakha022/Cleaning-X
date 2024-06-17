import React from 'react'

import BtnsComponents from '../btnComponent/btnsComponents'
import './aboutComponent.css'
import AboutItems from './aboutItems.jsx'


import aboutInfo from '../../constants/about.js'

const AboutComponent = () => {
	return (
		<section className='container'> 
			<div id='about' className='aboutContent'>
			<h1 className='about-title'>About Us</h1>
			<p className='about-subtitle'>
				Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.
			</p>
			<div className="about-row">
				{
					aboutInfo.map((item, inx)=> {
						return <AboutItems key={inx} props={{...item, index:inx}}/>
					})
				}
			</div>
			<div className="about-btns">
				<BtnsComponents  word={"Get a free quote"} status={"primary"}/>
				<BtnsComponents  word={"Explore services"} status={"light"}/>
			</div>
		</div>	
		</section>
	)
}

export default AboutComponent