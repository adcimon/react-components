import React from 'react';

export class ChevronUpOutline extends React.Component<IIconProps>
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
						d='M4.5 15.75l7.5-7.5 7.5 7.5'>
					</path>
				</svg>
			</>
		);
	}
}
