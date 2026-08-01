import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

describe('ThriveForward website', () => {
  it('communicates the core company positioning', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /build better technology/i }),
    ).toBeTruthy();
    expect(screen.getAllByText(/book a strategy call/i).length).toBeGreaterThan(
      0,
    );
  });
});
