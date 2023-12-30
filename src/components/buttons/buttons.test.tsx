import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { RunButton } from './RunButton';

const handleClickMock = jest.fn();

describe('button Component', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it('renders correctly', () => {
    render(<RunButton handleClick={handleClickMock} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('on click trigger handleClick function', () => {
    render(<RunButton handleClick={handleClickMock} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
