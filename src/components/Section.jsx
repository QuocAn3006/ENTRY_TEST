/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';

const Section = ({
	title,
	buttonText,
	products,
	slidesPerView = 5,
	isCategories = false,
	isRaving = false
}) => {
	const swiperRef = useRef();
	return (
		<section className='p-4'>
			<div className='flex gap-2 items-center justify-between'>
				<div className='flex items-center gap-2'>
					<h3 className='font-semibold text-xl'>{title}</h3>
					{!isCategories && !isRaving && (
						<button className='p-2 rounded-md bg-red-300 text-black'>
							{buttonText}
						</button>
					)}
				</div>

				<div className='flex items-center rounded-full border-2 border-black/15  text-black'>
					<button
						className='px-3 py-1.5'
						onClick={() => swiperRef.current?.slidePrev()}
					>
						<Icon
							icon='icon-park-outline:left'
							height={24}
						/>
					</button>
					<span className='w-0.5 h-6 rounded bg-black/10' />
					<button
						className='px-3 py-1.5'
						onClick={() => swiperRef.current?.slideNext()}
					>
						<Icon
							icon='icon-park-outline:right'
							height={24}
						/>
					</button>
				</div>
			</div>
			<Swiper
				className='mt-4'
				loop={true}
				onBeforeInit={swiper => {
					swiperRef.current = swiper;
				}}
				breakpoints={{
					0: {
						spaceBetween: 15,
						slidesPerView: 2,
						slidesPerGroup: 2
					},
					640: {
						spaceBetween: 20,
						slidesPerView: 3,
						slidesPerGroup: 3
					},
					1024: {
						spaceBetween: 25,
						slidesPerView,
						slidesPerGroup: slidesPerView
					}
				}}
			>
				{products.map(item => (
					<SwiperSlide key={item._id}>
						<Card
							item={item}
							isCategories={isCategories}
							isRaving={isRaving}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Section;
