import React from 'react';
import { ICardState } from './ICardState';

interface IVerticalCardProps {
	text?: string;
	source?: string;
	scale?: boolean;
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

export class VerticalCard extends React.Component<IVerticalCardProps, ICardState> {
	constructor(props: IVerticalCardProps) {
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
					className={`${this.props.className} overflow-hidden bg-base-700 border-2 rounded-lg border-transparent shadow-xl ${clickableStyle} ${animationStyle}`}
					style={this.props.style}>
					<div className='flex flex-col w-100 h-100 m-4 gap-3 rounded'>
						<img
							src={this.props.source}
							className='w-100 rounded-lg'
						/>
						<p className='w-100 text-base-400'>{this.props.text}</p>
					</div>
				</div>
			</>
		);
	};
}
