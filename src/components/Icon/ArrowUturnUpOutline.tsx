import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowUturnUpOutline extends React.Component<IIconProps> {
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
						d='M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3'></path>
				</svg>
			</>
		);
	};
}
