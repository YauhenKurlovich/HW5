function Book(title, description, publisher, author, yearOfPublishing) {
    this.title = title;
    this.description = description;
    this.publisher = publisher;
    this.author = author;
    this.yearOfPublishing = yearOfPublishing;

    this.setTitle = function (value) {
        this.title = value;
    }

    this.setDescription = function (value) {
        this.description = value;
    }

    this.setPublisher = function (value) {
        this.publisher = value;
    }

    this.setAuthor = function (value) {
        this.author = value;
    }

    this.setYear = function (value) {
        this.yearOfPublishing = value;
    }

    this.getTitle = function () {
        return this.title;
    }

    this.getDescription = function () {
        return this.description;
    }

    this.getPublisher = function () {
        return this.publisher;
    }

    this.getAuthor = function () {
        return this.author;
    }

    this.getYearPublishing = function () {
        return this.yearOfPublishing;
    }

    this.toString = function () {
        return this.title + " " + this.description + " " + this.publisher + " " + this.author + " " +
        this.yearOfPublishing;
    }
}


var book1 = new Book('Billy Milligan', 'Book about Billy', 'Publish Organization', 'Daniel Keez', 1981);
var book2 = new Book('qwe', 'asd', 'zxc', 'rty', 2019);
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


function AudioBook(format, size) {
    Book.call(this);
    this.format = format;
    this.size = size;

    this.setFormat = function (value) {
        this.format = value;
    }

    this.getFormat = function () {
        return this.format;
    }

    this.setSize = function (value) {
        this.size = value;
    }

    this.getSize = function () {
        return this.size;
    }

    this.toString = function () {
        return this.title + "  " + this.description + " " + this.author + " " + this.publisher + " " +
        this.yearOfPublishing + "  " + this.format +  "  " + this.size ;
    }

}

var audio1 = new AudioBook('DVD', 211);
console.log(audio1.getFormat());
console.log(audio1.getSize());
audio1.title = "audioTitle";
audio1.description = "descr";
audio1.publisher = "publ";
audio1.author = "auth";
audio1.yearOfPublishing = 1924;
console.log(audio1.toString());
audio1.setFormat('CD');
audio1.setSize(323);
console.log(audio1.toString());


function TextBook(numberPages, bookBinding) {
    Book.call(this);
    this.numberPages = numberPages;
    this.bookBinding = bookBinding;

    this.setNumberPages = function (value) {
        this.numberPages = value;
    }

    this.getNumberPages = function () {
        return this.numberPages;
    }

    this.setBookBinding = function (value) {
        this.bookBinding = value;
    }

    this.getBookBinding = function () {
        return this.bookBinding;
    }

    this.toString = function () {
        return this.title + "  " + this.description + " " + this.author + " " + this.publisher + " " +
        this.yearOfPublishing + "  " + this.numberPages +  "  " + this.bookBinding ;
    }
}

var text1 = new TextBook(100, "high");
text1.title = "textTitle";
text1.description = "text descr";
text1.publisher = "text publ";
text1.author = "text auth";
text1.yearOfPublishing = 2001;

console.log(text1.toString());

text1.setBookBinding("light");
text1.setNumberPages(123);

console.log(text1.toString());