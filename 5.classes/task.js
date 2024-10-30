// Задача 1. Печатное издание
class PrintEditionItem{
  constructor(name, releaseDate, pagesCount, state = 100) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this._state = state;
    this.type = null;
  }
  
  fix(){
    this._state = this._state * 1.5;
    this.state = this._state;
  }
  
  set state(newState){
    if(newState < 0){
      this._state = 0;
    }
    else if(newState > 100){
      this._state = 100;
    }
    else{
      this._state = newState;
    }
  } 
  
  get state(){
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state, author);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state, author);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state, author);
    this.type = "detective";
  }
}

// Задача 2. Библиотека
class Library{
  constructor(name){
    this.name = name;
    this.books = [];
  }
  
  addBook(book){
    if(book.state > 30){
      this.books.push(book);
    }
  }
  
  findBookBy(type, value){
    let find = this.books.find(book => book[type] === value);
    if (find === undefined) {
       return null;
    }
    else{
      return find;
    }
  }
  
  giveBookByName(bookName){
    let findBook = this.findBookBy("name", bookName);
    if(findBook !== null) {
      this.books = this.books.filter(book => book.name !== bookName);
    }
    return findBook;
  }  
}

//Задача 3. Журнал успеваемости 
class Student {
  constructor(nameUser){
    this.nameUser = nameUser;
    this.subjectMarks = {}; 
  }

  addMark(mark, nameSubject) {
    if(mark >= 2 && mark <= 5) {
      if(this.subjectMarks[nameSubject] === undefined){
        Object.assign(this.subjectMarks, {[nameSubject]:[]});          
      }
      this.subjectMarks[nameSubject].push(mark);
    }
  }

  getAverageBySubject(nameSubject) {
    if(this.subjectMarks[nameSubject] === undefined){
      return 0;
    }
    return this.subjectMarks[nameSubject].reduce((accumulator, currentValue, index, arr) => accumulator + currentValue/arr.length, 0);
  }

  getAverage() {
    return +(Object.keys(this.subjectMarks).reduce((accumulator, currentValue, index, arr) => accumulator + this.getAverageBySubject(currentValue)/arr.length, 0).toFixed(3));
  }
}