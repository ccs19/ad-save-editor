'use client';

import dynamic from "next/dynamic";
import {SaveEditorContext} from "@/src/components/SaveEditorContext";
import React, {useContext} from "react";

const DynamicReactJson = dynamic(import('react-json-view'), {ssr: false});
export default function JsonComponent() {
    const {save, setSave} = useContext(SaveEditorContext);
    const onEdit = (edit: { updated_src: any; }) => {
        setSave(edit.updated_src)
    }
    if (!save) {
        return <div className={"basis-full"}>Import Save Above</div>
    }
    return (
        <div className={"basis-full"}>
            <DynamicReactJson src={save}
                              theme={"monokai"}
                              indentWidth={2}
                              collapsed={1}
                              name={null}
                              sortKeys={true}
                              onEdit={onEdit}/>
        </div>
    )
}
