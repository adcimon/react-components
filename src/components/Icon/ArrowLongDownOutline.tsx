import React from 'react';

export class ArrowLongDownOutline extends React.Component<IIconProps>
{
	public render = () =>
	{
		return (
			<>
				<svg
					className={this.props.className || 'w-5 h-5'}
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth='1.5'
					fill='none'
					style={this.props.style}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3'>
					</path>
				</svg>
			</>
		);
	}
}
