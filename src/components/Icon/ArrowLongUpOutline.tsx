import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowLongUpOutline extends React.Component<IIconProps>
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
						d='M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18'>
					</path>
				</svg>
			</>
		);
	}
}
