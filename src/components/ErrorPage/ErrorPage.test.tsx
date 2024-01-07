import { render, screen } from '@testing-library/react';
import ErrorPage from './ErrorPage';
import { useRouteError } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useRouteError: jest.fn(),
}));

describe('ErrorPage', () => {
  it('displays the error message', () => {
    (useRouteError as jest.Mock).mockReturnValue({ message: 'Test Error Message' });

    render(<ErrorPage />);

    expect(screen.getByText('Test Error Message')).toBeInTheDocument();
  });
});
