import React from 'react';

export class PauseOutline extends React.Component<IIconProps>
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
						d='M15.75 5.25v13.5m-7.5-13.5v13.5'>
					</path>
				</svg>
			</>
		);
	}
}
