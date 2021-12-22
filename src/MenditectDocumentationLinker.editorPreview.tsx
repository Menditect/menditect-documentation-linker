import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { MenditectDocumentationLinkerPreviewProps } from "../typings/MenditectDocumentationLinkerProps";

declare function require(name: string): string;

export class preview extends Component<MenditectDocumentationLinkerPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={"test"} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/MenditectDocumentationLinker.css");
}
