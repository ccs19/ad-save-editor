'use client';

import React, {createContext, ReactNode, useState} from "react";


interface ISaveEditorContext {
    save: any;
    setSave: React.Dispatch<React.SetStateAction<any>>; // replace 'any' with the actual type
    inputString: any;
    setInputString: React.Dispatch<React.SetStateAction<any>>;
    exportSave: any; // replace 'any' with the actual type
    setExportSave: React.Dispatch<React.SetStateAction<any>>;
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
    showToast: boolean;
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues: ISaveEditorContext = {
    save: null,
    setSave: () => {
    },
    inputString: null,
    setInputString: () => {
    },
    exportSave: null,
    setExportSave: () => {
    },
    modalOpen: false,
    setModalOpen: () => {
    },
    error: '',
    setError: () => {
    },
    showToast: false,
    setShowToast: () => {
    }
}
const SaveEditorContext = createContext<ISaveEditorContext>(defaultValues);

const SaveEditorProvider = ({children}: { children: ReactNode }) => {
    const [save, setSave] = useState(null);
    const [inputString, setInputString] = useState(null);
    const [exportSave, setExportSave] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false);
    return (
        <SaveEditorContext.Provider value={{
            save,
            setSave,
            inputString,
            setInputString,
            exportSave,
            setExportSave,
            modalOpen,
            setModalOpen,
            error,
            setError,
            showToast,
            setShowToast
        }}>
            {children}
        </SaveEditorContext.Provider>
    )
}

export {SaveEditorContext, SaveEditorProvider}
