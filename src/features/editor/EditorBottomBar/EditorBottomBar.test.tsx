import { render, fireEvent, screen } from '@testing-library/react';
import { EditorBottomBar } from './EditorBottomBar';

jest.mock('@/features/editor/CodeMirror/VariableEditor', () => ({
  VariableEditor: () => <div data-testid="variable-editor">Variable Editor</div>,
}));

jest.mock('@/features/editor/CodeMirror/HeadersEditor', () => ({
  HeadersEditor: () => <div data-testid="headers-editor">Headers Editor</div>,
}));

jest.mock('@/components/buttons/VariableEditorButton', () => ({
  VariableEditorButton: ({ handleClick }: { handleClick: () => void }) => (
    <button onClick={handleClick} data-testid="variable-editor-button">Variables</button>
  ),
}));

jest.mock('@/components/buttons/HeadersEditorButton', () => ({
  HeadersEditorButton: ({ handleClick }: { handleClick: () => void }) => (
    <button onClick={handleClick} data-testid="headers-editor-button">Headers</button>
  ),
}));

jest.mock('@/features/editor/ApiSelection', () => ({
  ApiSelection: () => <div data-testid="api-selection">API Selection</div>,
}));

describe('EditorBottomBar Component', () => {
  it('toggles VariableEditor and HeadersEditor on button clicks', () => {
    render(<EditorBottomBar />);

    expect(screen.queryByTestId('variable-editor')).toBeNull();
    expect(screen.queryByTestId('headers-editor')).toBeNull();

    fireEvent.click(screen.getByTestId('variable-editor-button'));
    expect(screen.getByTestId('variable-editor')).toBeInTheDocument();
    expect(screen.queryByTestId('headers-editor')).toBeNull();

    fireEvent.click(screen.getByTestId('headers-editor-button'));
    expect(screen.queryByTestId('variable-editor')).toBeNull();
    expect(screen.getByTestId('headers-editor')).toBeInTheDocument();
  });
});
