# Frontend Portal

## Instructions

1. Install the app dependencies with `npm install`.
2. Copy .env.example to .env
3. Replace the values of `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to a valid Google OAuth credential.
4. (Optional) If the app needs to be accessed via domain name, replace the `http://localhost:3000` with the correct domain name. The configured URI must match the configured setting in the Google credential console.

## Project setup

1. Create Next.js app using `npx create-next-app@latest`
2. Add dependencies for auth `npm install lucia arctic @lucia-auth/adapter-sqlite better-sqlite3`
3. Add dependencies for better-sqlite3 types `npm install -D @types/better-sqlite3`

## Setup steps for Google Auth

1. https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
2. Created a new project on Google Cloud Console. (frontend-portal-dev)
3. Configure consent screen for OAuth.
4. Create a new credential, using OAuth Client ID type.
5. Set the authorized JavaScript origins to `http://localhost` and `http://localhost:3000` respectively.
6. Set the authorized redirect URI to `http://localhost:3000/login/google/callback`.
7. Copied client id and client secret to app `.env` file.
