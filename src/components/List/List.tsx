import React from 'react';

interface IListProps {
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class List extends React.Component<IListProps> {
	public render = () => {
		return (
			<>
				<ul
					className={this.props.className}
					style={this.props.style}>
					{this.props.children}
				</ul>
			</>
		);
	};
}
