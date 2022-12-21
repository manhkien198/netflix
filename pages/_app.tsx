import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import 'react-loading-skeleton/dist/skeleton.css';

interface ContextProps {
  lang: string;
  setLang: Function;
}
const defaultValue = {
  lang: '',
  setLang: () => null,
};
const AppContext = createContext<ContextProps>(defaultValue);
export default function App({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState<string>('en-US');
  const router = useRouter();
  useEffect(() => {
    router.push({
      query: { ...router.query, lang },
    });
  }, [lang]);

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
