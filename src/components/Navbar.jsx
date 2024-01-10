/* eslint-disable react/no-unknown-property */
import { Icon } from '@iconify/react';
import logo from '../assets/imgs/logo.png';
const Navbar = () => {
	return (
		<header className='h-44'>
			<nav className='h-8 bg-gradient-to-r from-red-300 to-blue-400 text-black flex items-center justify-center'>
				<p>
					Signup now and get <span class='font-medium'>P50</span>{' '}
					coupon
				</p>
			</nav>
			<div className='h-12 bg-white text-black flex justify-between items-center'>
				<div className='flex gap-2 p-2'>
					<p>rewards</p>
					<p>fit guide</p>
				</div>

				<div className='mt-4'>
					<img
						src={logo}
						alt=''
						width={140}
					/>
				</div>

				<div className='p-2 flex items-center gap-2'>
					<div className='relative'>
						<input
							type='text'
							placeholder='search'
							className='bg-slate-200 p-1'
						/>

						<div className='absolute top-2 right-2'>
							<Icon icon='icon-park-outline:search' />
						</div>
					</div>

					<Icon
						icon='clarity:user-line'
						className='text-2xl'
					/>
					<div className='relative'>
						<Icon
							icon='ph:bag'
							className='text-2xl'
						/>
						<div className='absolute top-3 right-[-4px] rounded-full w-4 h-4 flex items-center justify-center bg-red-300 text-black text-xs'>
							0
						</div>
					</div>
				</div>
			</div>

			<div className='h-24 text-black flex items-center justify-center'>
				<ul className='flex justify-between items-center gap-4 text-sm font-semibold'>
					<li className='bg-clip-text  text-transparent bg-gradient-to-r from-red-300 to-lime-500'>
						<p>
							SUMMER VIBE COLLECTION{' '}
							<span className='text-[12px]'>2023</span>
						</p>
					</li>
					<li>NEW</li>
					<li>BEST SELLERS</li>
					<li>SHIRT</li>
					<li>JEANS</li>
					<li>JACKET</li>
					<li>CLOTHING AND ACCESSORIES</li>
					<li>COLLECTION</li>
					<li className='text-red-500'>SALE</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
