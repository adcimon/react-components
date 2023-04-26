import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowDownLeftOutline extends React.Component<IIconProps>
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
						d='M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25'>
					</path>
				</svg>
			</>
		);
	}
}
