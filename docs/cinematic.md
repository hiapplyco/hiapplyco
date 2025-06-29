
# Cinematic Introduction Implementation Guide

## Overview

This document provides a step-by-step guide on how to implement a cinematic introduction for the hiapplyco website. The introduction will feature the Apply logo animating in and creating a ripple effect in the particle background.

## Step 1: Create the `CinematicIntro` Component

First, create a new file at `src/components/CinematicIntro.tsx` and add the following code:

```tsx
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const IntroContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  z-index: 9999;
  animation: ${fadeOut} 1s ease-in-out 3s forwards;
`;

const Logo = styled.img`
  max-width: 80%;
  max-height: 80%;
  animation: ${fadeIn} 2s ease-in-out forwards;
`;

const CinematicIntro = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <IntroContainer>
      <Logo src="https://kxghaajojntkqrmvsngn.supabase.co/storage/v1/object/public/logos//APPLYFullwordlogo2025.png" alt="Apply Logo" />
    </IntroContainer>
  );
};

export default CinematicIntro;
```

## Step 2: Modify the Particle Animation

Next, you'll need to modify the particle animation to create a ripple effect when the logo animates in. Open `src/components/particles/Effect.ts` and add the following method to the `Effect` class:

```ts
  pulse() {
    this.particles.forEach(particle => {
      const dx = particle.x - this.width / 2;
      const dy = particle.y - this.height / 2;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const delay = distance * 0.01;

      setTimeout(() => {
        particle.radius = 10; // Or some other value to create a pulse effect
        setTimeout(() => {
          particle.radius = 2; // Reset to the original value
        }, 500);
      }, delay);
    });
  }
```

Then, in `src/components/CinematicIntro.tsx`, you'll need to call this new method when the component mounts. You can do this by passing a reference to the `Effect` instance to the `CinematicIntro` component.

## Step 3: Integrate the `CinematicIntro` Component

Finally, you'll need to integrate the `CinematicIntro` component into your application. Open `src/App.tsx` and add the following code:

```tsx
import CinematicIntro from './components/CinematicIntro';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CinematicIntro />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/animation-demo" element={<AnimationDemo />} />
            <Route path="/pricing/:clientSlug" element={<Pricing />} />
            <Route path="/protected-pricing/:clientSlug" element={<ProtectedPricing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);
```

## Conclusion

By following these steps, you can create a cinematic introduction for your website that will engage users and create a memorable first impression.
