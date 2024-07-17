# Frontend Portal

## Assumptions/Justifications

1. ~~Redux was not integrated. User list data is rendered server-side and is not sent to the client.~~ Implemented Redux Toolkit to manage user list data.
2. Google OAuth access token is not kept after authenticating and retrieving the user profile.
3. No unit tests. With reference to [latest docs](https://nextjs.org/docs/app/building-your-application/testing/jest), Jest does not support async components.
4. No E2E tests. I have encountered difficulties with setting up playwright to perform automated Login testing on the Google page. Tested using [this guide](https://adequatica.medium.com/google-authentication-with-playwright-8233b207b71a) however authentication could not complete.

## Instructions

1. Install the app dependencies with `npm install`.
2. Copy .env.example to .env
3. Replace the values of `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to a valid Google OAuth credential.
4. (Optional) If the app needs to be accessed via domain name, replace the `http://localhost:3000` with the correct domain name. The configured URI must match the configured setting in the Google credential console.
5. Build the project with `npm run build`.
6. Start the project with `npm run start`.

## Project setup

1. Create Next.js app using `npx create-next-app@latest`
2. Add dependencies for auth `npm install lucia arctic @lucia-auth/adapter-sqlite better-sqlite3`
3. Add dependencies for better-sqlite3 types `npm install -D @types/better-sqlite3`
4. Add dependencies for Redux Toolkit `npm install @reduxjs/toolkit react-redux`

## Setup steps for Google Auth

1. https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
2. Created a new project on Google Cloud Console. (frontend-portal-dev)
3. Configure consent screen for OAuth.
4. Create a new credential, using OAuth Client ID type.
5. Set the authorized JavaScript origins to `http://localhost` and `http://localhost:3000` respectively.
6. Set the authorized redirect URI to `http://localhost:3000/login/google/callback`.
7. Copy the Google client id and client secret to app `.env` file.
