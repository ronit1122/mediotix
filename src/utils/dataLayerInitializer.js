
'use client';  // Mark this component as a Client Component

import { useEffect } from 'react';

export default function DataLayerInitializer() {
  useEffect(() => {
    // Initialize dataLayer globally when the app is first loaded
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
    }
  }, []);

  return null; // No UI needed, it just runs the logic
}
