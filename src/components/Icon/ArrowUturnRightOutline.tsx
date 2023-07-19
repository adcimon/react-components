import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowUturnRightOutline extends React.Component<IIconProps> {
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
						d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'></path>
				</svg>
			</>
		);
	};
}
