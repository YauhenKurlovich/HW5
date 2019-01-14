function Book(title, description, publisher, author, yearOfPublishing) {
    title = title;
    description = description;
    publisher = publisher;
    author = author;
    yearOfPublishing = yearOfPublishing;

    this.setTitle = function (value) {
        title = value;
    }

    this.setDescription = function (value) {
        description = value;
    }

    this.setPublisher = function (value) {
        publisher = value;
    }

    this.setAuthor = function (value) {
        author = value;
    }

    this.setYear = function (value) {
        yearOfPublishing = value;
    }

    this.getTitle = function () {
        return title;
    }

    this.getDescription = function () {
        return description;
    }

    this.getPublisher = function () {
        return publisher;
    }

    this.getAuthor = function () {
        return author;
    }

    this.getYearPublishing = function () {
        return yearOfPublishing;
    }

    this.toString = function () {
        return title + " " + description + " " + publisher + " " + author + " " + yearOfPublishing;
    }
}


var book1 = new Book('Billy Milligan', 'Book about Billy', 'Publish Organization', 'Daniel Keez', 1981);
var book2 = new Book('qwe','asd','zxc','rty',2019);
console.log(book1.toString());
console.log(book2.toString());
console.log(book1.getTitle());
console.log(book2.getTitle());
book1.setTitle('qwerty');
console.log('changed');
book2.setTitle('asdfgh');
console.log('changed');
console.log(book1.getTitle());
console.log(book2.getTitle());
console.log(book1.toString());
console.log(book2.toString());



function AudioBook() {

}

function TextBook() {

}