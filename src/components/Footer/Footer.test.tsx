import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer/Footer';

describe('Footer component', () => {
    it(`renders correctly`, () => {
        render(<Footer />)
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
})