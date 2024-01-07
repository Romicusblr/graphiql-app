import { render, screen } from '@testing-library/react';
import NotFoundPage from '@/components/NotFoundPage/NotFoundPage';
import {MemoryRouter} from 'react-router-dom';

describe('NotFoundPage component', () => {
    it(`renders correctly`, () => {
        render(
            <MemoryRouter>
                <NotFoundPage />
            </MemoryRouter>
        );

        expect(screen.getByText(/404/i)).toBeInTheDocument();
        expect(screen.getByText(/Oops! The page you are looking for could not be found./i)).toBeInTheDocument();

        const backHomeLinkElement = screen.getByRole('link', { name: /Back Home/i });
        expect(backHomeLinkElement).toBeInTheDocument();
        expect(backHomeLinkElement.getAttribute('href')).toBe('/');
    });
});
