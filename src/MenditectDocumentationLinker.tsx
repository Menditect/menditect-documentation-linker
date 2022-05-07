import classNames from "classnames";
import { Icon } from "./components/Icon";

import { MenditectDocumentationLinkerContainerProps } from "../typings/MenditectDocumentationLinkerProps";

import "./ui/MenditectDocumentationLinker.css";
import { createElement } from "react";

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

    function openWindow(link: string | undefined): void {
        window.open(link, "_blank");
    }

    function findCorrectLink(event: any): void {
        event.preventDefault();

        // check if the user defined a base link
        if (props.link.value === undefined) {
            throw new Error("No baselink provided");
        }

        // if no tag is defined, send them to the default value of link
        if (props.tag === undefined) {
            openWindow(props.link.value);
            return;
        }

        const baseLinkCleaned = props.link.value.replace(/\/$/, "");
        const tag = props.tag?.value;

        const docusaurusSearchJsonUrl = `${baseLinkCleaned}/search-index-docs-default-current.json`;
        fetch(docusaurusSearchJsonUrl)
            .then(resp => resp.json())
            .then(data => {
                const document = data.documents.find((document: { sectionRoute: string }) => {
                    const link = document.sectionRoute;
                    const lastPart = link.substring(link.lastIndexOf("/") + 1, link.length);
                    return lastPart === tag;
                });

                // cannot find the tag in documents, so it does not exist on the documentation pages
                if (!document) {
                    throw new Error("Cannot find tag");
                } else {
                    if (props.link.value) {
                        const url: string = props.link.value.toString();
                        const defaultLink = new URL(url);
                        openWindow(`https://${defaultLink.hostname}${document.sectionRoute}`);
                    }
                }
            })
            .catch(error => {
                console.error(error);
            });
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
            onClick={findCorrectLink}
        >
            <LinkContent />
        </a>
    );
}
