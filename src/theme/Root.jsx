import React from 'react';
import {LanguageProvider} from '@site/src/contexts/LanguageContext';

// Default fallback wrapper if no providers are needed
const DefaultRoot = ({children}) => <>{children}</>;

export default function Root({children}) {
  // Wrap children with LanguageProvider to provide context to all components
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}