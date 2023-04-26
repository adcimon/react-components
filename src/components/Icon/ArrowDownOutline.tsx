import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowDownOutline extends React.Component<IIconProps>
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
						d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'>
					</path>
				</svg>
			</>
		);
	}
}
