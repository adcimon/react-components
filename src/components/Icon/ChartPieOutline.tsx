import React from 'react';
import { IIconProps } from './IIconProps';

export class ChartPieOutline extends React.Component<IIconProps> {
	public render = () => {
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
						d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'></path>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'></path>
				</svg>
			</>
		);
	};
}
