import React from 'react';

interface IIconToggleProps {
	value?: boolean;
	iconOn?: React.ReactNode;
	iconOff?: React.ReactNode;
	disabled?: boolean;
	onChange?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

export class IconToggle extends React.Component<IIconToggleProps> {
	public render = () => {
		const colorStyle: string = !this.props.disabled ? 'hover:text-white transition-colors duration-150' : '';

		return (
			<>
				<button
					disabled={this.props.disabled}
					onClick={this.props.onChange}
					className={`${this.props.className} inline-flex items-center px-2 py-2 text-sm font-semibold rounded text-base-400 ${colorStyle}`}
					style={this.props.style}>
					{this.props.value ? this.props.iconOn : this.props.iconOff}
				</button>
			</>
		);
	};
}
