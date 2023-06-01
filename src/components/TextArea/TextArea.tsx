import React from 'react';

export enum TextAreaVariant
{
	Info,
	Warning,
	Valid,
	Invalid
}

export enum TextAreaResize
{
	None,
	Horizontal,
	Vertical,
	Both
}

interface ITextAreaProps
{
	label?: string;
	value?: string | number | readonly string[] | undefined;
	rows?: number;
	placeholder?: string;
	tip?: string;
	variant?: TextAreaVariant;
	resize?: TextAreaResize;
	disabled?: boolean;
	readOnly?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

export class TextArea extends React.Component<ITextAreaProps>
{
	public render = () =>
	{
		let colorStyle: string = '';
		let tipStyle: string = '';
		switch( this.props.variant )
		{
			case TextAreaVariant.Warning:
				colorStyle = 'border-yellow-500 hover:border-yellow-400 focus:border-yellow-500 focus:shadow-outline-yellow-500';
				tipStyle = 'text-yellow-500';
				break;
			case TextAreaVariant.Valid:
				colorStyle = 'border-green-700 hover:border-green-600 focus:border-green-700 focus:shadow-outline-green-700';
				tipStyle = 'text-green-500';
				break;
			case TextAreaVariant.Invalid:
				colorStyle = 'border-red-700 hover:border-red-600 focus:border-red-700 focus:shadow-outline-red-700';
				tipStyle = 'text-red-500';
				break;
			case TextAreaVariant.Info:
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

		if( this.props.readOnly )
		{
			colorStyle = 'border-base-600';
		}

		let resize: string = '';
		switch( this.props.resize )
		{
			case TextAreaResize.Horizontal:
				resize = 'resize-x';
				break;
			case TextAreaResize.Vertical:
				resize = 'resize-y';
				break;
			case TextAreaResize.Both:
				resize = 'resize-both';
				break;
			case TextAreaResize.None:
			default:
				resize = 'resize-none';
				break;
		}

		return (
			<>
				<label
					className={`${this.props.className} inline-block mt-4 text-sm`}
					style={this.props.style}>
					<span
						className='block text-base-400'>
						{this.props.label}
					</span>
					<textarea
						value={this.props.value}
						rows={this.props.rows || 3}
						placeholder={this.props.placeholder}
						disabled={this.props.disabled}
						readOnly={this.props.readOnly}
						className={`block w-full h-full mt-1 px-2 py-2 text-sm text-base-300 bg-base-700 border-1 rounded ${colorStyle} focus:outline-none transition-colors duration-150 ${resize} textarea`}>
					</textarea>
					<span
						className={`block ${(typeof this.props.tip === 'string') ? 'h-4': ''} m-1 text-xs ${tipStyle}`}>
						{this.props.tip}
					</span>
				</label>
			</>
		);
	}
}
