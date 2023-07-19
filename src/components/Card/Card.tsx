import React from 'react';
import { ICardState } from './ICardState';

interface ICardProps {
	title?: string;
	scale?: boolean;
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class Card extends React.Component<ICardProps, ICardState> {
	constructor(props: ICardProps) {
		super(props);
		this.state = { hover: false };
	}

	private handleMouseEnter = () => {
		this.setState({ hover: true });
	};

	private handleMouseLeave = () => {
		this.setState({ hover: false });
	};

	public render = () => {
		const clickableStyle: string = this.props.onClick
			? 'hover:border-primary-600 transition-transform duration-300 ease-out cursor-pointer'
			: '';
		const animationStyle: string = this.state.hover && this.props.scale && this.props.onClick ? 'scale-105' : '';

		return (
			<>
				<div
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
					className={`${this.props.className} min-w-0 p-4 bg-base-700 border-2 rounded-lg border-transparent shadow-xs ${clickableStyle} ${animationStyle}`}
					style={this.props.style}>
					<p className='mb-4 font-semibold text-base-300'>{this.props.title}</p>
					<p className='text-base-400'>{this.props.children}</p>
				</div>
			</>
		);
	};
}
