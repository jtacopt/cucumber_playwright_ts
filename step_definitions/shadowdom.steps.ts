import {Given} from "@cucumber/cucumber";
import {ShadowDom} from "../pages/ShadowDom";
import {page} from "./hook";

Given('The use in Shadom DOM Page', async () => {
    const cookieBanner = new ShadowDom(page);
    cookieBanner.openPage();
});

Given('Generate UID', async () => {
    const cookieBanner = new ShadowDom(page);
    await cookieBanner.generateUID();
    console.log("GUID Generator: " + await cookieBanner.readUID());
});