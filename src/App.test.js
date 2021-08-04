import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Food Tastes Better When you Eat with your Family!/i);
  expect(linkElement).toBeInTheDocument();
});