import React from 'react';

interface IRadioButtonProps
{
	label?: string | React.ReactNode;
	value?: string | number | readonly string[] | undefined;
	disabled?: boolean;
	onChange?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

export class RadioButton extends React.Component<IRadioButtonProps>
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
						type='radio'
						value={this.props.value}
						disabled={this.props.disabled}
						onChange={this.props.onChange}
						className={`w-4 h-4 text-primary-600 border-1 rounded-full ${colorStyle} transition-colors duration-150 radio`}/>
					<span
						className='ml-2'>
						{this.props.label}
					</span>
				</label>
			</>
		);
	}
}
