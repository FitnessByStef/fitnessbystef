import React from 'react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {children}
    </div>
  );
}