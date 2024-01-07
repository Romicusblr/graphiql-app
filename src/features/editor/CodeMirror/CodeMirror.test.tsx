import { fireEvent, render, screen } from '@testing-library/react';
import { CodeInput } from './CodeInput';
import { CodeOutput } from './CodeOutput';
import { VariableEditor } from './VariableEditor';
import { HeadersEditor } from './HeadersEditor';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import {
  selectApiUrl,
  selectHeaders,
  selectQuery,
  selectVariables,
} from '../editorSlice';

jest.mock('@/hooks/store', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

interface MyElement extends HTMLElement {
  cmView: { dom: { innerHTML: string } };
}

const textareaComponents = [
  CodeInput,
  CodeOutput,
  VariableEditor,
  HeadersEditor,
];

describe.each(textareaComponents)('CodeMirror Component', (Component) => {
  const mockDispatch = jest.fn();
  const mockSelectApiUrl = jest.fn().mockReturnValue('');
  const mockSelectQuery = jest.fn().mockReturnValue('');
  const mockSelectHeaders = jest.fn().mockReturnValue('{}');
  const mockSelectVariables = jest.fn().mockReturnValue('');

  beforeEach(() => {
    jest.spyOn(JSON, 'parse').mockImplementation(jest.fn());
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
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`renders textarea component`, () => {
    render(<Component />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('dispatches setQuery action on input change', () => {
    render(<Component />);
    const input = screen.getByRole<HTMLInputElement>('textbox');
    fireEvent.change(input, { target: { textContent: 'test' } });
    const elm = screen.queryByText<MyElement>('test');
    expect(elm?.cmView.dom.innerHTML).toEqual('test');
  });
});
