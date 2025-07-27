import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { test, describe, expect } from 'vitest';
import SidebarMenuComponent from './SidebarMenuComponent';
import type { SidebarMenu } from '~/types/sidebarMenuType';

// Mock icon components
const HomeModernIcon = () => <svg data-testid="home-modern-icon" />;
const Cog6ToothIcon = () => <svg data-testid="cog-6-tooth-icon" />;

const mockMenuItems: SidebarMenu[] = [
  { name: 'Dashboard', href: '/', current: true, icon: HomeModernIcon },
  { name: 'About', href: '/about', current: false, icon: Cog6ToothIcon },
  { name: 'Settings', href: '/settings', current: false, icon: Cog6ToothIcon },
];

describe('SidebarMenuComponent', () => {
  test('Should renders all menu items with correct names and icons', () => {
    render(
      <MemoryRouter>
        <SidebarMenuComponent menuItems={mockMenuItems} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getAllByTestId('home-modern-icon')).toHaveLength(1);
    expect(screen.getAllByTestId('cog-6-tooth-icon')).toHaveLength(2);
  });

  test('Should renders NavLinks with correct href attributes', () => {
    render(
      <MemoryRouter>
        <SidebarMenuComponent menuItems={mockMenuItems} />
      </MemoryRouter>,
    );

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[1]).toHaveAttribute('href', '/about');
    expect(links[2]).toHaveAttribute('href', '/settings');
  });

  test('Should renders nothing when menuItems array is empty', () => {
    render(
      <MemoryRouter>
        <SidebarMenuComponent menuItems={[]} />
      </MemoryRouter>,
    );

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
