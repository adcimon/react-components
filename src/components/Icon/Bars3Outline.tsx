import React from 'react';
import { IIconProps } from './IIconProps';

export class Bars3Outline extends React.Component<IIconProps>
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
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'>
					</path>
				</svg>
			</>
		);
	}
}
