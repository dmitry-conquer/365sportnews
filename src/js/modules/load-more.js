const loadMoreButton = document.getElementById('load-more-button');

const data = [
  {
    title: 'Кілліан Мбаппе - найкращий гравець матчу проти Марселя',
    excerpt:
      'Ця серія була б "Легкими грошима за бакси", оскільки єдиним відповідним гравцем на Magic був би Нік Вучевич, але навіть він не може нести магію, оскільки Терренс Росс все ще розвивається.',
    date: '20 березня 2023, 14:34',
    label: 'Футбол',
    image: './img/image4.webp',
  },
  {
    title: 'Кілліан Мбаппе - найкращий гравець матчу проти Марселя',
    excerpt:
      'Ця серія була б "Легкими грошима за бакси", оскільки єдиним відповідним гравцем на Magic був би Нік Вучевич, але навіть він не може нести магію, оскільки Терренс Росс все ще розвивається.',
    date: '20 березня 2023, 14:34',
    label: 'Футбол',
    image: './img/image3.webp',
  },
  {
    title: 'Кілліан Мбаппе - найкращий гравець матчу проти Марселя',
    excerpt:
      'Ця серія була б "Легкими грошима за бакси", оскільки єдиним відповідним гравцем на Magic був би Нік Вучевич, але навіть він не може нести магію, оскільки Терренс Росс все ще розвивається.',
    date: '20 березня 2023, 14:34',
    label: 'Футбол',
    image: './img/image2.webp',
  },
  {
    title: 'Кілліан Мбаппе - найкращий гравець матчу проти Марселя',
    excerpt:
      'Ця серія була б "Легкими грошима за бакси", оскільки єдиним відповідним гравцем на Magic був би Нік Вучевич, але навіть він не може нести магію, оскільки Терренс Росс все ще розвивається.',
    date: '20 березня 2023, 14:34',
    label: 'Футбол',
    image: './img/image1.webp',
  },
];

function renderTemplate(postData, container) {
  const template = postData
    .map(
      post =>
        `
        <article class="flex flex-col gap-4 max-xl:items-center max-lg:items-start md:gap-6 lg:flex-row xl:gap-[3.25rem]">
        <div class="h-[240px] w-full sm:h-full sm:w-[60%] lg:w-[40%]">
          <a href="single.html" class="group/image block h-full w-full overflow-hidden rounded-lg">
            <img
              src="${post.image}"
              alt="${post.title}"
              class="block h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover/image:scale-105" />
          </a>
        </div>
        <div class="flex w-full flex-col lg:w-[60%]">
          <div class="mb-4 h-full grow">
            <a href="single.html" class="transition-colors hover:text-primary">
              <h2 class="mb-3 text-xl font-bold leading-tight sm:mb-5 sm:text-[2rem]">${post.title}</h2>
            </a>
            <p class="mb-auto leading-[1.3]">
            ${post.excerpt}
            </p>
          </div>
          <div class="mb-3 mt-auto flex items-center gap-4">
            <a href="#" class="inline-block rounded-[0.125rem] bg-gray-300/70 px-2 py-1 text-xs uppercase text-black hover:bg-gray-400/70"> ${post.label}</a>
            <p class="text-sm"> ${post.date}</p>
          </div>
        </div>
      </article>
   `,
    )
    .join('');
  container.insertAdjacentHTML('beforeend', template);
  loadMoreButton.innerText = 'Показати ще';
}

if (loadMoreButton) {
  const { containerId } = loadMoreButton.dataset;
  const container = document.getElementById(containerId);

  loadMoreButton.addEventListener('click', () => {
    loadMoreButton.innerText = 'Завантаження...';
    renderTemplate(data, container);
  });
}
