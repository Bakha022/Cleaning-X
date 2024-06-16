import React from 'react'

import BtnsComponents from '../btnComponent/btnsComponents'

import './navbarComponents.css'
import logo from '../../assets/imgs/IMAGE.png'



const NavbarComponents = () => {

	return (
			<nav>
							<div className="row">
								<div className="nav-right">
									<div className="logo">
										<img src={logo} alt="logo" />
									</div>
									<ul className="list_item">
										<li className="list_items">
											<a className="list_items_link" href="home">Home</a>
										</li>
										<li className="list_items">
											<a className="list_items_link" href="about">About</a>
										</li>
										<li className="list_items">
											<a className="list_items_link" href="services">Services</a>
										</li>
										<li className="list_items">
											<a className="list_items_link" href="articels">Articles</a>
										</li>
										<li className="list_items">
											<a className="list_items_link" href="contact">Contact</a>
										</li>
									</ul>
								</div>
								<div className="nav-left">
										<p>Cart (0)</p>
										<BtnsComponents height={"54px"} width={"174px"} word={"Get a free quote"} status={'primary'}/>
								</div>
							</div>
				</nav>
	)
}

export default NavbarComponents