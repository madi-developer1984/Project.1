document.addEventListener("DOMContentLoaded", function () {
    // Восстановить порядок книг
    const booksContainer = document.querySelector('.books');
    const books = Array.from(booksContainer.querySelectorAll('.book'));
    books.sort((a, b) => {
        const aTitle = a.querySelector('h2').textContent;
        const bTitle = b.querySelector('h2').textContent;
        return aTitle.localeCompare(bTitle);
    });
    books.forEach(book => booksContainer.appendChild(book));

    // Заменить картинку заднего фона
    document.body.style.backgroundImage = 'url("image/open_book.jpg")';

    // Исправить заголовок в книге 3
    const book3Title = document.querySelector('.book:nth-child(4) h2 a');
    if (book3Title) {
        book3Title.textContent = "Книга 3. this и Прототипы Объектов";
    }

    // Удалить рекламу со страницы
    const advElement = document.querySelector('.adv');
    if (advElement) {
        advElement.remove();
    }

    // Восстановить порядок глав во второй и пятой книге
    const reorderChapters = (bookIndex) => {
        const book = document.querySelector(`.book:nth-child(${bookIndex})`);
        const chaptersContainer = book.querySelector('ul');
        const chapters = Array.from(chaptersContainer.children);
        chapters.sort((a, b,) => {
            const aText = a.textContent.trim();
            const bText = b.textContent.trim();
            return aText.localeCompare(bText, undefined, { numeric: true });
        });
        chapters.forEach(chapter => chaptersContainer.appendChild(chapter));
    };

    reorderChapters(2);
    reorderChapters(5);

    // В шестой книге добавить главу “Глава 8: За пределами ES6”
    const book6Chapters = document.querySelector('.book:nth-child(6) ul');
    if (book6Chapters) {
        const newChapter = document.createElement('li');
        newChapter.textContent = 'Глава 8: За пределами ES6';
        book6Chapters.appendChild(newChapter);
    }
});
