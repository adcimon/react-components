import React from 'react';

export enum TagVariant {
	Enabled,
	Disabled,
	Success,
	Warning,
	Danger,
}

interface ITagProps {
	label?: string;
	variant?: TagVariant;
	className?: string;
	style?: React.CSSProperties;
}

export class Tag extends React.Component<ITagProps> {
	public render = () => {
		let colorStyle: string = '';
		switch (this.props.variant) {
			case TagVariant.Disabled:
				colorStyle = 'text-base-100 bg-base-600';
				break;
			case TagVariant.Success:
				colorStyle = 'text-green-100 bg-green-700';
				break;
			case TagVariant.Warning:
				colorStyle = 'text-yellow-100 bg-yellow-500';
				break;
			case TagVariant.Danger:
				colorStyle = 'text-red-100 bg-red-700';
				break;
			case TagVariant.Enabled:
			default:
				colorStyle = 'text-primary-100 bg-primary-600';
				break;
		}

		return (
			<>
				<span
					className={`${this.props.className} px-2 py-1 text-sm font-semibold leading-tight rounded-full ${colorStyle}`}
					style={this.props.style}>
					{this.props.label}
				</span>
			</>
		);
	};
}
