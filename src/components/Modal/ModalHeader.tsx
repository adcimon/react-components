import React from 'react';

interface IModalHeaderProps {
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class ModalHeader extends React.Component<IModalHeaderProps> {
	public render = () => {
		return (
			<>
				<div
					className='flex items-center mb-4 text-lg font-semibold text-base-300'
					style={this.props.style}>
					{this.props.children}
				</div>
			</>
		);
	};
}
