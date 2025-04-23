import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect to home if already authenticated
  useEffect(() => {
    if (isAuthenticated && !loading) {
      navigate("/");
    }
  }, [isAuthenticated, loading, navigate]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-black to-spotify-dark-grey">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-bold text-spotify-white mb-4">
            Spobeats
          </h1>
          <p className="text-spotify-grey text-xl">
            Your favorite music, all in one place.
          </p>
        </div>

        <div className="bg-spotify-dark-grey rounded-lg p-8 shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-spotify-white mb-6 text-center">
            Log in to Spobeats
          </h2>

          <div className="space-y-4">
            <button
              onClick={login}
              className="w-full bg-spotify-green hover:bg-opacity-80 text-white py-3 px-8 rounded-full font-bold transition-all flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
              ) : (
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              )}
              Continue with Spotify
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-spotify-grey"></div>
              <span className="flex-shrink mx-4 text-spotify-grey">or</span>
              <div className="flex-grow border-t border-spotify-grey"></div>
            </div>

            <button
              onClick={() => navigate("/demo")}
              className="w-full bg-transparent border border-spotify-grey hover:border-spotify-white text-spotify-white py-3 px-8 rounded-full font-bold transition-all"
            >
              Try Demo Mode
            </button>
          </div>

          <p className="text-spotify-grey text-sm mt-8 text-center">
            By logging in, you agree to Spobeats' Terms and Conditions and
            Privacy Policy.
          </p>
        </div>
      </div>

      <footer className="py-6 text-center text-spotify-grey">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Spobeats. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Login;
