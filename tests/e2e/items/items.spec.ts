import { test } from '../../../fixtures/authFixture';

test('Items loads for logged-in user', async ({ pm }) => {
  await pm.navigate.goToItemsPage();
  await pm.itemsPage.loaded();
});