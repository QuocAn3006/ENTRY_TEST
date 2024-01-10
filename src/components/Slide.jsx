/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const Slide = ({ slideImg }) => {
	return (
		<div
			className='mt-1 h-[350px] relative bg-no-repeat bg-cover bg-center'
			style={{
				backgroundImage: `url(${slideImg})`
			}}
		>
			<div className='absolute right-24 top-[40%]'>
				<p className='text-5xl font-semibold font-serif'>
					It's <span className='text-red-400'>Spring</span> Again
				</p>
				<p className='text-right text-xs mt-2 font-semibold'>
					This new drop is so good you'll want one of everything
				</p>
			</div>
		</div>
	);
};

export default Slide;
