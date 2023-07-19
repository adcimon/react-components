import React from 'react';
import { ICardState } from './ICardState';

interface IProfileCardProps {
	title?: string;
	subtitle?: string;
	source?: string;
	scale?: boolean;
	onClick?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

export class ProfileCard extends React.Component<IProfileCardProps, ICardState> {
	constructor(props: IProfileCardProps) {
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
					className={`${this.props.className} flex items-center text-sm border-2 rounded-lg border-transparent ${clickableStyle} ${animationStyle}`}
					style={this.props.style}>
					<div className='relative w-8 h-8 mr-3 rounded-full md:block hidden'>
						<img
							className='w-full h-full object-cover rounded-full'
							src={this.props.source}
						/>
						<div className='absolute inset-0 rounded-full shadow-inner'></div>
					</div>
					<div>
						<p className='font-semibold'>{this.props.title}</p>
						<p className='text-xs text-base-400'>{this.props.subtitle}</p>
					</div>
				</div>
			</>
		);
	};
}
