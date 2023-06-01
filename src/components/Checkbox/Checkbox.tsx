import React from 'react';

interface ICheckboxProps
{
	label?: string | React.ReactNode;
	defaultValue?: string | number | readonly string[] | undefined;
	value?: string | number | readonly string[] | undefined;
	disabled?: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
	className?: string;
	style?: React.CSSProperties;
}

export class Checkbox extends React.Component<ICheckboxProps>
{
	public render = () =>
	{
		const colorStyle: string = (!this.props.disabled) ? 'hover:border-primary-500 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary-600' : '';

		return (
			<>
				<label
					className={this.props.className + ' inline-flex items-center m-1 text-base-400'}
					style={this.props.style}>
					<input
						defaultValue={this.props.defaultValue}
						value={this.props.value}
						type='checkbox'
						disabled={this.props.disabled}
						onChange={this.props.onChange}
						className={`w-4 h-4 text-primary-600 bg-base-700 border-1 rounded border-base-600 ${colorStyle} transition-colors duration-150 checkbox`}/>
					<span
						className='ml-2'>
						{this.props.label}
					</span>
				</label>
			</>
		);
	}
}
