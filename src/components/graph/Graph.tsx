import React, { Fragment, useState } from 'react';
import Graphin, { Components, Behaviors, GraphinData, Layout, TooltipValue, LegendChildrenProps } from '@antv/graphin';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { classNames } from '@lib/utils';
const { Hoverable, ActivateRelations, LassoSelect } = Behaviors;



interface Props {
    data: GraphinData
}

const { Tooltip, Legend } = Components

const Color = {
    analysis: {
        primaryColor: '#FF6A00',
    },
    data: {
        primaryColor: '#46a7a6',
    },
};

const layoutOptions: Layout[] = [
    "graphin-force",
    "grid",
    "circular",
    "concentric",
    "dagre",
    "radia",
    "mds",
    "force",
    "gForce",
    "random"
].map(s => ({ type: s }))

const SelectMenu = ({ layout, setLayout }: { layout: Layout, setLayout: React.Dispatch<React.SetStateAction<Layout>> }) => {

    return <Listbox value={layout} onChange={setLayout}>
        {({ open }) => (
            <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">Graph Layout</Listbox.Label>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                        <span className="block truncate">{layout.type}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {layoutOptions.map((option) => (
                                <Listbox.Option
                                    key={option.type}
                                    className={({ active }) =>
                                        classNames(
                                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                    }
                                    value={option}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                {option.type}
                                            </span>

                                            {selected ? (
                                                <span
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-indigo-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </>
        )}
    </Listbox>
}


export default ({ data }: Props) => {
    const [layout, setLayout] = useState(layoutOptions[0])

    return (
        <div>
            <Graphin data={data} layout={layout} >
                <Hoverable bindType="node" />
                <ActivateRelations />
                <LassoSelect />
                <Tooltip bindType="node" placement="top-right" hasArrow={true} style={{ width: "400px", boxShadow: "none", border: "1px solid rgb(30 41 59)", borderRadius: "1rem" }}>
                    {(value: TooltipValue) => {
                        if (value.model) {
                            const { model } = value;

                            return (
                                <div className="px-6 py-4">
                                    <div className='flex items-center justify-between'>
                                        <div className="font-bold text-xl">{model.data.title}</div>
                                        <div className="text-neutral-400 texl-xl text-base">{model.data.type}</div>
                                    </div>
                                    {model.data.description && <p className="text-gray-700 text-base">
                                        {model.data.description}
                                    </p>}
                                    <div className="flex justify-end">
                                        <a className="text-blue-500 " href={`/${model.data.type}/${model.data.slug}`}>Link</a>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    }}
                </Tooltip>
                <Legend bindType="node" sortKey="data.type">
                    {(renderProps: LegendChildrenProps) => {
                        return <Legend.Node {...renderProps} />;
                    }}
                </Legend>
            </Graphin>
            <SelectMenu layout={layout} setLayout={setLayout} />
        </div>
    );
};