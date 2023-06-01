import React from 'react';

export enum TextInputVariant
{
	Info,
	Success,
	Warning,
	Error
}

interface ITextInputProps
{
	label?: string;
	icon?: React.ReactNode;
	value?: string | number | readonly string[] | undefined;
	type?: string;
	placeholder?: string;
	tip?: string;
	variant?: TextInputVariant;
	disabled?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

export class TextInput extends React.Component<ITextInputProps>
{
	public render = () =>
	{
		let colorStyle: string = '';
		let tipStyle: string = '';
		switch( this.props.variant )
		{
			case TextInputVariant.Success:
				colorStyle = 'border-green-700 hover:border-green-600 focus:border-green-700 focus:shadow-outline-green-700';
				tipStyle = 'text-green-500';
				break;
			case TextInputVariant.Warning:
				colorStyle = 'border-yellow-500 hover:border-yellow-400 focus:border-yellow-500 focus:shadow-outline-yellow-500';
				tipStyle = 'text-yellow-500';
				break;
			case TextInputVariant.Error:
				colorStyle = 'border-red-700 hover:border-red-600 focus:border-red-700 focus:shadow-outline-red-700';
				tipStyle = 'text-red-500';
				break;
			case TextInputVariant.Info:
			default:
				colorStyle = 'border-base-600 hover:border-primary-500 focus:border-primary-600 focus:shadow-outline-primary-600';
				tipStyle = 'text-base-400';
				break;
		}

		if( this.props.disabled )
		{
			colorStyle = 'border-base-600';
			tipStyle = 'text-base-400';
		}

		return (
			<>
				<label
					className={`${this.props.className} inline-block`}
					style={this.props.style}>
					<span
						className='block text-sm text-base-400'>
						{this.props.label}
					</span>
					<div
						className='relative'>
						<input
							value={this.props.value}
							type={this.props.type}
							placeholder={this.props.placeholder}
							disabled={this.props.disabled}
							className={`block w-full mt-1 px-2 py-2 ${(this.props.icon) ? 'pl-10' : ''} text-sm text-base-300 bg-base-700 border-1 rounded ${colorStyle} focus:outline-none transition-colors duration-150`}/>
						<div
							className={`flex items-center ml-3 absolute inset-y-0 text-base-400 pointer-events-none`}>
							{this.props.icon}
						</div>
					</div>
					<span
						className={`block ${(typeof this.props.tip === 'string') ? 'h-4': ''} m-1 text-xs ${tipStyle}`}>
						{this.props.tip}
					</span>
				</label>
			</>
		);
	}
}
