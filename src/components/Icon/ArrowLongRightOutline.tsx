import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowLongRightOutline extends React.Component<IIconProps>
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
						d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'>
					</path>
				</svg>
			</>
		);
	}
}
