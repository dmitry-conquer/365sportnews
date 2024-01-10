const spoilerTriggers = document.querySelectorAll(".spoiler-trigger");

spoilerTriggers.forEach(trigger => {
  if (trigger) {
    const spoilerContent = trigger.nextElementSibling;
    if (spoilerContent.classList.contains("active-spoiler-content")) {
      spoilerContent.style.maxHeight = `${trigger.nextElementSibling.scrollHeight}px`;
    }
    trigger.addEventListener("click", showSpoiler);
  }
});


function showSpoiler() {
   this.classList.toggle("active-spoiler");
   const spoilerContent = this.nextElementSibling;
   spoilerContent.classList.toggle("active-spoiler-content");
   const isExpanded = spoilerContent.classList.contains("active-spoiler-content");
   spoilerContent.style.maxHeight = isExpanded ? `${spoilerContent.scrollHeight}px` : "0px";
 }
 