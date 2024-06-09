'use client';

import {Inter} from "next/font/google";
import JsonComponent from "@/src/components/JsonComponent";
import {SaveEditorContext} from "@/src/components/SaveEditorContext";
import React, {useContext} from "react";
import ImportModal, {ToastModal} from "@/src/components/Modal";
import {GameSaveSerializer} from "@/src/util/SaveSerializer";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    const {setModalOpen, modalOpen, save, setShowToast} = useContext(SaveEditorContext);
    return (
        <>
            <main
                className={`flex min-h-screen flex-col min-w-fit items-center pt-12 md:p-24 font-mono bg-gray-900 ${inter.className}`}
            >

                <div className={"basis-full"}>
                    <div className="grid grid-cols-2 md:grid-cols-5 w-full gap-4 pb-10">
                        <Button onClick={() => {
                            setModalOpen(true)
                        }} text={'Import Save'}></Button>
                        <Button onClick={() => doSaveExport({save, setShowToast})} text={'Export Save'}
                                className={'col-start-2 md:col-start-5'}></Button>
                    </div>
                </div>
                <div className={"basis-full"}>
                    <JsonComponent/>
                </div>
                <ImportModal/>
                <ToastModal/>

            </main>

        </>
    );
}

const doSaveExport = ({save, setShowToast}: {
    save: object,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    if (!save) {
        console.error('no save data to export');
        return;
    }
    console.log('exporting save', save);
    const serialized = GameSaveSerializer.serialize(save);
    // copy to clipboard
    navigator.clipboard.writeText(serialized).then(() => {
        console.log('copied to clipboard');
        setShowToast(true);
    }, (err) => {
        console.error('failed to copy to clipboard', err);
    });
}

const Button = function ({onClick, text, className, modalName}: {
    onClick: () => void,
    text: string,
    className?: string,
    modalName?: string
}) {
    return (
        <button
            className={"block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 " +
                "focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 " +
                "text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " + className}
            onClick={onClick}
            type="button"
            {...(modalName ? {'data-modal-toggle': modalName, 'data-modal-target': modalName} : {})}
        >
            {text}
        </button>
    )
}
