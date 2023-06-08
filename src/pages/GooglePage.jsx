import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GooglePage = () => {
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    setToken(token);
  }, [location.search]);

  return <h2>Token: {token}</h2>;
};

export default GooglePage;
