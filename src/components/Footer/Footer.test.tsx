import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer/Footer';

describe('Footer component', () => {
  it(`renders correctly`, () => {
    render(<Footer />);

    expect(
      screen.getByRole('link', { name: /Romicusblr/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /W1t1uv/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /AndreiArtsiomenko/i })
    ).toBeInTheDocument();

    expect(screen.getByAltText('logo RS School')).toBeInTheDocument();

    const year = new Date().getFullYear();
    expect(screen.getByText(year.toString())).toBeInTheDocument();
  });
});
