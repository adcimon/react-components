import React from 'react';
import { IIconProps } from './IIconProps';

export class ChevronDoubleDownOutline extends React.Component<IIconProps> {
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
						d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'></path>
				</svg>
			</>
		);
	};
}
