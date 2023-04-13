import React from 'react';
import { Paginator } from './Paginator';

interface ITableProps
{
	page: number;
	rowCount: number;
	rowsPerPage: number;
	onChangePage?: (page: number) => void;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export class Table extends React.Component<ITableProps>
{
	public render = () =>
	{
		return (
			<>
				<div
					className='w-full rounded-lg shadow-xs'>
					<div
						className={`${this.props.className} w-full overflow-x-auto bg-base-800`}
						style={this.props.style}>
						<table
							className='w-full whitespace-no-wrap'>
							<tbody
								className='bg-base-800 border-b border-base-700 divide-y divide-base-700'>
								{this.props.children}
							</tbody>
						</table>
					</div>
					<Paginator
						page={this.props.page}
						rowCount={this.props.rowCount}
						rowsPerPage={this.props.rowsPerPage}
						onChangePage={this.props.onChangePage}/>
				</div>
			</>
		);
	}
}
