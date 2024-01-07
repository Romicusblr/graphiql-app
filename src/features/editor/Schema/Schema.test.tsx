import { render, screen } from '@testing-library/react';
import Schema from './Schema';
import { useGetSchemaQuery } from '@/app/services/graphql';

jest.mock('@/app/services/graphql', () => ({
  useGetSchemaQuery: jest.fn(),
}));

// Mock implementation for useGetSchemaQuery
const mockUseGetSchemaQuery = useGetSchemaQuery as jest.Mock;

describe('Schema Component', () => {
  it('renders a textarea with the data', () => {
    // Mock the hook to return specific data
    const mockData = 'Mocked GraphQL Schema';
    mockUseGetSchemaQuery.mockReturnValue({ data: mockData });

    render(<Schema />);

    const textbox = screen.getByRole<HTMLInputElement>('textbox');
    expect(textbox).toBeInTheDocument();
    expect(textbox).toHaveValue(mockData);
  });

  it('does not render textarea when there is no data', () => {
    // Mock the hook to return undefined data
    mockUseGetSchemaQuery.mockReturnValue({ data: undefined });

    render(<Schema />);

    expect(screen.queryByRole('textbox', { name: 'docs' })).toBeNull();
  });
});
