import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github"
import { python } from "@codemirror/lang-python";
import { useStore } from "@nanostores/react";
import {
	codeStore,
	pyodideStore,
	setCode,
	setExecutingId,
	setLoading,
	setOutput,
} from "../../stores/pyodide";
import { runPython } from "../../lib/python";
import Spinner from "@components/shared/Spinner";

interface KeysPressed {
	[index: string]: boolean | undefined;
}

export default function Editor({ id }: { id: string }) {
	const { pyodide } = useStore(pyodideStore);
	const allCells = useStore(codeStore);
	const { code, loading } = allCells[id] || { output: "", code: "" };
	let keysPressed: KeysPressed = {};

	const handleKeyDown = async (event: React.KeyboardEvent<HTMLDivElement>) => {
		keysPressed[event.key] = true;

		if (keysPressed["Enter"] && keysPressed["Shift"]) {
			if (pyodide) {
				setExecutingId(id)
				setLoading(id, true)
				setOutput(id, await runPython(pyodide, code));
			}
		}
	};



	const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
		keysPressed[event.key] = undefined;
	};


	return (
		<div className="relative">
			<CodeMirror
				value={code}
				theme={githubLight}
				extensions={[python()]}
				onChange={(val) => setCode(id, val)}
				onKeyDown={(e) => handleKeyDown(e)}
				onKeyUp={(e) => handleKeyUp(e)}
			/>
			<div className="absolute bottom-1/3 left-[-50px]">
				{loading && <Spinner />}
			</div>
		</div>
	);
}
