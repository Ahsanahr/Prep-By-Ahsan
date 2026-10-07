import React from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';

export default function MainLoading() {
  return (
    <div className="p-8">
      <LoadingScreen fullPage={false} label="Loading Data & Questions..." sublabel="Our system is retrieving questions and compiling stats." />
    </div>
  );
}
