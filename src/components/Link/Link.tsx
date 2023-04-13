import React from 'react';

interface ILinkProps
{
	label?: string | React.ReactNode;
	href?: string;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

export class Link extends React.Component<ILinkProps>
{
	public render = () =>
	{
		const colorStyle: string = (!this.props.disabled) ? 'text-secondary-400 hover:underline' : 'text-base-400';

		return (
			<>
				<a
					href={this.props.href}
					onClick={(!this.props.disabled) ? this.props.onClick : undefined}
					className={`${this.props.className} text-sm font-medium ${colorStyle} cursor-pointer`}
					style={this.props.style}>
					{this.props.label}
				</a>
			</>
		);
	}
}
