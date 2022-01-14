import { render } from '@testing-library/react';
import App from './App';

test('renders App bug free', () => {
  const {getByText} = render(<App />)
  const experiencesElement = getByText(/Recent Experiences/)
  expect(experiencesElement).toBeInTheDocument();
});
