import { HotTable } from "@handsontable/react";
import React from "react"
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

// register Handsontable's modules
registerAllModules();

interface Props {
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    data: any;
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    colHeaders: any;
}
const Table = ({ data, colHeaders }: Props) => {
    return <HotTable
        data={data}
        height="auto"
        width="auto"
        colHeaders={colHeaders}
        licenseKey="non-commercial-and-evaluation"
    />
}

export default React.memo(Table)
