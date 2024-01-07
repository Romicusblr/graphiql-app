import { fireEvent, render, screen } from '@testing-library/react';
import * as reduxHooks from '@/hooks/store';
import { ApiSelection } from './ApiSelection';

describe('ApiSelection Component', () => {
  // Mock Redux hooks
  const mockDispatch = jest.fn();
  const mockSelector = jest.fn();

  beforeEach(() => {
    jest.spyOn(reduxHooks, 'useAppDispatch').mockReturnValue(mockDispatch);
    jest.spyOn(reduxHooks, 'useAppSelector').mockImplementation(mockSelector);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(`renders correctly`, () => {
    render(<ApiSelection />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('dispatches action on input change', () => {
    render(<ApiSelection />);
    const newValue = 'new query';
    const element = screen.getByRole('textbox');
    fireEvent.change(element, { target: { value: newValue } });
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSelector).toHaveBeenCalledWith(expect.any(Function));
  });
});
