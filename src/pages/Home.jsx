import React from 'react'
import AboutComponent from '../components/aboutComponent/aboutComponent'
import ArticelComponent from '../components/articelsComponent/articleComponent'
import FooterComponent from '../components/footer/footerComponent'
import HeroComponent from '../components/heroComponent/heroComponent'
import NavbarComponents from '../components/navbar/navbarComponents'
import PosterComponent from '../components/posterComponent/posterComponent'
import ContactComponent from '../components/contactComponent/contactComponent'
import ServicesComponent from '../components/servicesComponent/servicesComponent'

const Home = () => {
	return (
		<section className='cleaning'>
			<div className="container">
				<NavbarComponents />
				<HeroComponent />
				<AboutComponent />
				<ServicesComponent />
				<PosterComponent />
				<ArticelComponent />
			</div>
      <ContactComponent/>
			<div className="conatiner">
				<FooterComponent/>
			</div>
		</section>
	)
}

export default Home