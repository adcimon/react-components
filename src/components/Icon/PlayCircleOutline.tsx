import React from 'react';
import { IIconProps } from './IIconProps';

export class PlayCircleOutline extends React.Component<IIconProps>
{
	public render = () =>
	{
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
						d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'>
					</path>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'>
					</path>
				</svg>
			</>
		);
	}
}
