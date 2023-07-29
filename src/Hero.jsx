import heroImg from './assets/hero.svg';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
						molestiae nisi consectetur natus itaque, voluptatum aperiam
						cupiditate dolores omnis, veritatis laudantium exercitationem
						excepturi minima nihil illum? Sint rem facilis nisi!
					</p>
				</div>
				<div className='img-container'>
					<img src={heroImg} alt='woman and the browser' className='img' />
				</div>
			</div>
		</section>
	);
};
export default Hero;
