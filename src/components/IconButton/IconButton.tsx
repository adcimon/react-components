import React from 'react';

interface IButtonProps
{
	icon?: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

export class IconButton extends React.Component<IButtonProps>
{
	public render = () =>
	{
		const colorStyle: string = (!this.props.disabled) ? 'hover:text-base-200 hover:bg-primary-900 transition-colors duration-150' : '';

		return (
			<>
				<button
					disabled={this.props.disabled}
					onClick={this.props.onClick}
					className={`${this.props.className} inline-flex items-center px-2 py-2 text-sm font-semibold rounded text-base-400 ${colorStyle}`}
					style={this.props.style}>
					{this.props.icon}
				</button>
			</>
		);
	}
}
