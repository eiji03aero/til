import { css } from '../modules/emotion.mjs';

export const SideMenuItem = ({ post }) => {
  return `
    <a
      data-elementname="SideMenuItem"
      class="${Styles.container}"
      href="#"
      onclick="app.navigateContent('${post.path}')"
    >
      <div class="${Styles.content}">
        <span class="${Styles.date}">
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
    padding: 0.5rem 0;
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
    font-size: 0.75rem;
    color: #5a5a5a;
  `,
  title: css`
    margin-bottom: 0.25rem;
    font-size: 1rem;
    color: var(--pallete-blue-base);
  `,
  tags: css`
    display: flex;
    align-items: center;
    color: var(--pallete-gs-black-light2);
    font-size: 0.75rem;

    & > * {
      margin-right: 0.25rem;
    }
  `,
  tag: css`
    border: 1px solid var(--pallete-gs-grey-dark1);
    border-radius: 0.125rem;
    padding: 0px 0.125rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  `,
};
