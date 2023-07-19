import React from 'react';

interface IModalFooterProps {
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class ModalFooter extends React.Component<IModalFooterProps> {
	public render = () => {
		return (
			<>
				<div
					className='flex flex-col sm:items-center justify-end px-6 py-2 -mx-6 mt-4 gap-3 sm:flex-row bg-base-800'
					style={this.props.style}>
					{this.props.children}
				</div>
			</>
		);
	};
}
