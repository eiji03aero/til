import * as C from '../components/index.mjs';
import * as L from '../layouts/index.mjs';

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
