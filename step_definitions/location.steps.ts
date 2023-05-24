import {DataTable, Given} from "@cucumber/cucumber";
import {page} from "./hook";
import {LocationPopup} from "../pages/LocationPopup";

Given('The user populate the Location as bellow', async (dataTable: DataTable) => {

    const location = dataTable.hashes()[0];
    const state = location.State;
    const locationPopup = new LocationPopup(page);
    await locationPopup.selectState(state);
    await locationPopup.clickContinue();

});