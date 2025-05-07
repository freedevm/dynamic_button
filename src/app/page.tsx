'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Home() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Button Component Demo</h1>
      <div className="space-x-8 mb-4"> {/* Increased spacing to space-x-8 */}
        <Button variant="primary" onClick={handleClick}>
          CREATE NEW COIN
        </Button>
        <Button variant="secondary" onClick={handleClick}>
          EDIT PROFILE
        </Button>
        <Button variant="primary" disabled>
          CREATE NEW COIN
        </Button>
      </div>
      {clicked && <p className="text-green-600">Button clicked!</p>}
    </main>
  );
}