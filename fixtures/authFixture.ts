import { test as base, Page } from '@playwright/test'
import { PageManager } from '../pages/PageManager'
import { GlobalUsers } from '../pages/utils/GlobalUsers'
import fs from 'fs'
import path from 'path'

const defaultAuthFile = path.join(__dirname, '..', 'authentications/.auth.json')

// Create empty auth state if it doesn't exist
const initializeAuthState = () => {

  if (!fs.existsSync(defaultAuthFile)) {
    fs.mkdirSync('authentications', {recursive: true})

    fs.writeFileSync(defaultAuthFile, JSON.stringify({
      cookies: [],
      origins: []
    }))
  }
}

export const test = base.extend<{ pm: PageManager; loggedInPage: Page }>({
  loggedInPage: async ({ browser }, use) => {
    // Initialize auth state file
    initializeAuthState()

    const context = await browser.newContext({ 
      storageState: defaultAuthFile 
    })
    const page = await context.newPage()

    // Check if we need to log in
    try {
      const storageState = await context.storageState()
      if (!storageState.origins.length) {
        const pm = new PageManager(page)
        await pm.loginSuccessfully(GlobalUsers.getMainUser(), GlobalUsers.getMainUserPassword())
        
        // Save authentication state
        await context.storageState({ path: defaultAuthFile })
      }
    } catch (error) {
      console.error('Error handling auth state:', error)
    }

    await use(page)
  },

  pm: async ({ loggedInPage }, use) => {
    const pm = new PageManager(loggedInPage)
    await use(pm)
  },
})

export { expect } from '@playwright/test'
