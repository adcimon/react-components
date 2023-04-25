import React from 'react';

interface IIconButtonProps
{
	icon?: React.ReactNode;
	iconHover?: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

interface IIconButtonState
{
	hover: boolean;
}

export class IconButton extends React.Component<IIconButtonProps, IIconButtonState>
{
	constructor( props: IIconButtonProps )
	{
		super(props);
		this.state = { hover: false };
	}

	private handleMouseEnter = () =>
	{
		this.setState({ hover: true });
	}

	private handleMouseLeave = () =>
	{
		this.setState({ hover: false });
	}

	public render = () =>
	{
		const colorStyle: string = (!this.props.disabled && !this.props.iconHover) ? 'hover:text-white hover:bg-primary-800 transition-colors duration-150' : '';

		return (
			<>
				<button
					disabled={this.props.disabled}
					onClick={this.props.onClick}
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					className={`${this.props.className} inline-flex items-center px-2 py-2 text-sm font-semibold rounded text-base-400 ${colorStyle}`}
					style={this.props.style}>
					{(this.state.hover && this.props.iconHover) ? this.props.iconHover : this.props.icon}
				</button>
			</>
		);
	}
}
