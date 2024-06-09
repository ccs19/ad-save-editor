'use client';
import {SaveEditorContext} from "@/src/components/SaveEditorContext";
import React, {useContext, useEffect} from "react";
import {GameSaveSerializer} from "@/src/util/SaveSerializer";

import {Button, CustomFlowbiteTheme, Modal} from "flowbite-react";


export default function ImportModal() {
    const {modalOpen, setModalOpen, setInputString, inputString, setSave, setError} =
        useContext(SaveEditorContext);
    useEffect(() => {
        if (modalOpen) {
            setInputString('');
            setError('');
        }
    }, [modalOpen, setInputString, setError]);

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!inputString || inputString.length === 0) {
            return;
        }
        try {
            // trim the input string to remove leading/trailing whitespace
            const save = GameSaveSerializer.deserialize(inputString.trim());
            if (save) {
                setSave(save);
                setModalOpen(false);
            }
        } catch (e) {
            console.error(e);
            setError('Invalid save string');
            setModalOpen(false);
        }
    }
    return (
        <Modal show={modalOpen} onClose={() => setModalOpen(false)} dismissible size="2xl"
               className={"bg-gray-950 text-white font-mono"} theme={modalTheme()}
        >
            <Modal.Header
                className={"flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600"}><span
                className={"text-white"}>Import
                Save</span></Modal.Header>
            <Modal.Body className={"items-center p-4"}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                        <label className="block mb-2 text-sm font-medium">Save</label>
                        <textarea id="saveInput" className="p-4 block w-full text-sm bg-gray-700
                            rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                            min-h-32
                            " placeholder="Paste save here..."
                                  onChange={(e) => {
                                      setInputString(e.target.value);
                                      setError('');
                                  }}>
                            </textarea>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className={"bg-gray-700 px-2"} onClick={handleSubmit}>Import</Button>
                <Button className={"bg-gray-700 px-2"} onClick={() => setModalOpen(false)}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>);
}

const ToastModal = function () {
    const {showToast, setShowToast} = useContext(SaveEditorContext);
    return (<Modal show={showToast} onClose={() => setShowToast(false)} dismissible size="2xl"
                   className={"bg-gray-950 text-white font-mono"} theme={modalTheme()}
    >
        <Modal.Header
            className={"flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600"}><span
            className={"text-white"}>Export Success
                </span></Modal.Header>
        <Modal.Body className={"items-center p-4"}>
            <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-1">
                    <label className="p-1 pt-2 block mb-2 text-sm">Save Exported to Clipboard</label>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button className={"bg-gray-700 px-2 py-1"} onClick={() => setShowToast(false)}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>);
}

function modalTheme() {
    const customTheme: CustomFlowbiteTheme["modal"] = {
        root: {
            sizes: {
                "sm": "max-w-sm",
                "md": "max-w-md",
                "lg": "max-w-lg",
                "xl": "max-w-xl",
                "2xl": "max-w-2xl",
                "3xl": "max-w-3xl",
                "4xl": "max-w-4xl",
                "5xl": "max-w-5xl",
                "6xl": "max-w-6xl",
                "7xl": "max-w-7xl"
            }
        },
        header: {
            base: "border-gray-600 flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600 text-white bg-gray-900",
        },
        body: {
            base: "items-center p-4 bg-gray-900",
        },
        footer: {
            base: "flex items-center space-x-2 rounded-b p-6 border-gray-600 border-t text-white bg-gray-900",
        }
    };
    return customTheme;
}

export {ToastModal};
