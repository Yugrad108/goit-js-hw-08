const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//**********TODO 2 VAR Улучшенная версия отимизация читабельносты кода (быстро работает) ***********/

const galleryContainer = document.querySelector('.gallery');  

// Функция для создания разметки одного элемента галереи  
const createGalleryItem = ({ preview, original, description }) => `  
    <li class="gallery-item">  
        <a class="gallery-link" href="${original}">  
            <img  
                class="gallery-image"  
                src="${preview}"  
                data-source="${original}"  
                alt="${description}"  
            />  
        </a>  
    </li>  
`;  

// Создаем всю разметку галереи  
const galleryMarkup = images.map(createGalleryItem).join('');  

// Добавляем разметку в контейнер  
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);  

// Обработчик клика на галерее  
const handleGalleryClick = (event) => {  
    event.preventDefault();  
    const target = event.target;  

    if (!target.classList.contains('gallery-image')) return;  

    const originalImageURL = target.dataset.source;  

    // Создаем модальное окно  
    const instance = basicLightbox.create(`  
        <img src="${originalImageURL}" width="800" height="600">  
    `);  

    instance.show();  
};  

// Добавляем обработчик события  
galleryContainer.addEventListener('click', handleGalleryClick);




// const galleryContainer = document.querySelector('.gallery');

// // Функция для создания разметки одного элемента галереи
// const createGalleryItem = ({ preview, original, description }) => `
//     <li class="gallery-item">
//         <a class="gallery-link" href="${original}">
//             <img
//                 class="gallery-image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//             />
//         </a>
//     </li>
// `;

// // Создаем всю разметку галереи
// const galleryMarkup = images.map(createGalleryItem).join('');

// // Добавляем разметку в контейнер
// galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// // Обработчик клика на галерее
// //
// // event - объект события, target - целевой элемент, на который был произведен клик.
// // preventDefault() - отменяет действие по умолчанию для события,
// // чтобы избежать перехода по ссылке при клике на img.
// const handleGalleryClick = (event) => {
//     event.preventDefault();
//     const target = event.target;

//     if (!target.classList.contains('gallery-image')) return;

//     const originalImageURL = target.dataset.source;

//     // Создаем модальное окно с использованием библиотеки basicLightbox.
//     // В теле модального окна будет только изображение, поэтому мы используем тег img.
//     // Атрибут src получает URL большого изображения, которое было получено из атрибута data-source.
//     // Ширина и высота изображения устанавливаются в 800 и 600 пикселей соответственно.
//     const instance = basicLightbox.create(`
//         <img src="${originalImageURL}" width="800" height="600">
//     `);

//     instance.show();   // Показываем модальное окно, вызывая метод show() у инстанса.
// };

// // Добавляем обработчик события клика на контейнер галереи.
// // addEventListener позволяет отслеживать события, такие как клики, и выполнять функцию при их возникновении.
// // В данном случае, функция-обработчик handleGalleryClick будет вызвана при клике на любом месте внутри контейнера .gallery.
// galleryContainer.addEventListener('click', handleGalleryClick);


//**********TODO 2 VAR - Укороченый код но менее читабельный (быстро работает)***********/

// const galleryContainer = document.querySelector('.gallery');  
//         const galleryMarkup = images.map(({ preview, original, description }) => {  
//             return `  
//                 <li class="gallery-item">  
//                     <a class="gallery-link" href="${original}">  
//                         <img  
//                             class="gallery-image"  
//                             src="${preview}"  
//                             data-source="${original}"  
//                             alt="${description}"  
//                         />  
//                     </a>  
//                 </li>  
//             `;  
//         }).join('');  

//         galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);  

//         galleryContainer.addEventListener('click', (event) => {  
//             event.preventDefault();  
//             const isGalleryImage = event.target.classList.contains('gallery-image');  

//             if (!isGalleryImage) return;  

//             const originalImageURL = event.target.dataset.source;  

//             const instance = basicLightbox.create(`  
//                 <img src="${originalImageURL}" width="800" height="600">  
//             `);  

//             instance.show();  
//         });  






//============================1==========================/
//         // Получаем ссылку на элемент <ul class="gallery">,
//         // куда будем добавлять элементы галереи.

        // const galleryContainer = document.querySelector('.gallery');

//============================2==========================/

