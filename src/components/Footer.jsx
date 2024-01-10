import { Icon } from '@iconify/react';

const Footer = () => {
	return (
		<>
			<footer className='p-4'>
				<div className='grid grid-cols-5 gap-8 text-sm'>
					<div className='flex flex-col '>
						<h3 className='font-semibold uppercase text-base'>
							Shop
						</h3>
						<p>t-shirt</p>
						<p>jeans</p>
						<p>jacket</p>
						<p>clothing & accessories</p>
					</div>

					<div className='flex flex-col'>
						<h3 className='font-semibold uppercase text-base'>
							Community
						</h3>
						<p>about us</p>
						<p>events</p>
						<p>the flexfy blog</p>
						<p>join our rewards program</p>
					</div>

					<div className='flex flex-col'>
						<h3 className='font-semibold uppercase text-base'>
							Learn
						</h3>
						<p>fit guide</p>
						<p>size charts</p>
						<p>contacts us</p>
						<p>faqs</p>
					</div>

					<div className='flex flex-col'>
						<h3 className='font-semibold uppercase text-base'>
							Resources
						</h3>
						<p>returns & exchange (us)</p>
						<p>returns (canada)</p>
						<p>privacy & terms</p>
						<p>careers</p>
					</div>

					<div className='flex flex-col'>
						<h3 className='font-semibold uppercase text-lg'>
							flexfy
						</h3>
						<p>Confidence from within</p>
						<p className='text-base'>
							Sign up for P50 OFF your first order
						</p>
						<div className='flex gap-1 mt-1'>
							<input
								type='text'
								placeholder='email address'
								className='p-3 flex-1 outline-none'
								style={{
									border: '1px solid #000',
									borderRadius: '6px'
								}}
							/>
							<button className='py-3 px-4 rounded-md text-black font-semibold bg-red-300'>
								join
							</button>
						</div>
						<p className='font-semibold text-sm mt-1'>
							*By signin up, you agree to receive marketing emails
							from LIVELY. You can unsubcribe any time bt clicking
							the link at the bottom of our emails
						</p>
						<p className='text-[#ccc] underline'>Privacy & Terms</p>
					</div>
				</div>

				<div className='my-4 flex gap-2'>
					<Icon
						icon='mdi:instagram'
						height={28}
					/>
					<Icon
						icon='ri:facebook-fill'
						height={28}
					/>
					<Icon
						icon='ic:baseline-tiktok'
						height={28}
					/>
				</div>
			</footer>
			<div className='bg-red-300 text-black text-center text-sm p-1'>
				Copyright 2023 FLEXFY / Terms / Privacy
			</div>
			<div className=' text-black text-center text-sm p-1'>
				Designed by AVL Team
			</div>
		</>
	);
};

export default Footer;
