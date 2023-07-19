import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowLongUpSolid extends React.Component<IIconProps> {
	public render = () => {
		return (
			<>
				<svg
					className={this.props.className || 'w-5 h-5'}
					viewBox='0 0 24 24'
					fill='currentColor'
					style={this.props.style}>
					<path
						clipRule='evenodd'
						fillRule='evenodd'
						d='M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75z'></path>
				</svg>
			</>
		);
	};
}
