import React from 'react';
import { IIconProps } from './IIconProps';

export class PlusCircleSolid extends React.Component<IIconProps>
{
	public render = () =>
	{
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
						d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z'>
					</path>
				</svg>
			</>
		);
	}
}
