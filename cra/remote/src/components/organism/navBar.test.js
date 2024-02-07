// NavigationBar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationBar from './NavigationBar';

test('renders navigation bar with correct links', () => {
  render(<NavigationBar />);

  // Assuming you have three navigation links (Home, About, Contact)
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const contactLink = screen.getByText(/contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

test('clicking on a navigation link triggers the correct action', () => {
  const mockNavigate = jest.fn();

  render(<NavigationBar navigate={mockNavigate} />);

  // Assuming you have three navigation links (Home, About, Contact)
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const contactLink = screen.getByText(/contact/i);

  // Simulate clicking on a link
  fireEvent.click(homeLink);
  expect(mockNavigate).toHaveBeenCalledWith('Home');

  // Simulate clicking on another link
  fireEvent.click(aboutLink);
  expect(mockNavigate).toHaveBeenCalledWith('About');

  // Simulate clicking on yet another link
  fireEvent.click(contactLink);
  expect(mockNavigate).toHaveBeenCalledWith('Contact');
});
