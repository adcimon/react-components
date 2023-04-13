import React from 'react';

interface ISignViewProps
{
	source?: string;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class SignView extends React.Component<ISignViewProps>
{
	public render = () =>
	{
		return (
			<>
				<div
					className={`${this.props.className} flex-1 max-w-4xl m-6 bg-base-800 border-1 rounded-lg border-base-700 shadow-xl overflow-hidden`}
					style={this.props.style}>
					<div
						className='flex flex-col md:flex-row overflow-hidden'>
						<div
							className='md:h-auto md:w-1/2'>
							<img
								className='object-cover w-full h-full'
								src={this.props.source}/>
						</div>
						<div
							className='flex items-center justify-center p-6 sm:p-12 md:w-1/2 overflow-hidden'>
							<div
								className='w-full'>
								{this.props.children}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
