import { render, screen } from '@testing-library/react';
import LanguageToggle from '@/components/LanguageToggle/LanguageToggle';
import { REGIONS } from '@/locales/constants';

describe('LanguageToggle component', () => {
  it('renders correctly', () => {
    render(<LanguageToggle />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();

    Object.keys(REGIONS).forEach((region) => {
      expect(screen.getByText(region.toLowerCase())).toBeInTheDocument();
    });
  });
});
