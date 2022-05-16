export function retrieveData(link: string): Promise<any> {
    const baseLinkCleaned = link.replace(/\/$/, "");
    const docusaurusSearchJsonUrl = `${baseLinkCleaned}/search-index-docs-default-current.json`;
    return fetch(docusaurusSearchJsonUrl)
        .then(resp => resp.json())
        .catch(error => {
            console.error(error);
        });
}
