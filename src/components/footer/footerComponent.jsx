import React from 'react'

import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6"
import BtnsComponents from '../btnComponent/btnsComponents'

import logo from '../../assets/imgs/IMAGE.svg'
import style from './Footer.module.css'


const FooterComponent = () => {
	return (
		<div className='container'>
			<div className={style["footerStart"]}>
				<div className={style["footer-row_1"]}>
					<div className={style["col-3"]}>
						<h1>Quality cleaning for your home</h1>
						<p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
						<div className={style["col-rectangle"]}>
							<div className={style["rectangle"]}>
								<a target='_blank' href="https://instagram.com">
									<FaInstagram />
								</a>
							</div>
							<div className={style["rectangle"]}>
								<a target='_blank' href="https://x.com/">
									<FaTwitter />
								</a>
							</div>
							<div className={style["rectangle"]}>
								<a target='_blank' href="https://github.com"><FaGithub /></a>
							</div>
							<div className={style["rectangle"]}>
								<a target='_blank' href="https://facebook.com"><FaFacebook /></a>
							</div>
							<div className={style["rectangle"]}>
								<a target='_blank' href="https://youtube.com"><FaYoutube /></a>
							</div>
						</div>
					</div>
					<div className={style["col-3"]}>
						<h2>Contact us</h2>
						<div className={style["footer-col-texts"]}>
							<p className={style["col-2-texts"]}>
								1827 Nickel Road, Los Angeles, CA, 90017, United States
							</p>
							<p className={style["col-2-texts"]}>(414) 567 - 2109</p>
							<p className={style["col-2-texts"]}>contact@cleaning.com</p>
						</div>
					</div>

					<div className={style["col-3"]}>
						<h2>Hours</h2>
						<div className={style['footer-col-texts']}>
							<div className={style["col-first-date"]}>
								<h3>Monday to Friday</h3>
								<p>6:00 AM - 9:00 PM</p>
							</div>
							<div className={style["col-first-date"]}>
								<h3>Saturday & Sunday</h3>
								<p>8:00 AM - 8:00 PM</p>
							</div>
						</div>
					</div>

					<div className={style["col-3"]}>
						<h2>Get a free estimate</h2>
						<div className={style["footer-col-texts"]}>
							<a className={style["phone-number"]} href='tel:994853117'>
								(414) 567 - 2109
							</a>
							<p className={style["call-text"]}>
								Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
							</p>
						</div>
						<div className={style['footer-btn']}>
							<BtnsComponents word={"Request a free quote"} status={"primary"} />
						</div>
					</div>
				</div>

			</div>

			<div className={style["line"]}></div>
			<div className={style["footerEnd"]}>
				<div className={style["row"]}>
					<div className="logo">
						<a href="#home">
							<img src={logo} alt="logo" />
						</a>
					</div>
					<div className={style["footer-info"]}>
						<p className={style["texts"]}>
							Copyright © Cleaning X | Designed by
						</p>
						<div className={style["row"]}>
							<a href="#home">BRIX Templates</a>
							<p className={style["texts"]}>- Powered by</p>
						</div>
						<div className={style["row"]}>
							<a target='_blank' href="https://t.me/abdukakhkhorov_bakhodir">BakhaDev</a>
							<p className={style["texts"]}>-Licenses</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterComponent