import { fireEvent, render, screen } from '@testing-library/react';
import * as reduxHooks from '@/hooks/store';
import { CodeInput } from './CodeInput';
import { CodeOutput } from './CodeOutput';
import { VariableEditor } from './VariableEditor';
import { HeadersEditor } from './HeadersEditor';

type DispatchType = typeof reduxHooks.useAppDispatch extends () => infer D
  ? D
  : never;
type SelectorType = typeof reduxHooks.useAppSelector;
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
  const mockSelector = jest.fn();

  beforeEach(() => {
    jest
      .spyOn(reduxHooks, 'useAppDispatch')
      .mockReturnValue(mockDispatch as DispatchType);
    jest
      .spyOn(reduxHooks, 'useAppSelector')
      .mockImplementation(mockSelector as SelectorType);
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
