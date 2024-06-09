'use client';
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {SaveEditorProvider} from "@/src/components/SaveEditorContext";

export default function App({Component, pageProps}: AppProps) {
    return (<SaveEditorProvider><Component {...pageProps} /></SaveEditorProvider>);
}
