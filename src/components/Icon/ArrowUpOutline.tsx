import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowUpOutline extends React.Component<IIconProps> {
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
						d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'></path>
				</svg>
			</>
		);
	};
}
