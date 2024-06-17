import React from 'react'
import AboutComponent from '../components/aboutComponent/aboutComponent'
import ArticelComponent from '../components/articelsComponent/articleComponent'
import ContactComponent from '../components/contactComponent/contactComponent'
import FooterComponent from '../components/footer/footerComponent'
import HeroComponent from '../components/heroComponent/heroComponent'
import NavbarComponents from '../components/navbar/navbarComponents'
import PosterComponent from '../components/posterComponent/posterComponent'
import ServicesComponent from '../components/servicesComponent/servicesComponent'

const Home = () => {
	return (
		<section className='cleaning'>
			<div id='home'>
				<NavbarComponents />
				<main>
					<HeroComponent />
					<AboutComponent />
					<ServicesComponent />
					<PosterComponent />
					<ArticelComponent />
					<ContactComponent />
				</main>
				<FooterComponent />
			</div>
		</section>
	)
}

export default Home