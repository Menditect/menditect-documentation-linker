import { MenditectDocumentationLinkerContainerProps } from "../typings/MenditectDocumentationLinkerProps";
import { openWindow } from "./openWindow";

export async function findCorrectLink(props: MenditectDocumentationLinkerContainerProps, data: any): Promise<string> {
    // check if the user defined a base link
    if (props.link.value === undefined) {
        throw new Error("No baselink provided");
    }

    // if no tag is defined, send them to the default value of link
    if (props.tag === undefined) {
        const result = props.link.value;
        openWindow(result);
        return result;
    }

    const baseLinkCleaned = props.link.value.replace(/\/$/, "");
    const tag = props.tag?.value;

    const document = data.documents.find((document: { sectionRoute: string }) => {
        const link = document.sectionRoute;

        // skip links that link to older versions
        if (link.includes("Older versions")) {
            return false;
        }

        const lastPart = link.substring(link.lastIndexOf("/") + 1, link.length);
        return lastPart === tag;
    });

    // cannot find the tag in documents, so it does not exist on the documentation pages
    if (!document) {
        throw new Error("Cannot find tag");
    } else {
        const url: string = props.link.value.toString();
        const defaultLink = new URL(url);
        const result = `https://${defaultLink.hostname}${document.sectionRoute}`;
        openWindow(`https://${defaultLink.hostname}${document.sectionRoute}`);
        return result;
    }
}
