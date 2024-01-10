/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import Image from './Image';

const Card = ({ item, isCategories, isRaving }) => {
	const USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	});

	return (
		<div className='select-none group'>
			<div className='rounded-lg overflow-hidden relative'>
				<Image
					src={item.image}
					alt={item.name}
					className='aspect-[2/3]'
				/>
				{!isCategories && !isRaving && (
					<>
						<h3 className='font-semibold text-lg'>{item.name}</h3>
						<h3>{USDollar.format(item.price)}</h3>
					</>
				)}

				{isCategories && (
					<button className='bg-white p-2 text-black absolute left-2 bottom-2 rounded-lg'>
						shop now
					</button>
				)}

				{isRaving && !isCategories && (
					<>
						<div className='flex flex-col items-center justify-center'>
							<div className='flex gap-1 mt-1'>
								<Icon
									icon='material-symbols:star'
									className='text-red-300'
								/>
								<Icon
									icon='material-symbols:star'
									className='text-red-300'
								/>
								<Icon
									icon='material-symbols:star'
									className='text-red-300'
								/>
								<Icon
									icon='material-symbols:star'
									className='text-red-300'
								/>
								<Icon
									icon='material-symbols:star'
									className='text-red-300'
								/>
							</div>
							<p className='flex justify-center items-center text-center text-xs mt-1 w-[50%]'>
								{item.raving}
							</p>

							<p className='underline text-base    font-semibold uppercase'>
								Shop style
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Card;
