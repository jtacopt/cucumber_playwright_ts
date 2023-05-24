import {Given} from "@cucumber/cucumber";
import {CookieBanner} from "../pages/CookieBanner";
import {page} from "./hook";

Given('The user accept the cookies', async () => {
    const cookieBanner = new CookieBanner(page);
    await cookieBanner.acceptAll();
});