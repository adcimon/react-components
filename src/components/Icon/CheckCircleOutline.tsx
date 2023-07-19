import React from 'react';
import { IIconProps } from './IIconProps';

export class CheckCircleOutline extends React.Component<IIconProps> {
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
						d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
				</svg>
			</>
		);
	};
}
