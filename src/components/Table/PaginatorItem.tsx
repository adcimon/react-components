import React from 'react';

interface IPaginatorItemProps
{
	index: number;
	selected?: boolean;
	onClick?: () => void;
}

export class PaginatorItem extends React.Component<IPaginatorItemProps>
{
	public render = () =>
	{
		const colorStyle: string = (this.props.selected) ? 'text-white bg-primary-600' : 'hover:bg-primary-900';

		return (
			<>
				<li>
					<button
						onClick={this.props.onClick}
						className={`mx-0.5 px-3 py-1 rounded-md ${colorStyle} focus:outline-none transition-colors duration-150`}>
						{this.props.index}
					</button>
				</li>
			</>
		);
	}
}
