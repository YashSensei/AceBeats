import axios from "axios";

// Spotify API endpoints
const BASE_URL = "https://api.spotify.com/v1";
const AUTH_URL = "https://accounts.spotify.com/api/token";

// Replace with your own Spotify API credentials
const CLIENT_ID = "9d2d1d4527ca4a739549833c80b9a64b";
const CLIENT_SECRET = "YOUR_CLIENT_SECRET";
const REDIRECT_URI = "http://localhost:5173/callback";

// Mock data for playlists and images - use when actual API calls aren't possible
export const mockPlaylists = {
  featuredPlaylists: [
    {
      id: "37i9dQZF1DXcBWIGoYBM5M",
      name: "Today's Top Hits",
      description: "Taylor Swift is on top of the Hottest 50!",
      image: "https://i.scdn.co/image/ab67706f00000002eb43eb9f82c3be2b252d9f7c",
      type: "Playlist",
    },
    {
      id: "37i9dQZF1DWXRqgorJj26U",
      name: "Rock Classics",
      description:
        "Rock legends & epic songs that continue to inspire generations.",
      image: "https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32d63416",
      type: "Playlist",
    },
    {
      id: "37i9dQZF1DWV7EzJMK2FUI",
      name: "Jazz in the Background",
      description: "Soft instrumental Jazz for all your activities.",
      image: "https://i.scdn.co/image/ab67706f00000002e2e87890f74c98ff6a23712a",
      type: "Playlist",
    },
    {
      id: "37i9dQZF1DX3rxVfibe1L0",
      name: "Mood Booster",
      description: "Get happy with today's dose of feel-good songs!",
      image: "https://i.scdn.co/image/ab67706f00000002212d19ad6dd6c1fcda9c37af",
      type: "Playlist",
    },
    {
      id: "37i9dQZF1DX4sWSpwq3LiO",
      name: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces.",
      image: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a4",
      type: "Playlist",
    },
  ],

  recentlyPlayed: [
    {
      id: "37i9dQZEVXcJZyENOWUFo7",
      name: "Discover Weekly",
      description: "Your weekly mixtape of fresh music.",
      image: "https://i.scdn.co/image/ab67706f000000028a77de545b5f6d28d0e99d48",
      type: "Playlist",
    },
    {
      id: "37i9dQZF1E35mOXcaVrMLC",
      name: "Daily Mix 1",
      description: "The Weeknd, Dua Lipa, Post Malone and more",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6be070445e03e0b41803501a/1/en/default",
      type: "Mix",
    },
    {
      id: "37i9dQZEVXcC73Er9tPJ53",
      name: "Release Radar",
      description: "Catch all the latest music from artists you follow.",
      image: "https://i.scdn.co/image/ab67706f00000002e2a49e0edb0d142938461b35",
      type: "Playlist",
    },
    {
      id: "37i9dQZF1DX4WYpdgoIcn6",
      name: "Chill Hits",
      description: "Kick back to the best new and recent chill hits.",
      image: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
      type: "Playlist",
    },
    {
      id: "37i9dQZEVXbMDoHDwVN2tF",
      name: "Top Songs - Global",
      description: "Your daily update of the most played tracks right now.",
      image:
        "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg",
      type: "Playlist",
    },
    {
      id: "37i9dQZF1DX0XUsuxWHRQd",
      name: "RapCaviar",
      description: "Music from Kendrick Lamar, Lil Baby and more.",
      image: "https://i.scdn.co/image/ab67706f00000002b65c0fe348cbd474abeb77b2",
      type: "Playlist",
    },
  ],

  userPlaylists: [
    {
      id: "1",
      name: "Chill Vibes",
      image: "https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146",
    },
    {
      id: "2",
      name: "Workout Mix",
      image: "https://i.scdn.co/image/ab67706c0000da84f46dc681463ef0e8c4d1c1c3",
    },
    {
      id: "3",
      name: "Study Session",
      image: "https://i.scdn.co/image/ab67706c0000da846d37819d047f835269bbfd78",
    },
    {
      id: "4",
      name: "Party Anthems",
      image: "https://i.scdn.co/image/ab67706c0000da8435ca43e6ac44cfa54b8255ca",
    },
    {
      id: "5",
      name: "Road Trip",
      image: "https://i.scdn.co/image/ab67706c0000da84df9bfac3dbe8186d83ad734a",
    },
    {
      id: "6",
      name: "Morning Coffee",
      image: "https://i.scdn.co/image/ab67706c0000da84c3a83a3155aecb36814a1c1d",
    },
    {
      id: "7",
      name: "Evening Wind Down",
      image: "https://i.scdn.co/image/ab67706c0000da841fb0bfddf09e9f98ede0f616",
    },
    {
      id: "8",
      name: "Focus Flow",
      image: "https://i.scdn.co/image/ab67706c0000da8456b7e548358d726dd7abe3a5",
    },
    {
      id: "9",
      name: "Dinner Party",
      image: "https://i.scdn.co/image/ab67706c0000da84f1305f0603beb34b21e917d2",
    },
    {
      id: "10",
      name: "Beach Vibes",
      image: "https://i.scdn.co/image/ab67706c0000da84d8f2eaa0ec707c8d856e2e4a",
    },
  ],
};

