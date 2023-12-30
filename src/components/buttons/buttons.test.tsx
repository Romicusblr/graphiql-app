import '@testing-library/jest-dom';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { RunButton } from './RunButton';
import { ClearButton } from './ClearButton';
import { PrettifyButton } from './PrettifyButton';

const handleClickMock = jest.fn();
const buttons = [RunButton, ClearButton, PrettifyButton];

describe.each(buttons)('button Component', (Component) => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it(`${Component.name} renders correctly`, () => {
    render(<Component handleClick={handleClickMock} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it(`${Component.name} on click trigger handleClick function`, () => {
    render(<Component handleClick={handleClickMock} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
