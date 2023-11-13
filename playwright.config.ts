import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: 'firefox',
            use: {
                headless: false
            }
        }
    ]
}
export default config;