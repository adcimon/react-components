import React from 'react';

export enum ButtonVariant
{
	Normal,
	Success,
	Warning,
	Danger
}

interface IButtonProps
{
	label?: string;
	variant?: ButtonVariant;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	className?: string;
	style?: React.CSSProperties;
}

export class Button extends React.Component<IButtonProps>
{
	public render = () =>
	{
		let colorStyle: string = '';
		switch( this.props.variant )
		{
			case ButtonVariant.Success:
				colorStyle = 'bg-green-600 hover:bg-green-500 focus:bg-green-500 active:bg-green-600 focus:shadow-outline-green-600';
				break;
			case ButtonVariant.Warning:
				colorStyle = 'bg-yellow-600 hover:bg-yellow-500 focus:bg-yellow-500 active:bg-yellow-600 focus:shadow-outline-yellow-600';
				break;
			case ButtonVariant.Danger:
				colorStyle = 'bg-red-600 hover:bg-red-500 focus:bg-red-500 active:bg-red-600 focus:shadow-outline-red-600';
				break;
			case ButtonVariant.Normal:
			default:
				colorStyle = 'bg-primary-600 hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-600 focus:shadow-outline-primary-600';
				break;
		}

		if( this.props.disabled )
		{
			colorStyle = 'bg-base-600';
		}

		return (
			<>
				<button
					disabled={this.props.disabled}
					onClick={this.props.onClick}
					className={`${this.props.className} block px-6 py-2 text-sm font-medium leading-5 text-center text-white ${colorStyle} border border-transparent rounded-lg focus:outline-none transition-colors duration-150`}
					style={this.props.style}>
					{this.props.label}
				</button>
			</>
		);
	}
}
