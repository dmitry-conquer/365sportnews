const url = '/wp-admin/admin-ajax.php';

const loadMoreButton = document.getElementById("load-more-comments");
let loadingPostsText;
let loadMoreText;

if (loadMoreButton) {
   const {loading, text, postId} = loadMoreButton.dataset;
   loadingPostsText = loading;
   loadMoreText = text;
   const container = document.getElementById(loadMoreButton.dataset.containerId);
     loadMoreButton.addEventListener("click", () => {
       loadMore(container, postId);
     });
 }
 
let page = 1;
function renderTemplate(data, container) {
  const template = data.map(comment => 
       `
    <li class="flex items-start gap-3">
       <div class="avatar-wrapper">
        ${comment.avatar}
       </div>
       <div>
         <div class="flex items-end gap-x-2">
           <p class="font-bold text-white">${comment.author}</p>
           <p class="text-sm text-white/70">${comment.date}</p>
         </div>
         <p>${comment.content}</p>
       </div>
     </li>
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

function hideLoadMoreButton(totalComments, container) {
   const currentCommentsCount = container.childElementCount;
   if (parseInt(currentCommentsCount, 10) === parseInt(totalComments, 10)) {
      loadMoreButton.style.display = 'none';
   }
 }

function loadMore(container, postId) {
   page += 1;
   loadMoreButton.innerText = loadingPostsText;
     const data = {
        action: 'load_more_comments',
        page,
        postId
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
      renderTemplate(fetchData.response, container);
      hideLoadMoreButton(fetchData.total, container);
     })
     .catch(error => {
      showFetchError(error, container);
     });
  }


