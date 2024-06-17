import React from 'react'
import img_1 from '../../assets/imgs/Frame.png'
import img_2 from '../../assets/imgs/IMAGE (9).png'
import BtnsComponents from '../btnComponent/btnsComponents'
import style from "./Article.module.css"


const ArticelComponent = () => {
	return (
		<div id='articels' className={style["article-component"]}>
			<div className={style["container"]}>
				<div className={style["row"]}>
					<h1 className={style['article-title']}>Articles & resources</h1>
					<div className={style["right"]}>
						<BtnsComponents word={"Get a free quote"} status={"primary"} />
						<BtnsComponents word={"Browse articles"} status={"light"} />
					</div>
				</div>
				<div className={style['article-main']}>
					<div className={style['col-6']}>
						<div className={style["col-content"]}>
							<img src={img_1} alt="article-img" />
							<div className={style["card"]}>
								<h2 className={style["card-title"]}>8 best vacuum cleaners to clean any mess for your home in 2022</h2>
								<p className={style["card-text"]}>
									Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.
								</p>
								<div className={style["card-row"]}>
									<p className={style["card-date"]}>Jan 28, 2022</p>
									<div className={style["card-rectangle"]}></div>
								</div>
							</div>
						</div>
					</div>
					<div className={style['col-6']}>
						<div className={style["col-content"]}>
							<img src={img_2} alt="article-img" />
							<div className={style["card"]}>
								<h2 className={style["card-title"]}>How to properly disinfect your phone and other electronics</h2>
								<p className={style["card-text"]}>
									Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.
								</p>
								<div className={style["card-row"]}>
									<p className={style["card-date"]}>Feb 1, 2022</p>
									<div className={style["card-rectangle"]}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArticelComponent