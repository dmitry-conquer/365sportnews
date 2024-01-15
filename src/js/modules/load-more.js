const url = '/wp-admin/admin-ajax.php';

const loadMoreButton = document.getElementById("load-more");
let loadingPostsText;
let loadMoreText;

if (loadMoreButton) {
   const {taxonomy, slug, loading, text} = loadMoreButton.dataset;
   loadingPostsText = loading;
   loadMoreText = text;
   const container = document.getElementById(loadMoreButton.dataset.containerId);
     loadMoreButton.addEventListener("click", () => {
       loadMore(container, taxonomy, slug);
     });
 }
 
let page = 1;
function renderTemplate(data, container) {
  const template = data.map(post => 
       `
   <article class="flex flex-col gap-4 max-xl:items-center max-lg:items-start md:gap-6 lg:flex-row xl:gap-[2.25rem]">
       <div class="h-[240px] w-full sm:h-full sm:w-[60%] lg:w-[40%]">
          <a href="${post.permalink}" class="group/image block h-full w-full overflow-hidden rounded-lg">
                <img loading="lazy" src="${post.image_url}" alt="${post.title}" title="${post.title}" class="block h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover/image:scale-105">
          </a>
       </div>
       <div class="flex w-full flex-col lg:w-[60%]">
          <div class="mb-4 h-full grow">
             <a href="${post.permalink}" class="transition-colors hover:text-primary">
                <h2 class="mb-3 text-xl font-bold leading-tight sm:mb-5 sm:text-[2rem]">${post.title}</h2>
             </a>
             <p class="mb-auto leading-[1.3]">${post.excerpt} </p>
          </div>
          <div class="mb-3 mt-auto flex items-center gap-4">
                <a href="${post.term_url}" class="inline-block rounded-[0.125rem] bg-gray-300/70 px-2 py-1 text-xs uppercase text-black hover:bg-gray-400/70">${post.term_name}</a>
             <p class="text-sm">${post.date}</p>
          </div>
       </div>
    </article>
       `
    ).join("");
    container.insertAdjacentHTML('beforeend', template);
    loadMoreButton.innerText = loadMoreText;
 }

 function showFetchError(error, container) {
   loadMoreButton.innerText = loadMoreText;
   const errorMessage = "Помилка завантаження новин"
   container.insertAdjacentHTML(`<p>${errorMessage}</p>`, error);
 }

function hideLoadMoreButton(currentPage, totalPages) {
   if (parseInt(currentPage, 10) === parseInt(totalPages, 10)) {
      loadMoreButton.style.display = 'none';
   }
 }

function loadMore(container, taxonomy, slug) {
   page += 1;
   loadMoreButton.innerText = loadingPostsText;
     const data = {
        action: 'load_more_posts',
        page,
        taxonomy,
        slug
     }
     const params = new URLSearchParams(data);
     fetch(url, {
        method: 'POST',
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: params
     })
     .then(response => response.json())
     .then(fetchData => {
      hideLoadMoreButton(page, fetchData.total);
      renderTemplate(fetchData.response, container);
     })
     .catch(error => {
      showFetchError(error, container);
     });
  }


