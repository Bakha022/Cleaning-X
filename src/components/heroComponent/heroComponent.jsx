import React from 'react'
import BtnsComponents from '../btnComponent/btnsComponents'
import CallComponent from '../callComponent/callComponent'
import style from "./heroComponent.module.css"

const HeroComponent = () => {
	return (
		<div className={style['HERO']}>
			<section className={style['container']}>
				<div className={style['row']}>
					<div className={style["hero-left"]}>
						<h2>Quality cleaning for your home</h2>
						<p className={style['hero-text']}>
							Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
						</p>
						<div className={style["hero-row"]}>
							<BtnsComponents word={"Get a free quote"} status={"primary"} />
							<CallComponent />
						</div>
					</div>
					<div className={style["hero-right"]}>

					</div>
				</div>
			</section>
		</div>
	)
}

export default HeroComponent