import React, { useState } from 'react'

import BtnsComponents from '../btnComponent/btnsComponents'

import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import logo from '../../assets/imgs/IMAGE.svg'
import "./navbarComponents..css"




const NavbarComponents = () => {
	const [show, setShow] = useState(false)

	return (
		<div className="container">
			{/* <nav>
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
						
						<div className="navBtn">
						
						</div>
					</div>
				</div>
			</nav> */}
			<nav>
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<div className={`right ${show ? "show" : ""}`}>
					<ul className='nav_items'>
						<li className="nav_item">
							<a className='nav_item_link' href="#home">
								Home
							</a>
						</li>
						<li className="nav_item">
							<a className='nav_item_link' href="#about">
								About
							</a>
						</li>
						<li className="nav_item">
							<a className='nav_item_link' href="#services">
								Services
							</a>
						</li>
						<li className="nav_item">
							<a className='nav_item_link' href="#articles">
								Articles
							</a>
						</li>
						<li className="nav_item">
							<a className='nav_item_link' href="#contact">
								Contact
							</a>
						</li>
					</ul>
					<div className="nav-btns">
						<button className='nav-cart-btn'>Cart (0)</	button>
						<BtnsComponents height={"54px"} width={"174px"} word={"Get a free quote"} status={'primary'} />
					</div>
					<div className="close">
						<IoMdCloseCircleOutline  onClick={()=> setShow(!show)} />
					</div>
				</div>
				<button className="toogle">
					<FaBarsStaggered onClick={()=> setShow(!show)}/>
				</button>
			</nav>
		</div>
	)
}

export default NavbarComponents