import React from 'react';
import { IIconProps } from './IIconProps';

export class LockOpenSolid extends React.Component<IIconProps> {
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
						d='M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z'></path>
				</svg>
			</>
		);
	};
}
