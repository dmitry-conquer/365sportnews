const url = "/wp-admin/admin-ajax.php";

const loadMoreButton = document.getElementById("load-more-comments");
const commentsContainer = document.getElementById("comments-container");
const commentsData = document.getElementById("comments-data");
let loadingPostsText;
let loadMoreText;
let commentsList;
let page = 0;
let totalComments;
let commentsPerPage;

if (commentsContainer && loadMoreButton && commentsData) {
   const { loading, text } = loadMoreButton.dataset;
   const {postId, perPage} = commentsData.dataset;
   commentsPerPage = perPage;
   loadingPostsText = loading;
   loadMoreText = text;
   getComments(postId);
   loadMoreButton.addEventListener("click", renderTemplate);
}

function getComments(postId) {
   loadMoreButton.innerText = loadingPostsText;
   const data = {
      action: "load_more_comments",
      postId,
   };
   const params = new URLSearchParams(data);
   fetch(url, {
      method: "POST",
      headers: {
         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: params,
   })
      .then((response) => response.json())
      .then((fetchData) => {
         commentsList = sortCommentsByLength(fetchData.response);
         totalComments = fetchData.total;
         renderTemplate();
      })
      .catch((error) => {
         showFetchError(error, container);
      });
}

function sortCommentsByLength(rawComments) {
   return rawComments.sort((a, b) => {
      return b.content.length - a.content.length;
   });
}

function renderTemplate() {
   page++;
   const slicedCommentsList = commentsList.slice((page - 1) * commentsPerPage, commentsPerPage * page);
   const template = slicedCommentsList
      .map(
         (comment) =>
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
      )
      .join("");
   commentsContainer.insertAdjacentHTML("beforeend", template);
   loadMoreButton.innerText = loadMoreText;
   hideLoadMoreButton();
}

function showFetchError(error) {
   loadMoreButton.innerText = loadMoreText;
   const errorMessage = "Load error";
   container.insertAdjacentHTML(`<p>${errorMessage}</p>`, error);
}

function hideLoadMoreButton() {
   const currentCommentsCount = commentsContainer.childElementCount;
   if (parseInt(currentCommentsCount, 10) === parseInt(totalComments, 10)) {
      loadMoreButton.style.display = "none";
   }
}
