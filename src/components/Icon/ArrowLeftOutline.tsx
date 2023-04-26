import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowLeftOutline extends React.Component<IIconProps>
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
						d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'>
					</path>
				</svg>
			</>
		);
	}
}
