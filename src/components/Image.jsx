/* eslint-disable react/prop-types */
const Image = props => {
	const { src, alt = '', className = '', height = 400, width = 300 } = props;
	return (
		<div className={`bg-stone-900 overflow-hidden ${className}`}>
			<img
				src={src}
				alt={alt}
				className='object-cover h-full w-full'
				width={width}
				height={height}
			/>
		</div>
	);
};

export default Image;
