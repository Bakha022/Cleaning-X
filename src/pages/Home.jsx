import React from 'react'
import NavbarComponents from '../components/navbar/navbarComponents'
import HeroComponent from '../components/heroComponent/heroComponent'
import AboutComponent from '../components/aboutComponent/aboutComponent'
import ServicesComponent from '../components/servicesComponent/servicesComponent'
import PosterComponent from '../components/posterComponent/posterComponent'
import ArticelComponent from '../components/articelsComponent/articleComponent'

const Home = () => {
	return (
		<section className='container'>
			<NavbarComponents />
			<HeroComponent/>
			<AboutComponent/>
			<ServicesComponent/>	
			<PosterComponent/>
			<ArticelComponent/>
		</section>
	)
}

export default Home