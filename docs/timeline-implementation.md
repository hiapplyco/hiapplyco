
# Deployment Timeline Implementation Guide

## Overview

This document provides a step-by-step guide on how to implement a scrollable timeline that visualizes the AI agent implementation process for an SMB. This component will replace the existing "Success Stories" section.

## Step 1: Create the `DeploymentTimeline` Component

First, create a new file at `src/components/DeploymentTimeline.tsx` and add the following code:

```tsx
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineData = [
  { week: 1, title: 'Discovery & Planning', description: 'We meet with you to understand your business and goals. We then create a detailed project plan and timeline.' },
  { week: 2, title: 'Data & Infrastructure Setup', description: 'We set up the necessary infrastructure and connect to your data sources. This includes setting up a secure cloud environment and data pipelines.' },
  { week: 3, title: 'AI Model Development & Training', description: 'We develop and train the AI models that will power your new agent. This includes feature engineering, model selection, and training.' },
  { week: 4, title: 'Agent Integration & Testing', description: 'We integrate the AI models into your new agent and test it thoroughly. This includes unit testing, integration testing, and user acceptance testing.' },
  { week: 5, title: 'Deployment & Go-Live', description: 'We deploy the new agent to your live environment and monitor it closely. We also provide training and support to your team.' },
];

const DeploymentTimeline = () => {
  return (
    <section id="timeline" className="section-spacing px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Agent Deployment Timeline</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A typical timeline for deploying a new AI agent for an SMB.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 bg-border -translate-x-1/2"></div>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: index % 2 === 0 ? -100 : 100 });
    }
  }, [controls, inView, index]);

  return (
    <div ref={ref} className="mb-8 flex justify-between items-center w-full">
      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="bg-card p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold mb-2">Week {item.week}</h3>
          <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
          <p className="text-muted-foreground">{item.description}</p>
        </motion.div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default DeploymentTimeline;
```

## Step 2: Replace `SuccessStories` with `DeploymentTimeline`

Next, you'll need to replace the `SuccessStories` component with the new `DeploymentTimeline` component. Open `src/pages/Index.tsx` and make the following changes:

```diff
- import SuccessStories from '@/components/SuccessStories';
+ import DeploymentTimeline from '@/components/DeploymentTimeline';

// ...

      <div className="relative" style={{
      zIndex: 10
    }}>
        <Process />
        <Projects />
        <AgentEcosystemVisualization />
        <Tools />
-        <SuccessStories />
+        <DeploymentTimeline />
        <LogosSection />
        <About />
        <Contact />
```

## Step 3: Install Dependencies

Finally, you'll need to install the `framer-motion` and `react-intersection-observer` dependencies:

```bash
npm install framer-motion react-intersection-observer
```

## Conclusion

By following these steps, you can replace the existing "Success Stories" section with a dynamic, scrollable timeline that visualizes the AI agent implementation process for an SMB.
