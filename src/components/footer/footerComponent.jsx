import React from 'react'

import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6"
import BtnsComponents from '../btnComponent/btnsComponents'
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
								<FaInstagram />
							</div>
							<div className={style["rectangle"]}>
								<FaTwitter />
							</div>
							<div className={style["rectangle"]}>
								<FaGithub />
							</div>
							<div className={style["rectangle"]}>
								<FaFacebook />
							</div>
							<div className={style["rectangle"]}>
								<FaYoutube />
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
						<div className={style["col-second-date"]}>
							<h3>Saturday & Sunday</h3>
							<p>8:00 AM - 8:00 PM</p>
						</div>
						</div>
					</div>

					<div className={style["col-3"]}>
						<h2>Get a free estimate</h2>
						<a className={style["phone-number"]} href='tel:994853117'>
							(414) 567 - 2109
						</a>
						<p className={style["call-text"]}>
							Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
						</p>
						<BtnsComponents word={"Request a free quote"} status={"primary"} />
					</div>
				</div>

			</div>
			<div className={style["footerEnd"]}>

			</div>
		</div>
	)
}

export default FooterComponent