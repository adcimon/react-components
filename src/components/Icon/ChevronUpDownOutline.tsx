import React from 'react';
import { IIconProps } from './IIconProps';

export class ChevronUpDownOutline extends React.Component<IIconProps>
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
						d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'>
					</path>
				</svg>
			</>
		);
	}
}
