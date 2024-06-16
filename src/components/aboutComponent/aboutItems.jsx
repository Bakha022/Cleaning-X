import React from 'react'

import './aboutComponent.css'

const aboutItems = ({props}) => {
	return (
		<div className="col-4">
					<div id="about-img">
						<img src={props.img} alt="about_img" />
					</div>
					<h3 className='about-card-title'>
						{props.index+1}. {props.title}
					</h3>
					<p className='about-card-subtitle'>
						{props.subtitle}	
					</p>
				</div>
	)
}

export default aboutItems