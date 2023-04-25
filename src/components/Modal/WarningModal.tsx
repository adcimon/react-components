import React from 'react';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { Button, ButtonVariant } from '../Button/Button';

interface IWarningModalProps
{
	visible: boolean;
	title?: string;
	onAccept?: () => void;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class WarningModal extends React.Component<IWarningModalProps>
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
							className='inline-block w-8 h-8 mr-4 bg-white rounded-full'>
							<svg
								className='w-full h-full scale-150 text-yellow-500'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'>
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
							variant={ButtonVariant.Warning}
							onClick={this.props.onAccept}/>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
