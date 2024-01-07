import { render, screen } from '@testing-library/react';
import Loading from '@/components/Loading/Loading';

describe('Loading component', () => {
  it(`renders correctly`, () => {
    render(<Loading />);

    expect(screen.getByText(/./)).toBeInTheDocument();
  });
});
