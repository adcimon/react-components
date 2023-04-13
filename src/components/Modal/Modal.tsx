import React from 'react';

interface IModalProps
{
	visible: boolean;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

interface IModalState
{
	hidden: boolean;
}

export class Modal extends React.Component<IModalProps, IModalState>
{
	constructor( props: IModalProps )
	{
		super(props);
		this.state = { hidden: false };
	}

	componentDidMount(): void
	{
		if( !this.props.visible )
		{
			this.setState({ hidden: true });
		}
	}

	componentDidUpdate( prevProps: Readonly<IModalProps>, prevState: Readonly<IModalState>, snapshot?: any ): void
	{
		if( (prevProps.visible !== this.props.visible) && this.state.hidden )
		{
			this.setState({ hidden: false });
		}
	}

	public render = () =>
	{
		const animationStyle: string = (this.props.visible) ? 'animate-fade-in': 'animate-fade-out';

		return (
			<>
				<div
					hidden={this.state.hidden}
					className={`animation-duration-300 animation-fill-forwards ${animationStyle}`}
					style={this.props.style}>
					<div
						className='fixed inset-0 z-30 flex items-end sm:items-center sm:justify-center bg-black bg-opacity-50'>
						<div
							className='w-full px-6 py-3 sm:m-4 sm:max-w-xl bg-base-800 border-1 rounded-t-lg sm:rounded-lg border-base-700 overflow-hidden'>
							<div
								className='mt-4 mb-2'>
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
