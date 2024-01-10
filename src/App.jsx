import Navbar from './components/Navbar';
import Section from './components/Section';
import Slide from './components/Slide';
import { products, KolsImage } from './constants';
import slideImg from './assets/imgs/tshirts/slide.webp';
import slide1 from './assets/imgs/tshirts/slide1.jpg';
import slide2 from './assets/imgs/tshirts/slide2.jpg';
import { Icon } from '@iconify/react';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Slide slideImg={slideImg} />
			<Section
				title={'Best sellers'}
				buttonText={'shop now'}
				products={products}
			/>

			<Section
				title={'Up to 30% off'}
				buttonText={'shop bars'}
				products={products}
			/>

			<Section
				title={'15% Off Categories'}
				buttonText={'shop bars'}
				products={products}
				isCategories={true}
			/>

			<section className='my-4'>
				<div className='flex'>
					<div
						className='w-1/2 h-[350px] bg-cover bg-center relative'
						style={{
							backgroundImage: `url(${slide1})`,
							backgroundRepeat: 'no-repeat'
						}}
					>
						<button className='bg-white p-2 text-black absolute left-2 bottom-2 rounded-lg'>
							New arrival
						</button>
					</div>
					<div
						className='w-1/2 h-[350px] bg-cover relative'
						style={{
							backgroundImage: `url(${slide2})`,
							backgroundRepeat: 'no-repeat'
						}}
					>
						<button className='bg-white p-2 text-black absolute right-2 bottom-2 rounded-lg'>
							Beanie
						</button>
					</div>
				</div>
			</section>

			<Section
				title={'Our Crew Raving'}
				buttonText={'shop bars'}
				products={products}
				isRaving={true}
			/>

			<section className='my-4'>
				<div className='flex'>
					<div className='w-1/2 h-[350px] bg-amber-200 flex justify-center items-center flex-col gap-2'>
						<p className='text-lg font-semibold'>
							Promotion for Member
						</p>
						<p>
							Sign up now and get{' '}
							<span className='font-semibold'>P50</span> coupon
						</p>
						<button className='bg-white p-2 text-black rounded-lg font-semibold'>
							join rewards
						</button>
					</div>
					<div
						className='w-1/2 h-[350px] bg-cover '
						style={{
							backgroundImage: `url(${slide2})`,
							backgroundRepeat: 'no-repeat'
						}}
					></div>
				</div>
			</section>

			<section className='my-4'>
				<div className='p-4'>
					<div className='flex items-center justify-between'>
						<div className='flex gap-2 items-center '>
							<p className='italic'>join the community</p>
							<button className='bg-red-300 text-black font-semibold p-2 rounded-md'>
								Become our KOLS
							</button>
						</div>

						<div className='flex gap-2 items-center'>
							<Icon
								icon='bi:instagram'
								height={24}
								className='bg-red-300 rounded-md'
							/>
							<Icon
								icon='ic:baseline-tiktok'
								height={24}
								className='bg-red-300 rounded-md'
							/>
						</div>
					</div>
				</div>
				<div className='flex max-w-full'>
					{KolsImage.map((item, idx) => (
						<img
							key={idx}
							src={item.image}
							alt={item.image}
							width='100%'
							height={60}
						/>
					))}
				</div>
				<div className='bg-red-300 flex justify-center items-center flex-col'>
					<p className='italic text-xl font-semibold mt-12'>
						Confidence from within
					</p>
					<p className=' text-sm  mt-2'>
						Post your pictures on your instagram or facbook with
						hastag #flexfy
					</p>

					<button className='bg-white p-2 text-black mt-4 rounded-md mb-12'>
						About us
					</button>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default App;
