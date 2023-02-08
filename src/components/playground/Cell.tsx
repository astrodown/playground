import { useId } from "react";
import { codeStore, initCell } from "../../stores/pyodide";
import { useStore } from "@nanostores/react";
import Editor from "./Editor";
import type { ExportData } from "src/schema";

interface Props {
	exportData: ExportData
}

export default function Cell({ exportData }: Props) {
	const id = useId();
	let initialCode = ""
	if ((exportData instanceof Object)) {
		initialCode = exportData.name
	}
	initCell(id, initialCode);

	const allCells = useStore(codeStore);
	const { output } = allCells[id] || { output: "", code: "" };

	return (
		<div className="cell my-8">
			<div className="editor">
				<Editor id={id} />
			</div>

			<div className="output font-mono">
				{output && <div className="output" id={`output-${id}`}>{output}</div>}
			</div>
		</div >
	);
}
