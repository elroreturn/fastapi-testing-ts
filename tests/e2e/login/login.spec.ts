import { test } from '../../../fixtures/noAuthFixture'
import { GlobalUsers } from '../../../pages/utils/GlobalUsers'

test.describe('Login', { tag: ['@Login'] }, () => {

  test('should login successfully', async ({ pm }) => {
    await pm.loginSuccessfully(GlobalUsers.getMainUser(), GlobalUsers.getMainUserPassword())
    await pm.dashboardPage.verifyWelcomeMessage()
  })

})
