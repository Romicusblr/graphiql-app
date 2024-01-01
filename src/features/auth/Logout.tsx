import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '@/api';
import { removeUser } from '@/features/auth/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      await auth.logout();
      dispatch(removeUser());
      navigate('/');
    };

    performLogout();
  }, [navigate, dispatch]);

  return null;
};

export default Logout;
