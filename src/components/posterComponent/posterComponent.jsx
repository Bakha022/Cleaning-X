import React from 'react'
import style from './PosterComponent.module.css'

import posterImg from "../../assets/imgs/IMAGE (8).png"
import BtnsComponents from '../btnComponent/btnsComponents'
import CallComponent from '../callComponent/callComponent'

const PosterComponent = () => {
	return (
		<>
		<div className={style["poster"]}>
			<div className="row">
				<div className={style["left"]}>
						<img src={posterImg} alt="poster-img" />
				</div>
				<div className={style["right"]}>
							<p className={style["posterFirst-text"]}>
								Covid-19 sanitization
							</p>
							<h1 className={style["poster-title"]}>
								We follow guidelines to keep you safe from the COVID-19 virus
							</h1>
							<p className={style["posterSecond-text"]}>
								Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.
							</p>
							<div className={style['btns']}>
								<BtnsComponents word={"Get a free quote"} status={"primary"}/>
								<CallComponent color={"white"}/>
							</div>
				</div>
			</div>
		</div>
		<div className={style["line"]}></div>
		</>
	)
}

export default PosterComponent