import * as C from '/assets/js/components/index.mjs';
import * as L from '/assets/js/layouts/index.mjs';

const MainPage = () => {
  return `
    ${L.MainLayout({
      top: C.TopNav(),
      side: C.SideMenu(),
      content: C.Content(),
    })}
    ${C.Overlay()}
  `;
};

export default MainPage;
