class Attribute {
    constructor(container) {
        this.container = container;
        this.collection = container.querySelectorAll('a');
        this.book = document.getElementById('book');

        this.registerEvents(this.findActiveClassName());
    }

    registerEvents(activeClass) {
        this.collection.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.collection.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                element.classList.add(activeClass);
                this.changeAttribute(element.dataset);
            });
        })
    }

    findActiveClassName() {
        for (const element of this.collection) {
            for (const name of element.classList) {
                if (name.endsWith('_active')) {
                    return name;
                }
            }
        }
        return '';
    }

    changeAttribute(data) {
        if (this.isEmpty(data)) {
            this.book.classList.remove('book_fs-small');
            this.book.classList.remove('book_fs-big');
            return;
        }
        if ('size' in data) {
            this.book.classList.remove('book_fs-small');
            this.book.classList.remove('book_fs-big');
            switch (data['size']) {
                case 'small':
                    this.book.classList.add('book_fs-small');
                    break;
                case 'big':
                    this.book.classList.add('book_fs-big');
                    break;
                default:
                    break;
            }
        }
        else if ('textColor' in data) {
            this.book.classList.remove('book_color-gray');
            this.book.classList.remove('book_color-whitesmoke');
            this.book.classList.remove('book_color-black');
            switch (data['textColor']) {
                case 'gray':
                    this.book.classList.add('book_color-gray');
                    break;
                case 'whitesmoke':
                    this.book.classList.add('book_color-whitesmoke');
                    break;
                case 'black':
                default:
                    this.book.classList.add('book_color-black');
                    break;
            }
        }
        else if ('bgColor' in data) {
            this.book.classList.remove('book_bg-black');
            this.book.classList.remove('book_bg-gray');
            this.book.classList.remove('book_bg-white');
            switch (data['bgColor']) {
                case 'black':
                    this.book.classList.add('book_bg-black');
                    break;
                case 'gray':
                    this.book.classList.add('book_bg-gray');
                    break;
                case 'white':
                default:
                    this.book.classList.add('book_bg-white');
                    break;
            }
        }
    }

    isEmpty(obj) {
        for (let key in obj) {
            return false;
        }
        return true;
    }
}

const controls = document.querySelectorAll('.book__control');
controls.forEach(control => {
    new Attribute(control);
});