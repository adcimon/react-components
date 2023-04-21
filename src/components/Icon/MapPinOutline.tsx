import React from 'react';

export class MapPinOutline extends React.Component<IIconProps>
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
						d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'>
					</path>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'>
					</path>
				</svg>
			</>
		);
	}
}
