import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '@/app/services/auth';
import Register from './Register';

jest.mock('@/hooks/store', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('@/app/services/auth', () => ({
  useRegisterMutation: jest.fn(),
}));

jest.mock('@/hooks/localization', () => ({
  useLocalization: jest.fn().mockReturnValue({
    strings: {
      nameTitle: 'Name',
      emailTitle: 'Email',
      passwordTitle: 'Password',
    },
  }),
}));

describe('Login Component', () => {
  const mockNavigate = jest.fn();
  const mockRegister = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useRegisterMutation as jest.Mock).mockReturnValue([mockRegister]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('submits the form and navigate', async () => {
    // Arrange: Mock the login function to resolve successfully
    mockRegister.mockReturnValueOnce({
      unwrap: () => Promise.resolve('mockUser'),
    });

    // Act: Render the component and fill in the form
    render(<Register />);
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button'));

    // Assert: Check if the login function and navigation were called correctly
    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
      });
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
