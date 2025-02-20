import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from './App'

test('adds 1 + 2 to equal 3', () => {
  render(<App />);
});

it('should do something', () => {
    const { asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot()
});

test('playing with queries' , () => {
    const {getByText} = render(<App />);
    console.log(getByText(`React`, {exact: false}))
})