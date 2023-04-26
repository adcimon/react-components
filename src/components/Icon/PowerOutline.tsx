import React from 'react';
import { IIconProps } from './IIconProps';

export class PowerOutline extends React.Component<IIconProps>
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
						d='M5.636 5.636a9 9 0 1012.728 0M12 3v9'>
					</path>
				</svg>
			</>
		);
	}
}
