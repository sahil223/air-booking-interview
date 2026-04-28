# Air Booking Interview Project

## Live Demo
- Production URL: https://components-eight-jet.vercel.app

## Source Code
- GitHub Repository: https://github.com/sahil223/air-booking-interview

## Tech Stack
- Frontend: React (Create React App)
- Backend: Express (single `server.js`)
- Database: MongoDB (currently local connection string)

## Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start frontend:
   ```bash
   npm start
   ```
3. Start backend (new terminal):
   ```bash
   node server.js
   ```

Frontend runs on `http://localhost:3000` and backend API runs on `http://localhost:9000`.

## Deployment
Manual production deploy command used:

```bash
vercel --prod --yes --build-env CI=false
```

## Note
`localhost` URLs are only for local development. For external review/interview, use the deployed Vercel URL above.
