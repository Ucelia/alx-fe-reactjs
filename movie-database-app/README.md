# Movie Database App 🎥

A web application built with Vite, React, and Tailwind CSS that allows users to search for movies, view details, and explore trending titles using the OMDB API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 🔍 **Search for Movies**: Quickly find movies by their titles.
- 📜 **Movie Details**: View detailed information about a selected movie, including description, release date, and ratings.
- 🌐 **Responsive Design**: Works seamlessly across all devices.

---

## Technologies Used

- **Frontend**: [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **API**: [OMDB API](https://www.omdbapi.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-database-app.git
   cd movie-database-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```


---

## Usage

1. Open the application in your browser.
2. Use the search bar to find movies by title.
3. Click on a movie to view its details.

---

## Environment Variables

To connect the app to the OMDB API, you need to set up a `.env` file in the root directory with the following content:

```plaintext
VITE_API_KEY=your_omdb_api_key
```

**Note**: Ensure `.env` is added to `.gitignore` to prevent sensitive information from being pushed to the repository.

---

## Deployment

### Deploying to Vercel

1. Push your project to GitHub.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Set up the following environment variable in the Vercel dashboard:
   - `VITE_API_KEY=your_omdb_api_key`
4. Build and deploy your project.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [OMDB API](https://www.omdbapi.com/) for the movie data.
- [Vite](https://vitejs.dev/) for the fast and modern build tool.
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.

---