//             // Создаем строку HTML для каждого изображения.
// const galleryMarkup = images.map(({ preview, original, description }) => {
//             return `
//                 <li class="gallery-item">
//                     <a class="gallery-link" href="${original}">
//                         <img
//                             class="gallery-image"
//                             src="${preview}"
//                             data-source="${original}"
//                             alt="${description}"
//                         />
//                     </a>
//                 </li>
//             `;
//         }).join(''); // Метод join('') объединяет все элементы массива в одну строку без разделителей.


// /*      - Используем метод map для преобразования массива images в массив строк HTML-разметки.
//         - Метод map перебирает каждый объект в массиве images и возвращает новый массив, где каждый элемент - строка HTML кода.
//         - Деструктуризация объекта в callback-функции map() используется для того,
//           чтобы извлечь необходимые свойства из объекта и присвоить их переменным.
//         - В вашем случае это позволяет получить свойства preview, original, и description для каждого изображения.
//         - Если  не использовать деструктуризацию, то код выглядел бы примерно так: */
        
// //         const galleryMarkup = images.map(image => {
// //     return `
// //         <li class="gallery-item">
// //             <a class="gallery-link" href="${image.original}">
// //                 <img
// //                     class="gallery-image"
// //                     src="${image.preview}"
// //                     data-source="${image.original}"
// //                     alt="${image.description}"
// //                 />
// //             </a>
// //         </li>
// //     `;
// // }).join('');

/* Преимущества деструктуризации****
   - Читаемость: Деструктуризация делает код более читаемым, так как явно указывает, какие свойства объекта используются.
   - Удобство: Это более удобный способ присвоения свойств объекта переменным, чем обращение к ним через точку
   - (image.preview, image.original, image.description).
   - Гибкость: Если структура объекта изменится, деструктуризация позволяет легко адаптироваться к этим изменениям.
   -***Когда можно обойтись без деструктуризации****
   - Если вы работаете с простыми объектами и не хотите создавать дополнительные переменные,
   - то можно обойтись без деструктуризации. Однако в большинстве случаев деструктуризация делает код более понятным
   - и удобным для поддержки. */

//============================3==========================/


// // Вставляем созданную HTML-разметку внутрь контейнера <ul class="gallery">
        
//  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

      /* Метод insertAdjacentHTML позволяет добавить HTML код в указанное место относительно элемента.

      'beforebegin': до самого element (до открывающего тега).
      'afterbegin': сразу после открывающего тега element (перед первым потомком).
      'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
      'afterend': после element (после закрывающего тега).

      Наглядное отображение параметра position
      <!-- beforebegin -->
      <p>
      <!-- afterbegin -->
      foo
      <!-- beforeend -->
      </p>
      <!-- afterend --> */

//============================4==========================/
// Добавляем обработчик события клика на контейнер галереи.


        // galleryContainer.addEventListener('click', (event) => { ... }); — добавляет обработчик события 'click'.
        // addEventListener позволяет отслеживать события, такие как клики, и выполнять функцию при их возникновении.

        // galleryContainer.addEventListener('click', (event) => {

        //     // предотвращает стандартное поведение браузера, чтобы избежать перехода по ссылке.
            // event.preventDefault();

        //     // Проверяем, был ли клик сделан именно на изображении, проверяя наличие класса 'gallery-image'.
            // const isGalleryImage = event.target.classList.contains('gallery-image');
 
        //     // Если клик не на изображении, выходим из функции.
            // if (!isGalleryImage) return;

         
        //     // Если да то, Получаем URL большого изображения из атрибута data-source элемента img.
            // const originalImageURL = event.target.dataset.source;

        //     // Создаем модальное окно с использованием библиотеки basicLightbox.
            // const instance = basicLightbox.create(`
                // <img src="${originalImageURL}" width="800" height="600">
            // `);

        //     // Показываем модальное окно, вызывая метод show() у инстанса.
            // instance.show();
        // });


          
          
//**********TODO 3 VAR -  Добавление ленивой загрузки изображений (тормозит при загрузке) ***********/

/* Что улучшено:

1.Ленивая загрузка изображений:

* Используется атрибут data-src для хранения URL изображения.
* Изображения загружаются только тогда, когда они появляются в области видимости пользователя.

2.Функция lazyLoadImages:

* Проверяет, находится ли изображение в области видимости, и загружает его, если это так.

3.Обработчики событий load и scroll:

* Ленивая загрузка срабатывает при загрузке страницы и при прокрутке. */



