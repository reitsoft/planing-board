import { render, screen } from '@testing-library/react';
import App from './App';

test('renders comming soon text', () => {
  render(<App />);
  const h1Element = screen.getByText(/Waaahhh, comming soon/i);
  expect(h1Element).toBeInTheDocument();
});
