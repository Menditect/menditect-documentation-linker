/**
 * This file was generated from MenditectDocumentationLinker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";

export type LayoutEnum = "text" | "icon" | "iconwithtext" | "link";

export interface MenditectDocumentationLinkerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    link: string;
    layout: LayoutEnum;
    text: string;
}

export interface MenditectDocumentationLinkerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    link: string;
    layout: LayoutEnum;
    text: string;
}
