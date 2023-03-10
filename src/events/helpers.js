/**
 * Shorthand for document.querySelector
 * @param {string} selector
 * @return {Element}
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Shorthand for document.querySelectorAll
 * @param {string} selector
 * @return {NodeLists<Element>}
 */
export const qs = (selector) => document.querySelectorAll(selector);

export const setActiveNav = (page = '') => {
  const navs = qs('.nav-link');

  Array.from(navs).forEach((element) =>
    element.getAttribute('data-target-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active'),
  );
};

export const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(null, ...args);
    }, wait);
  };
};
