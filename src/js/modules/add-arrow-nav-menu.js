const itemsWithChildren = document.querySelectorAll(".menu-item-has-children");

itemsWithChildren.forEach(item => {
    const arrow = document.createElement("img");
    arrow.src = `https://news365sport.com/wp-content/uploads/2024/01/simple-arrow.svg`;
    arrow.classList.add("peer", "-m-2", "-mt-1", "rotate-180", "p-2", "transition-transform", "duration-300", "group-hover:rotate-0");
    const subMenu = item.querySelector("ul");
    item.insertBefore(arrow, subMenu);
});
