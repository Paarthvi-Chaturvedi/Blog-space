# BlogSpace 📝

A simple blog posting app built with vanilla JavaScript, HTML, and CSS. BlogSpace lets you write and publish blog posts that are fetched from — and submitted to — a live API, so you can see real create/read functionality in action.

## Features

- **Live post feed** — On page load, the app fetches existing posts from the JSONPlaceholder API and displays the first 5 on the page.
- **Create a new post** — Fill in a title and body, hit **Post**, and your entry is sent to the API and instantly added to the top of the feed.
- **Real API interaction** — Unlike apps that only use local/mock data, BlogSpace performs actual `GET` and `POST` requests, giving a realistic feel for working with REST APIs.
- **Auto-clearing form** — After a successful post, the form resets automatically so you're ready to write the next one.

## How to Use It

1. Open `index.html` in your browser (or run the project locally, see below).
2. The page loads with 5 existing blog posts already displayed.
3. To add your own post:
   - Type a title into the **Title** field.
   - Write your content into the **Body** field.
   - Click **Post**.
4. Your new post appears instantly at the top of the page, above the existing posts.

> Note: The API used (JSONPlaceholder via Scrimba) is a fake/mock REST API for testing — it simulates a real save but doesn't persist data permanently, so a page refresh will reset the feed back to the original 5 posts.

## Running Locally

\`\`\`bash
npm install
npm start
\`\`\`

Then open the local server URL shown in your terminal. This project uses [Vite](https://vitejs.dev/) for local development — check their docs if you want to customize the build setup.

<img width="1157" height="837" alt="blog" src="https://github.com/user-attachments/assets/7b14d8b0-e972-44f3-a3b8-01b753bd8c94" />


Happy blogging! ✍️
