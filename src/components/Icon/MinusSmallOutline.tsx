import React from 'react';
import { IIconProps } from './IIconProps';

export class MinusSmallOutline extends React.Component<IIconProps>
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
						d='M18 12H6'>
					</path>
				</svg>
			</>
		);
	}
}
