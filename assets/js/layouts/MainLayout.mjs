export const MainLayout = ({
  top,
  side,
  content,
}) => {
  return `
    <div class="l-main">
      <div class="l-main__top">
        ${top}
      </div>
      <div class="l-main__body">
        <aside class="l-main__side">
          ${side}
        </aside>
        <main class="l-main__content">
          ${content}
        </main>
      </div>
    </div>
  `;
};
