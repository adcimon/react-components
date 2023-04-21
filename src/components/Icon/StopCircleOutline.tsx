import React from 'react';

export class StopCircleOutline extends React.Component<IIconProps>
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
						d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'>
					</path>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z'>
					</path>
				</svg>
			</>
		);
	}
}
