// import { createContext, useEffect, useState } from 'react';

// type Theme = 'light' | 'dark';

// export const ThemeContext = createContext({
//   theme: 'light' as Theme,
//   toggleTheme: () => {},
// });

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>('light');

//   useEffect(() => {
//     const saved = localStorage.getItem('theme') as Theme | null;
//     if (saved) setTheme(saved);
//   }, []);

//   useEffect(() => {
//     const root = document.documentElement;
//     if (theme === 'dark') {
//       root.classList.add('dark');
//     } else {
//       root.classList.remove('dark');
//     }
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () =>
//     setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
