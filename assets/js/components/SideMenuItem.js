export const SideMenuItem = ({
  post
}) => {
  return `
    <a class="c-side-menu-item"
      href="#"
      onclick="app.navigateContent('${post.path}')"
    >
      <div class="c-side-menu-item__content">
        <span class="c-side-menu-item__date">
          ${post.createdAt}
        </span>
        <span class="c-side-menu-item__title">
          ${post.title}
        </span>
        <span class="c-side-menu-item__tags">
          <i uk-icon="tag"></i>
          ${post.tags.map((tag, i) => `
          <span>
            ${tag}
          </span>
          `).join("")}
        </span>
      </div>
    </a>
  `;
}
