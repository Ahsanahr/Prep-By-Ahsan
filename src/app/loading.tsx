import React from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';

export default function Loading() {
  return <LoadingScreen fullPage={true} label="Loading PREP BY Ahsan..." sublabel="Fetching application resources..." />;
}
