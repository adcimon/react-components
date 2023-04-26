import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowUpRightOutline extends React.Component<IIconProps>
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
						d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'>
					</path>
				</svg>
			</>
		);
	}
}
