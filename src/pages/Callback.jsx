import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Callback() {
  const { isAuthenticated, loading, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If authentication is complete, redirect to home page
    if (!loading) {
      if (isAuthenticated) {
        navigate('/', { replace: true });
      } else if (error) {
        navigate('/login', { replace: true });
      }
    }
  }, [isAuthenticated, loading, error, navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-spotify-black">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-spotify-green mx-auto mb-6"></div>
        <h1 className="text-3xl font-bold text-spotify-white mb-2">Logging you in...</h1>
        <p className="text-spotify-grey">Please wait while we authenticate your account</p>
      </div>
    </div>
  );
}

export default Callback; 