// Helper function to get mock data
export const getMockData = (type) => {
  return mockPlaylists[type] || [];
};

// Scope defines which permissions we're asking for
const SCOPES = [
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "user-library-read",
  "user-library-modify",
  "user-top-read",
  "user-read-recently-played",
  "user-follow-read",
  "user-follow-modify",
];

// Create the login URL
export const getLoginUrl = () => {
  return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(
    SCOPES.join(" ")
  )}&response_type=code&show_dialog=true`;
};

// Get access token using authorization code
export const getAccessToken = async (code) => {
  try {
    const authOptions = {
      url: AUTH_URL,
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
      },
      data: new URLSearchParams({
        code,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }).toString(),
    };

    const response = await axios(authOptions);
    const { access_token, refresh_token, expires_in } = response.data;

    // Save tokens to localStorage
    const expiresAt = new Date().getTime() + expires_in * 1000;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("expires_at", expiresAt);

    return access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};

// Refresh access token when it expires
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  try {
    const authOptions = {
      url: AUTH_URL,
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
      },
      data: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }).toString(),
    };

    const response = await axios(authOptions);
    const { access_token, expires_in } = response.data;

    // Save the new access token
    const expiresAt = new Date().getTime() + expires_in * 1000;
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("expires_at", expiresAt);

    return access_token;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
};

// Get the current access token, refreshing if necessary
export const getCurrentAccessToken = async () => {
  const accessToken = localStorage.getItem("access_token");
  const expiresAt = localStorage.getItem("expires_at");

  if (!accessToken || !expiresAt) {
    return null;
  }

  // Check if the token is expired
  if (new Date().getTime() > parseInt(expiresAt)) {
    return await refreshAccessToken();
  }

  return accessToken;
};

// Create an axios instance with authorization headers
const createAuthenticatedApi = async () => {
  const token = await getCurrentAccessToken();

  if (!token) {
    throw new Error("No access token available");
  }

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// API services

// Current user profile
export const getCurrentUser = async () => {
  const api = await createAuthenticatedApi();
  const response = await api.get("/me");
  return response.data;
};

// Get user's playlists
export const getUserPlaylists = async (limit = 50, offset = 0) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(
    `/me/playlists?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

// Get featured playlists
export const getFeaturedPlaylists = async (limit = 20, offset = 0) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(
    `/browse/featured-playlists?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

// Get new releases
export const getNewReleases = async (limit = 20, offset = 0) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(
    `/browse/new-releases?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

// Get playlist details
export const getPlaylist = async (playlistId) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(`/playlists/${playlistId}`);
  return response.data;
};

// Search for tracks, albums, artists, playlists
export const search = async (
  query,
  types = ["track", "artist", "album", "playlist"],
  limit = 20,
  offset = 0
) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(
    `/search?q=${encodeURIComponent(query)}&type=${types.join(
      ","
    )}&limit=${limit}&offset=${offset}`
  );
  return response.data;
};

// Get user's saved tracks
export const getSavedTracks = async (limit = 50, offset = 0) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(`/me/tracks?limit=${limit}&offset=${offset}`);
  return response.data;
};

// Get artist details
export const getArtist = async (artistId) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(`/artists/${artistId}`);
  return response.data;
};

// Get album details
export const getAlbum = async (albumId) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(`/albums/${albumId}`);
  return response.data;
};

// Get artist's top tracks
export const getArtistTopTracks = async (artistId, country = "US") => {
  const api = await createAuthenticatedApi();
  const response = await api.get(
    `/artists/${artistId}/top-tracks?market=${country}`
  );
  return response.data;
};

// Get user's followed artists
export const getFollowedArtists = async (limit = 50, after = null) => {
  const api = await createAuthenticatedApi();
  let url = `/me/following?type=artist&limit=${limit}`;
  if (after) {
    url += `&after=${after}`;
  }
  const response = await api.get(url);
  return response.data;
};

// Get user's saved albums
export const getSavedAlbums = async (limit = 50, offset = 0) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(`/me/albums?limit=${limit}&offset=${offset}`);
  return response.data;
};

// Get audio features for a track
export const getTrackAudioFeatures = async (trackId) => {
  const api = await createAuthenticatedApi();
  const response = await api.get(`/audio-features/${trackId}`);
  return response.data;
};

// Get recommendations based on seed entities
export const getRecommendations = async (
  seedArtists = [],
  seedTracks = [],
  seedGenres = [],
  limit = 20
) => {
  const api = await createAuthenticatedApi();
  let url = `/recommendations?limit=${limit}`;

  if (seedArtists.length) {
    url += `&seed_artists=${seedArtists.join(",")}`;
  }

  if (seedTracks.length) {
    url += `&seed_tracks=${seedTracks.join(",")}`;
  }

  if (seedGenres.length) {
    url += `&seed_genres=${seedGenres.join(",")}`;
  }

  const response = await api.get(url);
  return response.data;
};

// Log out
export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("expires_at");
};
