import Modal from "../shared/Modal";
import Table from "../shared/Table";

interface Props {
	data: Record<string, string>[];
	headers: string[];
	dataTitle?: string;
	dataDescription?: string;
}

export default function DataPreview({
	data,
	headers,
	dataTitle,
	dataDescription,
}: Props) {
	return (
		<Modal openText="Preview" className="max-w-3xl">
			<Modal.Body>
				<Table
					data={data}
					headers={headers}
					dataTitle={dataTitle}
					dataDescription={dataDescription}
				/>
			</Modal.Body>
		</Modal>
	);
}
