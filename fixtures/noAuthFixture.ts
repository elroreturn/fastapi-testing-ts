import { test as base } from '@playwright/test'
import { PageManager } from '../pages/PageManager'

export const test = base.extend<{ pm: PageManager }>({
  
  // Override the default context to not use storage state
  context: async ({ browser }, use) => {
    // Create a fresh context without storage state
    const context = await browser.newContext({
      storageState: undefined  // Explicitly disable storage state
    })
    await use(context)
    await context.close()
  },

  // Use the clean context for page manager
  pm: async ({ page }, use) => {
    const pm = new PageManager(page)
    await use(pm)
  },
})

export { expect } from '@playwright/test' 