import { getCollection, CollectionEntry } from "astro:content";
import type { IUserNode, IUserEdge } from "@antv/graphin";

const getMetadata = (
	entry: CollectionEntry<"data"> | CollectionEntry<"analysis">,
) => {
	return {
		id: entry.data.id || entry.id,
		label: entry.data.label || entry.data.title,
		type: entry.collection === "analysis" ? "analysis" : "data",
	};
};

const getNode = (
	entry: CollectionEntry<"analysis"> | CollectionEntry<"data">,
): IUserNode => {
	const { id, label, type } = getMetadata(entry);
	const color = type === "analysis" ? "#FF6A00" : "#46a7a6";
	return {
		id,
		data: {
			type,
			slug: entry.slug,
			title: entry.data.title,
			description: entry.data.description,
		},
		style: {
			label: {
				value: label,
				fontSize: 18,
			},
			keyshape: {
				size: 60,
				stroke: color,
				fill: color,
				fillOpacity: 0.2,
			},
		},
	};
};

const getEdges = (
	entry: CollectionEntry<"analysis"> | CollectionEntry<"data">,
): IUserEdge[] => {
	const relationships = entry.data.relationships;
	const { id, label, type } = getMetadata(entry);
	const color = type === "analysis" ? "#FF6A00" : "#46a7a6";
	if (typeof relationships === "string") {
		return [
			{
				source: id,
				target: relationships,
				style: { label: { value: "" }, keyshape: { stroke: color } },
			},
		];
	}
	return relationships.map((r) => {
		const targetId = typeof r === "string" ? r : r.id;
		const edgeLabel = typeof r === "string" ? "" : r.label;
		return {
			source: id,
			target: targetId,
			style: {
				label: {
					value: edgeLabel,
					fill: "green",
					fontSize: 14,
				},
				keyshape: {
					lineWidth: 4,
					stroke: color,
				},
			},
		};
	});
};

export const getGraphData = async () => {
	const nodes: IUserNode[] = [];
	const edges: IUserEdge[] = [];
	const allNodes = (
		await Promise.all([getCollection("data"), getCollection("analysis")])
	).flat();
	allNodes.forEach((entry) => {
		const node = getNode(entry);
		const nodeEdges = getEdges(entry);
		nodes.push(node);
		edges.push(...nodeEdges);
	});

	return { nodes, edges };
};
