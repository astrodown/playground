
import Modal from "./shared/Modal";
import SlideOver from "./shared/SlideOver";
import Table from "./shared/Table";


interface Props {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	data: any;
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	colHeaders: any;
	dataTitle: string
}


export default function DataPreviewEditor({ data, colHeaders, dataTitle }: Props) {
	return (
		// @ts-ignore
		<Modal openText="Preview" title={dataTitle} className="max-w-3xl">
			<Modal.Body>
				<Table data={data} colHeaders={colHeaders} />
			</Modal.Body>
		</Modal>
	);
}
