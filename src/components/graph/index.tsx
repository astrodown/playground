import type { GraphinData } from "@antv/graphin";
import { graphLayoutOptions } from "@lib/utils";
import { useState } from "react";
import Network from "./Network";
import SelectMenu from "./SelectMenu";



interface Props {
    data: GraphinData
}




export default ({ data }: Props) => {
    const [layout, setLayout] = useState(graphLayoutOptions[0])

    return (
        <>
            <Network data={data} layout={layout} />
            <SelectMenu layout={layout} setLayout={setLayout} />
        </>
    );
};