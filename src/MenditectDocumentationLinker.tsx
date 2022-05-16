import classNames from "classnames";
import { Icon } from "./components/Icon";

import { MenditectDocumentationLinkerContainerProps } from "../typings/MenditectDocumentationLinkerProps";

import "./ui/MenditectDocumentationLinker.css";
import { createElement } from "react";
import { openWindow } from "./openWindow";
import { findCorrectLink } from "./findCorrectLink";
import { retrieveData } from "./retrieveData";

export default function MenditectDocumentationLinker(props: MenditectDocumentationLinkerContainerProps): JSX.Element {
    function LinkContent(): JSX.Element {
        switch (props.layout) {
            case "text":
                return <span>{props.text?.value?.toString()}</span>;
            case "icon":
                return <Icon />;
            case "iconwithtext":
                return (
                    <span>
                        <span>{props.text?.value?.toString()}</span>
                        <Icon />
                    </span>
                );
            case "link":
                return <span>{props.text?.value?.toString()}</span>;
            default:
                return <span>could not find value in selection</span>;
        }
    }

    async function onClick(event: any): Promise<void> {
        event.preventDefault();
        // check if the user defined a base link
        if (props.link.value === undefined) {
            throw new Error("No baselink provided");
        }
        const data = await retrieveData(props.link.value);
        findCorrectLink(props, data);
    }

    return (
        <a
            className={classNames(
                `md-doc-link`,
                `md-doc-link--${props.layout}`,
                `md-doc-groupby--${props.groupbox}`,
                props.class
            )}
            href={props.link.value?.toString()}
            target="_blank"
            rel="noreferrer"
            title="link to documentation"
            onClick={onClick}
        >
            <LinkContent />
        </a>
    );
}
