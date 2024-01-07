import { render, waitFor } from '@testing-library/react';
import { useAppDispatch } from '@/hooks/store';
import { useNavigate } from 'react-router-dom';
import * as authService from '@/app/services/auth';
import Logout from './Logout';
import { removeUser } from '../authSlice';

jest.mock('@/hooks/store', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@/app/services/auth', () => ({
  useLogoutMutation: jest.fn(),
}));
describe('Logout Component', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  const mockLogout = jest.fn();

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (authService.useLogoutMutation as jest.Mock).mockReturnValue([mockLogout]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('performs the logout process', async () => {
    render(<Logout />);

    expect(mockLogout).toHaveBeenCalled();
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(removeUser());

      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
