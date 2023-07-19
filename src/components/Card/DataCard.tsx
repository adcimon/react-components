import React from 'react';
import { ICardState } from './ICardState';

interface IDataCardProps {
	title?: string;
	icon?: React.ReactNode;
	scale?: boolean;
	onClick?: () => void;
	className?: string;
	iconClassName?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class DataCard extends React.Component<IDataCardProps, ICardState> {
	constructor(props: IDataCardProps) {
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
					className={`${this.props.className} flex items-center p-4 bg-base-700 border-2 rounded-lg border-transparent shadow-xs ${clickableStyle} ${animationStyle}`}
					style={this.props.style}>
					<div
						className={this.props.iconClassName + ' p-3 mr-4 text-primary-100 bg-primary-600 rounded-full'}>
						{this.props.icon}
					</div>
					<div>
						<p className='mb-2 text-sm font-medium text-base-400'>{this.props.title}</p>
						<p className='text-lg font-semibold text-base-200'>{this.props.children}</p>
					</div>
				</div>
			</>
		);
	};
}
