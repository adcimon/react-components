import React from 'react';
import { IIconProps } from './IIconProps';

export class PlusSmallOutline extends React.Component<IIconProps> {
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
						d='M12 6v12m6-6H6'></path>
				</svg>
			</>
		);
	};
}
