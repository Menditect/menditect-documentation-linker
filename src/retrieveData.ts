import { MenditectDocumentationLinkerContainerProps } from "../typings/MenditectDocumentationLinkerProps";

export function retrieveData(link: string) {
    const baseLinkCleaned = link.replace(/\/$/, "");
    const docusaurusSearchJsonUrl = `${baseLinkCleaned}/search-index-docs-default-current.json`;
    return fetch(docusaurusSearchJsonUrl)
        .then(resp => resp.json())
        .catch(error => {
            console.error(error);
        });
}
