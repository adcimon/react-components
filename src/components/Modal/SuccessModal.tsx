import React from 'react';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ButtonVariant, Button } from '../Button/Button';

interface ISuccessModalProps
{
	visible: boolean;
	title?: string;
	onAccept?: () => void;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class SuccessModal extends React.Component<ISuccessModalProps>
{
	public render = () =>
	{
		return (
			<>
				<Modal
					visible={this.props.visible}
					style={this.props.style}>
					<ModalHeader>
						<div
							className='inline-block w-8 h-8 mr-4 bg-base-200 rounded-full'>
							<svg
								className='w-full h-full scale-150 text-green-500'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'>
								</path>
							</svg>
						</div>
						<span
							className='inline-block'>
							{this.props.title}
						</span>
					</ModalHeader>
					<ModalBody>
						{this.props.children}
					</ModalBody>
					<ModalFooter>
						<Button
							label='Accept'
							variant={ButtonVariant.Success}
							onClick={this.props.onAccept}/>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
