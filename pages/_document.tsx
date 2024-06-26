'use client';
import {Head, Html, Main, NextScript} from "next/document";
import {ThemeModeScript} from "flowbite-react";

export default function Document() {
    return (
        <Html lang="en">
            <Head title={"Antimatter Dimensions Save Editor"}>
                <title>Antimatter Dimensions Save Editor</title>
                <ThemeModeScript/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
