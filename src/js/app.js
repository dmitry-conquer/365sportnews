// eslint-disable-next-line import/extensions
import { useDynamicAdapt } from './modules/dynamicAdapt.js';
// import "./modules/sliders.js";
// import "./modules/imask.js";
// import "./modules/tabs.js";

// eslint-disable-next-line import/extensions
import './modules/header.js';

// eslint-disable-next-line import/extensions
import './modules/search-form.js';
// // import "./modules/load-more.js";
// import "./modules/scroll.js";
// import "./modules/spoiler.js";
// import "./modules/custom-blanket-form.js";
// import "./modules/dropdown.js";
// import MicroModal from "micromodal";

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
