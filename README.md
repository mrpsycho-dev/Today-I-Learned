# Today I Learned
A responsive, full-stack web application for sharing and discovering interesting facts across a variety of topics. Built with React and Supabase, the application provides persistent cloud storage, category-based discovery, and community-driven voting.

🔗 **Live Demo:** https://today-we-learned.netlify.app/

## Features

* **Submit Facts** — Share facts of up to 200 characters with automatic source URL validation.
* **Category Filtering** — Instantly filter facts across 8 categories:

  * Technology
  * Science
  * Finance
  * Society
  * Entertainment
  * Health
  * History
  * News
* **Community Voting** — React to facts with:

  * 👍 Interesting
  * 🤯 Mindblowing
  * ⛔ False
* **Dispute Detection** — Automatically marks facts as **[⛔ DISPUTED]** when false votes exceed positive votes.
* **Responsive Design** — Optimized for a smooth experience across desktop, tablet, and mobile devices.
* **Persistent Data** — Facts and community votes are stored in a PostgreSQL database through Supabase.

## Tech Stack

| Category          | Technology                                |
| ----------------- | ----------------------------------------- |
| **Frontend**      | React, React Hooks, Functional Components |
| **Styling**       | CSS                                       |
| **Backend / API** | Supabase                                  |
| **Database**      | PostgreSQL                                |
| **Deployment**    | Netlify                                   |

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/mrpsycho-dev/today-i-learned.git
cd today-i-learned
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Supabase

Create a Supabase project and add your project credentials to the application's Supabase configuration.

For example:

```javascript
const supabaseUrl = "https://your-project.supabase.co";
const supabaseKey = "your-anon-key";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
```

> **Security:** Never expose your Supabase service-role key or other private credentials in the frontend. Only use the public/anon key intended for client-side applications.

### 4. Start the development server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Project Structure

```text
today-i-learned/
├── public/
├── src/
│   ├── components/
│   ├── supabase.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Deployment

The application is deployed on **Netlify**. Every update pushed to the configured GitHub repository can be automatically built and deployed through Netlify's CI/CD pipeline.

## License

This project is open source and available for learning, experimentation, and further development.
