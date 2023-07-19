import React from 'react';

interface IRowProps {
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class Row extends React.Component<IRowProps> {
	public render = () => {
		return (
			<>
				<tr
					className={`${this.props.className} text-base-400`}
					style={this.props.style}>
					{this.props.children}
				</tr>
			</>
		);
	};
}
