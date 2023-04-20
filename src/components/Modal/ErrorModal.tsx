import React from 'react';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { Button, ButtonVariant } from '../Button/Button';

interface IErrorModalProps
{
	visible: boolean;
	title?: string;
	onAccept?: () => void;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class ErrorModal extends React.Component<IErrorModalProps>
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
								className='w-full h-full scale-150 text-red-500'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'>
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
							variant={ButtonVariant.Danger}
							onClick={this.props.onAccept}/>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
