import { render } from '@testing-library/react';
import { ErrorBoundary } from './errorBoundary';

jest.spyOn(console, 'error').mockImplementation(() => null);

describe('Error Boundary', () => {
  it(`should render error boundary component when there is an error`, () => {
    // const renderProviders = (ui: React.ReactElement) => render(ui, {});
    const ThrowError = () => {
      throw new Error('Error');
    };
    const { getByText } = render(
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(() => render(<ThrowError />)).toThrow();

    const errorMessage = getByText(/Something went wrong/i);
    expect(errorMessage).toBeDefined();
  });
});
