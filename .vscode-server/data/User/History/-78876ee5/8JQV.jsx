import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from './App'

test('adds 1 + 2 to equal 3', () => {
  expect(App()).toEqual(0)
})

describe('App', () => {
    it('renders headline', () => {
      render(<App />);
  
      screen.debug();
  
      // check if App components renders headline
    });
  });