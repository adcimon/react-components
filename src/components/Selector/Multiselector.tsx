import React from 'react';

interface IMultiselectorProps
{
	label?: string;
	value?: string | number | readonly string[] | undefined;
	disabled?: boolean;
	onChange?: () => void;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class Multiselector extends React.Component<IMultiselectorProps>
{
	public render = () =>
	{
		const colorStyle: string = (!this.props.disabled) ? 'hover:border-primary-500 focus:border-primary-600 focus:outline-none focus:shadow-outline-primary-600': '';

		return (
			<>
				<label
					className={`${this.props.className} block mt-2 text-sm`}
					style={this.props.style}>
					<span
						className='text-base-400'>
						{this.props.label}
					</span>
					<select
						multiple={true}
						value={this.props.value}
						disabled={this.props.disabled}
						onChange={this.props.onChange}
						className={`block mt-1 px-3 py-2 text-sm text-base-300 bg-base-700 border-1 rounded border-base-600 ${colorStyle} transition-colors duration-150`}>
						{this.props.children}
					</select>
				</label>
			</>
		);
	}
}
