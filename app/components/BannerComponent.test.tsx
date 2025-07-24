import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import BannerComponent from './BannerComponent';

describe('BannerComponent', () => {
  test('Should render banner image', () => {
    render(<BannerComponent />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/bg.jpg');
  });
});
