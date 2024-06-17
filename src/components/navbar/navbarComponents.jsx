import React from 'react'

import BtnsComponents from '../btnComponent/btnsComponents'

import logo from '../../assets/imgs/IMAGE.svg'
import './navbarComponents.css'



const NavbarComponents = () => {

	return (
		<div className="container">
			<nav>
				<div className="row">
					<div className="nav-right">
						<div className="logo">
							<a href="#home">
								<img src={logo} alt="logo" />
							</a>
						</div>
						<ul className="list_item">
							<li className="list_items">
								<a className="list_items_link" href="#home">Home</a>
							</li>
							<li className="list_items">
								<a className="list_items_link" href="#about">About</a>
							</li>
							<li className="list_items">
								<a className="list_items_link" href="#services">Services</a>
							</li>
							<li className="list_items">
								<a className="list_items_link" href="#articels">Articles</a>
							</li>
							<li className="list_items">
								<a className="list_items_link" href="#contact">Contact</a>
							</li>
						</ul>
					</div>
					<div className="nav-left">
						<button className='nav-cart-btn'>Cart (0)</button>
						<div className="navBtn">
							<BtnsComponents height={"54px"} width={"174px"} word={"Get a free quote"} status={'primary'} />
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default NavbarComponents