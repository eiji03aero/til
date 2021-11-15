import { css } from '../modules/emotion.mjs';

export const SideMenuItem = ({ post }) => {
  return `
    <a
      data-elementname="SideMenuItem"
      class="${Styles.container}"
      href="#"
      onclick="app.navigateContent('${post.path}')"
    >
      <div class="">
        <span class="${Styles.content}">
          ${post.createdAt}
        </span>
        <span class="${Styles.title}">
          ${post.title}
        </span>
        <span class="${Styles.tags}">
          <i uk-icon="tag"></i>
          ${post.tags
            .map(
              (tag) => `
            <span class="${Styles.tag}">
              ${tag}
            </span>
          `
            )
            .join('')}
        </span>
      </div>
    </a>
  `;
};

const Styles = {
  container: css`
    display: block;
    padding: 8px 0;
    border-bottom: 1px solid var(--pallete-gs-grey-light1);
    background: var(--pallete-gs-white);
    cursor: pointer;
    transition: background 250ms;

    &:hover {
      background: var(--pallete-gs-grey-light3);
      text-decoration: none;
    }
  `,
  content: css`
    display: flex;
    flex-direction: column;
  `,
  date: css`
    font-size: 12px;
    color: #5a5a5a;
  `,
  title: css`
    margin-bottom: 4px;
    font-size: 16px;
    color: var(--pallete-blue-base);
  `,
  tags: css`
    display: flex;
    align-items: center;
    color: var(--pallete-gs-black-light2);
    font-size: 12px;

    & > * {
      margin-right: 4px;
    }
  `,
  tag: css`
    border: 1px solid var(--pallete-gs-grey-dark1);
    border-radius: 2px;
    padding: 0px 2px;

    svg {
      width: 16px;
      height: 16px;
    }
  `,
};
