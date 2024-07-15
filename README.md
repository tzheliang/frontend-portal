# Frontend Portal

## TODO

- [] Auth/Login
- [] Error/401
- [] Users/List
<!-- - [] -->

## Project setup

1. Create Next.js app using `npx create-next-app@latest`
2. Add dependencies for Redux `npm install @reduxjs/toolkit react-redux`
3. Add dependencies for auth `npm install lucia arctic @lucia-auth/adapter-sqlite better-sqlite3`
3. Add dependencies for better-sqlite3 types `npm install -D @types/better-sqlite3`

## Setup steps for Google Auth

1. https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
2. Created a new project on Google Cloud Console. (frontend-portal-dev)
3. Configure consent screen for OAuth.
4. Create a new credential, using OAuth Client ID type
