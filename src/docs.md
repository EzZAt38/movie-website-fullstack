# Movie Website

## Overview

This project is a modern React application that displays a list of popular movies using [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api). It features infinite scrolling, responsive design with Tailwind CSS, a modal dialog for viewing movie details, and a search page powered by the OMDb API.

---

## Features

- **Popular Movies List:** Fetches and displays popular movies from TMDb.
- **Infinite Scroll:** Loads more movies as you scroll down, providing a seamless browsing experience.
- **Responsive UI:** Styled with Tailwind CSS for mobile and desktop.
- **Movie Details Modal:** View more information about a movie in a modal dialog.
- **Component-Based Architecture:** Reusable components for cards, buttons, images, and modals.
- **Movie Search:** Search for any movie using the OMDb API and view its details.
- **TypeScript Support:** All components and interfaces are strongly typed for reliability.
- **Custom Styling:** Easily customizable header, card, and modal styles.

---

## Project Structure

```
movie website/
├── src/
│   ├── components/
│   │   ├── ProductCard.tsx      # Movie card component
│   │   └── Image.tsx            # Image wrapper component
│   ├── data/
│   │   └── index.ts             # (Optional) Local data
│   ├── interfaces/
│   │   └── interface.ts         # TypeScript interfaces and styles
│   ├── pages/
│   │   ├── Home.tsx             # Main page with infinite scroll
│   │   └── Search.tsx           # Search page for movies
│   ├── ui/
│   │   ├── ButtonComponent.tsx  # Reusable button
│   │   ├── DailogModle.tsx      # Modal dialog component
│   │   └── InputField.tsx       # Input field component (if used)
│   ├── index.css                # Tailwind and custom styles
│   └── main.tsx / App.tsx       # App entry point and routing
```

---

## Key Components

### 1. `Home.tsx`
- Fetches movies from TMDb API.
- Implements infinite scroll using a scroll event listener.
- Renders a list of `ProductCard` components.
- Displays a header with a background image and overlay.

### 2. `ProductCard.tsx`
- Displays movie poster, title, and a button for more details.
- "About Movie" button opens a modal with the movie's overview and adult warning.
- Uses the `Image` component for poster rendering.

### 3. `MyModal` (Dialog)
- Reusable modal dialog for displaying movie information.
- Used in `ProductCard` to show details about the selected movie.

### 4. `ButtonComponent`
- Reusable button with customizable color, style, and children.
- Used throughout the app for actions like opening modals and searching.

### 5. `Search.tsx`
- Allows users to search for any movie using the OMDb API.
- Displays search results in a `ProductCard`.
- Includes an input field and search button.

---

## Styling

- Uses **Tailwind CSS** for utility-first styling.
- Custom styles for header and cards in `index.css`.
- The header features a background image with a dark overlay for readability.
- Cards and modals are styled for clarity and responsiveness.

---

## Infinite Scroll Logic

- The `Home` component listens for the window scroll event.
- When the user scrolls near the bottom, it increments the page number.
- A new fetch is triggered, and more movies are appended to the list.
- Loading state is managed to prevent duplicate fetches.

---

## Search Functionality

- The `Search` page uses the OMDb API to fetch movie details by title.
- Users enter a movie name and click the search button.
- Results are displayed in a `ProductCard` with poster, title, and plot.
- Handles missing or invalid results gracefully.

---

## How to Run

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **View in browser:**  
   Open [http://localhost:5173](http://localhost:5173)

---

## API Keys

- The TMDb API key is hardcoded in `Home.tsx`.
- The OMDb API key is hardcoded in `Search.tsx`.
- **Security Note:** For production, move API keys to environment variables and do not commit them to version control.

---

## Customization

- **Change header background:** Edit the `.header` class in `index.css`.
- **Modify card layout:** Update `ProductCard.tsx` and related styles.
- **Add more movie info:** Extend the modal content in `ProductCard.tsx`.
- **Add new pages:** Create new components and add them to the router in `App.tsx`.

---

## Planned Improvements

- **Search and Filter:** Add search and filtering for movies on the main page.
- **Dark Mode:** Support for dark mode using Tailwind CSS.
- **User Authentication:** Add login/logout and user-specific features.
- **API Key Security:** Move API keys to environment variables.
- **Error Handling:** Improve error messages and loading states.
- **Unit Tests:** Add tests for components and API logic.

---

## Troubleshooting

- **API Errors:** Ensure your API keys are valid and not rate-limited.
- **Build Issues:** If you see missing files in `dist/`, run `npm run build`.
- **Module Not Found:** Check your import paths and file names for typos.
- **Styling Issues:** Make sure Tailwind CSS is properly configured in your project.

---

## License

This project is for educational/demo purposes.  
For commercial use, check TMDb API terms and Tailwind CSS license.

---

## Credits

- [TMDb API](https://www.themoviedb.org/documentation/api)
- [OMDb API](http://www.omdbapi.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---