
import SlideOver from "./shared/SlideOver";
import Table from "./shared/Table";


interface Props {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	data: any;
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	colHeaders: any;
}

export default function DataPreviewEditor({ data, colHeaders }: Props) {
	return (
		// @ts-ignore
		<SlideOver>
			<Table data={data} colHeaders={colHeaders} />
		</SlideOver>
	);
}
