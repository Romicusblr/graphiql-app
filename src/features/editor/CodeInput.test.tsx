import { render, screen } from '@testing-library/react';
import { CodeInput } from './CodeInput';
import * as reduxHooks from '@/hooks/store';

// Mock types
type DispatchType = typeof reduxHooks.useAppDispatch extends () => infer D
  ? D
  : never;
type SelectorType = typeof reduxHooks.useAppSelector;

describe('CodeInput Component', () => {
  // Mock Redux hooks
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

  it('renders the CodeInput component', () => {
    render(<CodeInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  // it.skip('dispatches setQuery action on input change', () => {
  //   render(<CodeInput />);
  //   const newValue = 'new query';
  //   const element = screen.getByRole('textbox');
  //   // fireEvent.change(screen.getByRole('textbox'), { target: { value: newValue } });
  //   expect(mockDispatch).toHaveBeenCalled();
  //   expect(mockSelector).toHaveBeenCalledWith(expect.any(Function));
  // });
});
