import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '@/features/auth/authSlice';
import { useLogoutMutation } from '@/app/services/auth';
import { useAppDispatch } from '@/hooks/store';

const Logout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      dispatch(removeUser());
      navigate('/');
    };

    performLogout();
  }, [logout, navigate, dispatch]);

  return null;
};

export default Logout;
