'use client';
import React from 'react';

const SoundEnableContext = React.createContext();
function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(false);

  return (
    <SoundEnableContext.Provider
      value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnableContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(SoundEnableContext);

  if (!data) {
    throw new Error(
      'Cannot consume SoundEnabled context without a SoundEnabledProvider'
    );
  }

  return data;
}

export default SoundEnabledProvider;
