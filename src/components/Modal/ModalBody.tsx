import React from 'react';

interface IModalBodyProps {
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class ModalBody extends React.Component<IModalBodyProps> {
	public render = () => {
		return (
			<>
				<div
					className='text-sm text-base-400'
					style={this.props.style}>
					{this.props.children}
				</div>
			</>
		);
	};
}
