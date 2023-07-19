import React from 'react';

interface IProfileMenuProps {
	label?: string;
	image?: string;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

interface IProfileMenuState {
	folded?: boolean;
}

export class ProfileMenu extends React.Component<IProfileMenuProps, IProfileMenuState> {
	buttonRef: any = React.createRef();
	listRef: any = React.createRef();

	constructor(props: IProfileMenuProps) {
		super(props);
		this.state = { folded: true };
		this.handleMouseClick = this.handleMouseClick.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleMouseClick);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleMouseClick);
	}

	private handleClick = () => {
		this.setState({ folded: !this.state.folded });
	};

	private handleMouseClick = (event: any) => {
		if (this.listRef.current?.contains(event.target)) {
			this.setState({ folded: true });
			event.target.click();
		} else if (!this.buttonRef.current?.contains(event.target)) {
			this.setState({ folded: true });
		}
	};

	public render = () => {
		const animationStyle: string = this.state.folded ? 'animate-fade-out' : 'animate-fade-in';

		return (
			<>
				<div
					className='relative'
					style={this.props.style}>
					<span className='mr-2 text-base-100 font-bold'>{this.props.label}</span>
					<button
						ref={this.buttonRef}
						onClick={this.handleClick}
						className='align-middle p-0.5 rounded-full border-2 rounded border-primary-500 focus:shadow-primary-600 focus:outline-none'>
						<img
							className='object-cover w-8 h-8 rounded-full'
							src={this.props.image}
						/>
					</button>
					{
						<ul
							ref={this.listRef}
							className={`absolute right-0 w-56 mt-2 text-base-300 bg-base-800 border rounded-md border-base-700 shadow-md animation-duration-300 animation-fill-forwards ${animationStyle}`}>
							{this.props.children}
						</ul>
					}
				</div>
			</>
		);
	};
}
