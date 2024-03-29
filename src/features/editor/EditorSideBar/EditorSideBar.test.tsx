jest.mock('@/components/buttons/DocsButton', () => ({
  DocsButton: ({ handleClick }: IButtonProps) => (
    <button onClick={handleClick} data-testid="docs-button">
      Docs
    </button>
  ),
}));

jest.mock('@/features/editor/DocsExplorer', () => ({
  DocsExplorer: () => <div data-testid="docs-explorer">Docs Content</div>,
}));

import { render, fireEvent, screen } from '@testing-library/react';
import { EditorSideBar } from './EditorSideBar';
import { IButtonProps } from '@/types';

describe('EditorSideBar Component', () => {
  it('toggles DocsExplorer on button click', () => {
    render(<EditorSideBar />);

    expect(screen.queryByTestId('docs-explorer')).toBeNull();

    fireEvent.click(screen.getByTestId('docs-button'));
    expect(screen.getByTestId('docs-explorer')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('docs-button'));
    expect(screen.queryByTestId('docs-explorer')).toBeNull();
  });
});
