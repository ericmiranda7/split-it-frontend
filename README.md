# Split That

Available at https://split-it-frontend.vercel.app/  
Backend Code at https://github.com/ericmiranda7/split-it-backend

## Business Requirements
### User Stories
User Story: As a User, I want to have the option to install Split That as an application
1. Add a PWA manifest
2. Add icons to support all devices (looking at you, iOS)
3. Learn about service worker requests

User Story: As a User, I want to be able to login to the app
1. Add following auths
   - [x] Google
   - [ ] Email
   - [ ] Mobile
2. Display username
3. Disable login option if already logged in

User Story: As a User, I want to be able to view a list of my expenses / owed amounts
1. Display net amount owed / owe to
2. Display list of expenses to each user

User Story: As a User, I want to be able to add an expense for an individual person
1. Create an expense add popup
2. Allow for selecting individuals
3. Allow for adding an expense amount

User Story: As a User, I want to be able to create groups with specified individuals
1. Enable group view
2. At the top of group view, provide option to create group
3. Display list of groups with net owed / owe to amounts

### Engineering Stories

## Development
### Environment setup
Setup the environment by creating a `.env` file in the root of the repo with the following contents:
```dotenv
PUBLIC_BACKEND_HOSTNAME= # eg. "http://localhost:8080"
PUBLIC_OAUTH_REDIRECT_URL= # eg. "http://${your_backend_url}/api/auth"
PUBLIC_GOOGLE_CLIENT_ID="643429409908-hsahqtog313f521vriipqj6o8fgl0fva.apps.googleusercontent.com"
```
Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a
development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Production
Simply push a commit to `prod` branch and vercel will automatically deploy a new build.
