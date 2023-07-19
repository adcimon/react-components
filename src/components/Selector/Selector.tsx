import React from 'react';

interface ISelectorProps {
	label?: string;
	icon?: React.ReactNode;
	defaultValue?: string | number | readonly string[] | undefined;
	value?: string | number | readonly string[] | undefined;
	disabled?: boolean;
	onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class Selector extends React.Component<ISelectorProps> {
	public render = () => {
		const colorStyle: string = !this.props.disabled
			? 'hover:border-primary-500 focus:border-primary-600 focus:outline-none focus:shadow-outline-primary-600'
			: '';

		return (
			<>
				<label
					className={`${this.props.className} block mt-2 text-sm`}
					style={this.props.style}>
					<span className='text-base-400'>{this.props.label}</span>
					<div className='relative'>
						<select
							defaultValue={this.props.defaultValue}
							value={this.props.value}
							disabled={this.props.disabled}
							onChange={this.props.onChange}
							className={`block w-full mt-1 px-3 py-2 ${
								this.props.icon ? 'pl-10' : ''
							} text-sm text-base-300 bg-base-700 border-1 rounded border-base-600 ${colorStyle} transition-colors duration-150 select`}>
							{this.props.children}
						</select>
						<div className={`flex items-center ml-3 absolute inset-y-0 text-base-400 pointer-events-none`}>
							{this.props.icon}
						</div>
					</div>
				</label>
			</>
		);
	};
}
