import React from 'react';
import { PaginatorItem } from './PaginatorItem';

interface IPaginatorProps
{
	page: number;
	rowCount: number;
	rowsPerPage: number;
	onChangePage?: (page: number) => void;
}

export class Paginator extends React.Component<IPaginatorProps>
{  
	private pagination = ( page: number, count: number ) =>
	{
		const getRange = ( start: number, end: number ) =>
		{
			return Array(end - start + 1).fill(0).map((v, i) => i + start);
		}

		let delta: number
		if( count <= 7 )
		{
			// delta === 7: [1 2 3 4 5 6 7]
			delta = 7;
		}
		else
		{
			// delta === 2: [1 ... 4 5 6 ... 10]
			// delta === 4: [1 2 3 4 5 ... 10]
			delta = (page > 4 && page < (count - 3)) ? 2 : 4;
		}

		const range =
		{
			start: Math.round(page - delta / 2),
			end: Math.round(page + delta / 2)
		}

		if( (range.start - 1) === 1 || (range.end + 1) === count )
		{
			range.start += 1;
			range.end += 1;
		}

		let pages: any =
			page > delta
			? getRange(Math.min(range.start, count - delta), Math.min(range.end, count))
			: getRange(1, Math.min(count, delta + 1));

		const rangeWithDots = (value: any, pair: any) => (pages.length + 1 !== count ? pair : [value]);

		if( pages[0] !== 1 )
		{
			pages = rangeWithDots(1, [1, '...']).concat(pages);
		}

		if( pages[pages.length - 1] < count )
		{
			pages = pages.concat(rangeWithDots(count, ['...', count]));
		}

		return pages;
	}

	private renderPreviousButton = () =>
	{
		return (
			<>
				<li>
					<button
						onClick={() => this.props.onChangePage?.(Math.max(1, this.props.page - 1))}
						className='mx-1 px-1 py-1 rounded-md rounded-l-lg hover:bg-primary-900 focus:outline-none transition-colors duration-150'>
						<svg
							viewBox='0 0 20 20'
							className='w-4 h-4 fill-current'>
							<path
								clipRule='evenodd'
								fillRule='evenodd'
								d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'>
							</path>
						</svg>
					</button>
				</li>
			</>
		)
	}

	private renderNextButton = () =>
	{
		return (
			<>
				<li>
					<button
						onClick={() => this.props.onChangePage?.(Math.min(Math.ceil(this.props.rowCount / this.props.rowsPerPage), this.props.page + 1))}
						className='mx-1 px-1 py-1 rounded-md rounded-r-lg hover:bg-primary-900 focus:outline-none transition-colors duration-150'>
						<svg
							viewBox='0 0 20 20'
							className='w-4 h-4 fill-current'>
							<path
								clipRule='evenodd'
								fillRule='evenodd'
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'>
							</path>
						</svg>
					</button>
				</li>
			</>
		)
	}

	private renderDots = () =>
	{
		return (
			<>
				<li>
					<span className='mx-0.5 py-1'>...</span>
				</li>
			</>
		)
	}

	public render = () =>
	{
		const rangeWithDots: any = this.pagination(this.props.page, Math.ceil(this.props.rowCount / this.props.rowsPerPage));
		const x: number = ((this.props.page - 1) * this.props.rowsPerPage) + 1;
		const y: number = Math.min(this.props.rowCount, (this.props.page - 1) * this.props.rowsPerPage + this.props.rowsPerPage);

		return (
			<>
				<div
					className='grid sm:grid-cols-9 px-4 py-3 text-xs font-semibold tracking-wide text-base-400 uppercase bg-base-800 border-t border-base-700'>
					<span
						className='flex items-center col-span-3'>
						{x}-{y} / {this.props.rowCount}
					</span>
					<span
						className='col-span-2'>
					</span>
					<span
						className='flex col-span-4 mt-2 sm:mt-auto sm:justify-end'>
						<nav>
							<ul
								className='inline-flex items-center'>
								{this.renderPreviousButton()}
								{
									rangeWithDots.map((value: any) =>
									{
										if( value === '...' )
										{
											return this.renderDots();
										}

										return <PaginatorItem
													key={value}
													index={value}
													selected={this.props.page === value}
													onClick={() => this.props.onChangePage?.(value)}/>
									})
								}
								{this.renderNextButton()}
							</ul>
						</nav>
					</span>
				</div>
			</>
		);
	}
}
