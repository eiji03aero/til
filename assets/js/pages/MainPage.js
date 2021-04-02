import * as C from '../components/index.js';
import * as L from '../layouts/index.js';

export const MainPage = () => {
  return `
    ${L.MainLayout({
      top: C.TopNav(),
      side: C.SideMenu(),
      content: C.Content(),
    })}
    ${C.Overlay()}
  `;
};
