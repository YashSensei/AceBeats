# AceBeats - Spotify Clone Application

AceBeats is a feature-rich music streaming application that integrates with the Spotify API. This project aims to recreate the Spotify web experience with a clean, responsive UI and core functionality.

## Features

- 🎵 Stream music via Spotify API integration
- 🔐 User authentication with Spotify accounts
- 🏠 Home feed with personalized recommendations
- 🔍 Search functionality for tracks, artists, albums, and playlists
- 📚 Library management for saved content
- 🎧 Playback controls with a custom player
- 📱 Responsive design that works on all devices

## Technologies Used

- **React** - Frontend library
- **React Router** - For navigation
- **Tailwind CSS** - For styling
- **Axios** - For API requests
- **Spotify Web API** - For music data

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Spotify Developer Account

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/acebeats.git
cd acebeats
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file in the root directory with your Spotify API credentials:
```
VITE_SPOTIFY_CLIENT_ID=your_client_id
VITE_SPOTIFY_CLIENT_SECRET=your_client_secret
VITE_REDIRECT_URI=http://localhost:5173/callback
```

4. Start the development server:
```
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Spotify API Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
2. Create a new application
3. Add `http://localhost:5173/callback` as a Redirect URI
4. Copy your Client ID and Client Secret to the `.env` file

## Usage

1. Open the application in your browser
2. Log in with your Spotify account
3. Browse, search, and play music

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Spotify](https://www.spotify.com) for the inspiration and API
- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api/)
- [Tailwind CSS](https://tailwindcss.com) for the styling framework

## Disclaimer

This app is for educational purposes only and is not affiliated with Spotify. All product names, logos, and brands are property of their respective owners.
