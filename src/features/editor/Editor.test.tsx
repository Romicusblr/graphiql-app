import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// import * as reduxHooks from '@/hooks/store';
import { useLazyGqlQuery } from '@/app/services/graphql';
import * as prettyfier from '@/utils/prettyfier';
import { CodeEditor } from './Editor';
import { IButtonProps } from '@/types';
import {
  selectApiUrl,
  selectHeaders,
  selectQuery,
  selectVariables,
} from './editorSlice';

jest.mock('@/hooks/store', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('@/app/services/graphql', () => ({
  useLazyGqlQuery: jest.fn(),
}));

jest.mock('@/utils/prettyfier', () => ({
  prettifyGraphql: jest.fn(),
}));

jest.mock('@/features/editor/CodeMirror/CodeInput', () => ({
  CodeInput: () => <textarea data-testid="code-input" />,
}));

jest.mock('@/components/buttons/RunButton', () => ({
  RunButton: ({ handleClick }: IButtonProps) => (
    <button onClick={handleClick} data-testid="run-button">
      Run
    </button>
  ),
}));

jest.mock('@/components/buttons/PrettifyButton', () => ({
  PrettifyButton: ({ handleClick }: IButtonProps) => (
    <button onClick={handleClick} data-testid="prettify-button">
      Prettify
    </button>
  ),
}));

jest.mock('@/components/buttons/ClearButton', () => ({
  ClearButton: ({ handleClick }: IButtonProps) => (
    <button onClick={handleClick} data-testid="clear-button">
      Clear
    </button>
  ),
}));

describe('CodeEditor Component', () => {
  const mockDispatch = jest.fn();
  const mockTrigger = jest.fn();
  const mockPrettifyGraphql = prettyfier.prettifyGraphql as jest.Mock;
  const mockSelectApiUrl = jest.fn().mockReturnValue('');
  const mockSelectQuery = jest.fn().mockReturnValue('');
  const mockSelectHeaders = jest.fn().mockReturnValue('');
  const mockSelectVariables = jest.fn().mockReturnValue('');

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useAppSelector as jest.Mock).mockImplementation((selector) => {
      if (selector === selectApiUrl) {
        return mockSelectApiUrl();
      }
      if (selector === selectQuery) {
        return mockSelectQuery();
      }
      if (selector === selectHeaders) {
        return mockSelectHeaders();
      }
      if (selector === selectVariables) {
        return mockSelectVariables();
      }
      return undefined;
    });
    (useLazyGqlQuery as jest.Mock).mockReturnValue([mockTrigger]);
    mockPrettifyGraphql.mockResolvedValue('Prettified Query');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls rtk query on RunButton click if api and url defined', async () => {
    mockSelectApiUrl.mockReturnValueOnce('test');
    mockSelectQuery.mockReturnValueOnce('test');
    render(<CodeEditor />);
    fireEvent.click(screen.getByTestId('run-button'));
    expect(mockTrigger).toHaveBeenCalled();
  });

  it('do not calls rtk query on RunButton click if api not defined', async () => {
    mockSelectApiUrl.mockReturnValueOnce('test');
    render(<CodeEditor />);
    fireEvent.click(screen.getByTestId('run-button'));
    expect(mockTrigger).not.toHaveBeenCalled();
  });

  it('do not calls rtk query on RunButton click if url not defined', async () => {
    mockSelectQuery.mockReturnValueOnce('test');
    render(<CodeEditor />);
    fireEvent.click(screen.getByTestId('run-button'));
    expect(mockTrigger).not.toHaveBeenCalled();
  });

  it('calls prettify on PrettifyButton click if query defined', async () => {
    mockSelectQuery.mockReturnValueOnce('test');
    render(<CodeEditor />);
    // Assume button for prettify has testId 'prettify-button'
    fireEvent.click(screen.getByTestId('prettify-button'));
    // because handler is async
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  it('do not calls prettify on PrettifyButton click if query not defined', async () => {
    render(<CodeEditor />);
    // Assume button for prettify has testId 'prettify-button'
    fireEvent.click(screen.getByTestId('prettify-button'));
    // because handler is async
    await waitFor(() => {
      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });

  it('calls clearQuery on ClearButton click', () => {
    render(<CodeEditor />);
    // Assume button for clear has testId 'clear-button'
    fireEvent.click(screen.getByTestId('clear-button'));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
