import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowDownRightOutline extends React.Component<IIconProps> {
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
						d='M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25'></path>
				</svg>
			</>
		);
	};
}