// const galleryContainer = document.querySelector('.gallery');  

// // Функция для создания разметки одного элемента галереи  
// const createGalleryItem = ({ preview, original, description }) => `  
//     <li class="gallery-item">  
//         <a class="gallery-link" href="${original}">  
//             <img  
//                 class="gallery-image"  
//                 src="placeholder.jpg" // Заглушка для ленивой загрузки  
//                 data-src="${preview}" // Атрибут для ленивой загрузки  
//                 data-source="${original}"  
//                 alt="${description}"  
//             />  
//         </a>  
//     </li>  
// `;  

// // Создаем всю разметку галереи  
// const galleryMarkup = images.map(createGalleryItem).join('');  

// // Добавляем разметку в контейнер  
// galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);  

// // Функция для ленивой загрузки изображений  
// const lazyLoadImages = () => {  
//     const images = document.querySelectorAll('.gallery-image[data-src]');  
//     images.forEach((img) => {  
//         if (img.getBoundingClientRect().top < window.innerHeight) {  
//             img.src = img.dataset.src;  
//             img.removeAttribute('data-src');  
//         }  
//     });  
// };  

// // Обработчик клика на галерее  
// const handleGalleryClick = (event) => {  
//     event.preventDefault();  
//     const target = event.target;  

//     if (!target.classList.contains('gallery-image')) return;  

//     const originalImageURL = target.dataset.source;  

//     // Создаем модальное окно  
//     const instance = basicLightbox.create(`  
//         <img src="${originalImageURL}" width="800" height="600">  
//     `);  

//     instance.show();  
// };  

// // Добавляем обработчик события  
// galleryContainer.addEventListener('click', handleGalleryClick);  

// // Ленивая загрузка при загрузке страницы и прокрутке  
// window.addEventListener('load', lazyLoadImages);  
// window.addEventListener('scroll', lazyLoadImages);


//**********TODO 4 VAR -  Добавление ленивой загрузки изображений (тормозит при загрузке) ***********/

/* Что улучшено:
1. Использование Intersection Observer:

* Более современный и эффективный способ реализации ленивой загрузки.
* Изображения загружаются только тогда, когда они появляются в области видимости.

2. Удаление наблюдателя после загрузки:

* После загрузки изображения наблюдатель (observer) перестает отслеживать этот элемент, что улучшает производительность. */


// const galleryContainer = document.querySelector('.gallery');  

// // Функция для создания разметки одного элемента галереи  
// const createGalleryItem = ({ preview, original, description }) => `  
//     <li class="gallery-item">  
//         <a class="gallery-link" href="${original}">  
//             <img  
//                 class="gallery-image"  
//                 src="placeholder.jpg" // Заглушка для ленивой загрузки  
//                 data-src="${preview}" // Атрибут для ленивой загрузки  
//                 data-source="${original}"  
//                 alt="${description}"  
//             />  
//         </a>  
//     </li>  
// `;  

// // Создаем всю разметку галереи  
// const galleryMarkup = images.map(createGalleryItem).join('');  

// // Добавляем разметку в контейнер  
// galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);  

// // Функция для ленивой загрузки изображений с использованием Intersection Observer  
// const lazyLoadImages = () => {  
//     const images = document.querySelectorAll('.gallery-image[data-src]');  
//     const observer = new IntersectionObserver((entries) => {  
//         entries.forEach((entry) => {  
//             if (entry.isIntersecting) {  
//                 const img = entry.target;  
//                 img.src = img.dataset.src;  
//                 img.removeAttribute('data-src');  
//                 observer.unobserve(img);  
//             }  
//         });  
//     });  

//     images.forEach((img) => observer.observe(img));  
// };  

// // Обработчик клика на галерее  
// const handleGalleryClick = (event) => {  
//     event.preventDefault();  
//     const target = event.target;  

//     if (!target.classList.contains('gallery-image')) return;  

//     const originalImageURL = target.dataset.source;  

//     // Создаем модальное окно  
//     const instance = basicLightbox.create(`  
//         <img src="${originalImageURL}" width="800" height="600">  
//     `);  

//     instance.show();  
// };  

// // Добавляем обработчик события  
// galleryContainer.addEventListener('click', handleGalleryClick);  

// // Ленивая загрузка при загрузке страницы  
// window.addEventListener('load', lazyLoadImages);