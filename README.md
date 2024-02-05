# Split That

Available at https://split-it-frontend.vercel.app/

## Developing
### Environment setup
Setup the environment by creating a `.env` file in the root of the repo with the following contents:
```dotenv
PUBLIC_BACKEND_HOSTNAME= # eg. "http://localhost:8080"
PUBLIC_OAUTH_REDIRECT_URL= # eg. "http://${your_backend_url}/api/auth"
PUBLIC_GOOGLE_CLIENT_ID="643429409908-hsahqtog313f521vriipqj6o8fgl0fva.apps.googleusercontent.com"
```
Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
