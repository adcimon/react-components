import React from 'react';
import { IIconProps } from './IIconProps';

export class ArrowLeftOnRectangleSolid extends React.Component<IIconProps> {
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
						d='M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z'></path>
				</svg>
			</>
		);
	};
}
