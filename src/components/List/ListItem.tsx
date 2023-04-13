import React from 'react';

interface IListItemProps
{
	icon?: React.ReactNode;
	label?: string | React.ReactNode;
	selected?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

export class ListItem extends React.Component<IListItemProps>
{
	public render = () =>
	{
		const colorStyle: string = (!this.props.disabled) ? 'hover:text-base-200 hover:bg-primary-900' : '';
		const cursorStyle: string = (this.props.onClick) ? 'cursor-pointer' : '';

		return (
			<>
				<li
					className={`${this.props.className} relative px-2 py-1 ${cursorStyle}`}
					style={this.props.style}>
					{
						(this.props.selected) &&
						<span
							className='absolute inset-y-0 left-0 w-1 bg-primary-600 rounded-tr-lg rounded-br-lg'>
						</span>
					}
					<button
						disabled={this.props.disabled}
						onClick={this.props.onClick}
						className={`inline-flex items-center w-full px-2 py-2 text-sm font-semibold rounded ${colorStyle} transition-colors duration-150`}>
						{this.props.icon}
						<span
							className='ml-4'>
							{this.props.label}
						</span>
					</button>
				</li>
			</>
		);
	}
}
