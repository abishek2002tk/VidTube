## VidTube - YouTube Clone

VidTube is a modern YouTube clone built with React and Vite. It features video playback, recommended videos, dark mode, and a responsive UI inspired by YouTube.

## Features
- Browse trending and popular videos
- Watch videos with embedded player
- View recommended videos sidebar
- Dark mode and light mode toggle
- Responsive design for desktop and mobile
- Search functionality
- Channel and video details

## Tech Stack
- React
- Vite
- CSS Modules
- YouTube Data API v3

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/VidTube.git
   cd VidTube
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root and add your YouTube API key:
   ```env
   VITE_API_KEY=your_youtube_api_key_here
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure
```
src/
  components/
    Feed/
    Navbar/
    PlayVideo/
    Recommended/
    sidebar/
  Pages/
    Home/
    Video/
  assets/
  App.jsx
  Data.js
```

## Environment Variables
- `.env` should contain:
  ```env
  VITE_API_KEY=your_youtube_api_key_here
  ```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

---

**VidTube** - Created by [your name].
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
