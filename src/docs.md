# Movie Website

## Overview

This project is a modern React application that displays a list of popular movies using [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api). It features infinite scrolling, responsive design with Tailwind CSS, and a modal dialog for viewing movie details.

---

## Features

- **Popular Movies List:** Fetches and displays popular movies from TMDb.
- **Infinite Scroll:** Loads more movies as you scroll down.
- **Responsive UI:** Styled with Tailwind CSS for mobile and desktop.
- **Movie Details Modal:** View more information about a movie in a modal.
- **Component-Based Architecture:** Reusable components for cards, buttons, images, and modals.

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
│   │   └── Home.tsx             # Main page with infinite scroll
│   ├── ui/
│   │   ├── ButtonComponent.tsx  # Reusable button
│   │   └── DailogModle.tsx      # Modal dialog component
│   ├── index.css                # Tailwind and custom styles
│   └── main.tsx / App.tsx       # App entry point
```

---

## Key Components

### 1. `Home.tsx`
- Fetches movies from TMDb API.
- Implements infinite scroll using a scroll event listener.
- Renders a list of `ProductCard` components.

### 2. `ProductCard.tsx`
- Displays movie poster and title.
- "About Movie" button opens a modal with more details.
- Shows a warning if the movie is for adults (+18).

### 3. `MyModal` (Dialog)
- Reusable modal dialog for displaying movie information.

### 4. `ButtonComponent`
- Reusable button with customizable color and text.

---

## Styling

- Uses **Tailwind CSS** for utility-first styling.
- Custom styles for header and cards in `index.css`.

---

## Infinite Scroll Logic

- The `Home` component listens for the window scroll event.
- When the user scrolls near the bottom, it increments the page number.
- A new fetch is triggered, and more movies are appended to the list.

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

## API Key

- The TMDb API key is hardcoded in `Home.tsx`.  
  For production, use environment variables for security.

---

## Customization

- **Change header background:** Edit the `.header` class in `index.css`.
- **Modify card layout:** Update `ProductCard.tsx` and related styles.
- **Add more movie info:** Extend the modal content in `ProductCard.tsx`.

---

## Planned Improvements

- **Search and Filter:** Add search and filtering for movies.
- **Dark Mode:** Support for dark mode using Tailwind CSS.
- **User Authentication:** Add login/logout and user-specific features.
- **API Key Security:** Move API key to environment variables.

---

## License

This project is for educational/demo purposes.  
For commercial use, check TMDb API terms and Tailwind CSS license.

---

## Credits

- [TMDb API](https://www.themoviedb.org/documentation/api)
- [Tailwind CSS](https://tailwindcss.com/)

---

Feel free to extend this project with new features!