import { Component, ReactNode } from "react";
import { MenditectDocumentationLinkerPreviewProps } from "../typings/MenditectDocumentationLinkerProps";

declare function require(name: string): string;

export class preview extends Component<MenditectDocumentationLinkerPreviewProps> {
    render(): ReactNode {
        return "test";
    }
}

export function getPreviewCss(): string {
    return require("./ui/MenditectDocumentationLinker.css");
}
