import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import PriceCardsComponents from './PriceCardsComponent';
import type { PetrolCard } from '~/types/petrolType';

const mockData: PetrolCard = {
  type: 'ron95',
  label: 'RON 95',
  region: 'All region',
  price: 2.0
};

describe('PriceCardsComponents', () => {
  test('Should render correct petrol card info', () => {
    render(<PriceCardsComponents card={mockData} />);
    expect(screen.getByTestId('test-id-label')).toHaveTextContent('RON 95');
    expect(screen.getByTestId('test-id-price')).toHaveTextContent('RM2/per litre');
    expect(screen.getByTestId('test-id-region')).toHaveTextContent('All region');
  });
});
