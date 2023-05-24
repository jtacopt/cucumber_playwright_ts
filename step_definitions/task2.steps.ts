import {DataTable, Given, Then, When} from '@cucumber/cucumber';
import {page} from './hook'

Given('The user populate the Location as bellow', async (dataTable: DataTable) => {

    const location = dataTable.hashes()[0];
    const state = location.State;
    const selectElement = page.locator('[data-test-id=modal-popup__location] select').selectOption(state);
    await new Promise(resolve => setTimeout(resolve, 2000));

});

Given('The user set the filter as bellow', (dataTable: DataTable) => {
    const filter = dataTable.hashes()[0];
    const model = filter.model;
    const price = filter.price;
    const kilometers = filter.kilometers;
    // Implemente seu código aqui
});

When('The user sort the displayed result by {string}', (sortOption: String) => {
    // Implemente seu código aqui
});

Then('The results should Match with the applied filter', () => {
    // Implemente seu código aqui
});
