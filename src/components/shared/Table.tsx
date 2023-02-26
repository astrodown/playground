import React from "react";

interface Props {
	data: Record<string, string>[];
	headers: string[];
	dataTitle?: string;
	dataDescription?: string;
}

const Table = ({ data, headers, dataTitle, dataDescription }: Props) => {
	return (
		<div className="px-4">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					{dataTitle && (
						<h1 className="text-base font-semibold leading-6 text-gray-900 font-serif">
							{dataTitle}
						</h1>
					)}
					{dataDescription && (
						<p className="mt-2 text-sm text-gray-700 text-left">
							{dataDescription}
						</p>
					)}
				</div>
			</div>
			<div className="mt-4 flow-root">
				<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<table className="min-w-full divide-y divide-gray-300">
							<thead>
								<tr>
									{headers.map((header) => (
										<th
											scope="col"
											className="whitespace-nowrap px-2 py-2 text-left font-semibold text-gray-900"
										>
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white text-left">
								{data.map((row, i) => {
									return (
										<tr key={`row-${i}`}>
											{headers.map((col, j) => (
												<td
													className="whitespace-nowrap px-2 py-2 text-sm text-gray-900"
													key={`value-${i}${j}`}
												>
													{row[col]}
												</td>
											))}
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Table);
