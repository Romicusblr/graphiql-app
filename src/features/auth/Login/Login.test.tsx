import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/store';
import { useLoginMutation } from '@/app/services/auth';
import Login from './Login';

jest.mock('@/hooks/store', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@/app/services/auth', () => ({
  useLoginMutation: jest.fn(),
}));

jest.mock('@/hooks/localization', () => ({
  useLocalization: jest.fn().mockReturnValue({
    strings: {
      emailTitle: 'Email',
      passwordTitle: 'Password',
    },
  }),
}));

describe('Login Component', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  const mockLogin = jest.fn();

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useLoginMutation as jest.Mock).mockReturnValue([mockLogin]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('submits the form and navigates on successful login', async () => {
    // Arrange: Mock the login function to resolve successfully
    mockLogin.mockReturnValueOnce({ unwrap: () => Promise.resolve('mockUser') });

    // Act: Render the component and fill in the form
    render(<Login />);
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'password123!' },
    });
    fireEvent.click(screen.getByRole('button'));

    // Assert: Check if the login function and navigation were called correctly
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123!',
      });
      expect(mockDispatch).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith('/app');
    });
  });
});
