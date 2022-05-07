/**
 * This file was generated from MenditectDocumentationLinker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type LayoutEnum = "text" | "icon" | "iconwithtext" | "link";

export type GroupboxEnum = "normal" | "header";

export interface MenditectDocumentationLinkerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    link: DynamicValue<string>;
    tag?: DynamicValue<string>;
    layout: LayoutEnum;
    groupbox: GroupboxEnum;
    text?: DynamicValue<string>;
}

export interface MenditectDocumentationLinkerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    link: string;
    tag: string;
    layout: LayoutEnum;
    groupbox: GroupboxEnum;
    text: string;
}
