import React from "react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { findCorrectLink } from "../src/findCorrectLink";
import { DynamicValue } from "mendix";
import { retrieveData } from "../src/retrieveData";
import "cross-fetch/polyfill";
vi.stubGlobal("window", null);

async function getLink(baseLink: string, tag: string) {
    const data = await retrieveData(baseLink);
    expect(data).toHaveProperty("documents");

    // find link
    const link = await findCorrectLink(
        {
            // @ts-ignore
            link: { value: baseLink },
            // @ts-ignore
            tag: { value: tag }
        },
        data
    );
    return link;
}

async function validTest(tag: string, baseLink: string = "https://documentation.menditect.com/"): Promise<void> {
    // retrieve data
    const link = await getLink(baseLink, tag);

    const includesBaselink = link.includes(baseLink);
    const includesTag = link.includes(tag);

    // test properties
    expect(includesBaselink).toBeTruthy();
    expect(includesTag).toBeTruthy();
}

async function invalidTagTest(tag: string, baseLink: string = "https://documentation.menditect.com/"): Promise<void> {
    await expect(getLink(baseLink, tag)).rejects.toThrowError();
}

describe("Find correct link from documentation", () => {
    test("valid tests", async () => {
        await validTest("application-branch");
    });
    test("invalid tests", async () => {
        await invalidTagTest("non-existing-tag");
    });
});
