// eslint-disable-next-line import/extensions
import { useDynamicAdapt } from './modules/dynamicAdapt.js';

// eslint-disable-next-line import/extensions
import './modules/header.js';

// eslint-disable-next-line import/extensions
import './modules/search-form.js';

// eslint-disable-next-line import/extensions
import "./modules/sliders.js";

// eslint-disable-next-line import/extensions
import "./modules/read-more.js";

// eslint-disable-next-line import/extensions
import "./modules/scroll.js";

// eslint-disable-next-line import/extensions
import "./modules/copy-text.js";

function app() {
  useDynamicAdapt('max');

/**
 * Prevent link target
 */
const preventLinks = document.querySelectorAll(".prevent-link");
preventLinks.forEach(link => {
  if (link) {
    link.addEventListener("click", e => e.preventDefault())
  }
});
}
document.addEventListener('DOMContentLoaded', app);
