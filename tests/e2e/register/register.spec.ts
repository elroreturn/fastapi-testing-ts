import { test } from '../../../fixtures/noAuthFixture'
import { User } from '../../../models/user.model';

test.describe('User', { tag: ['@Register'] }, () => {

  let user: User = User.createTestUser();

  test.beforeEach(async ({ pm }) => {
    await pm.navigate.goToRegisterPage()
  })

  test.afterEach(async ({ pm, page }) => {
    await pm.loginSuccessfully(user.email, user.password)
  })

  test('should register successfully', async ({ pm, page }) => {
    await pm.registerPage.signUp(user)
    await pm.loginPage.loaded() // Due frontend is missing success messages
  })
})
