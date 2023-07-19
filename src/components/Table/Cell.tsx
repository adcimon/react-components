import React from 'react';

interface ICellProps {
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class Cell extends React.Component<ICellProps> {
	public render = () => {
		return (
			<>
				<td
					className={`${this.props.className} px-4 py-3`}
					style={this.props.style}>
					{this.props.children}
				</td>
			</>
		);
	};
}
