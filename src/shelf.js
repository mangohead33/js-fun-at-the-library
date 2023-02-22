
module.exports = {
  shelfBook: (book, shelf) => {
    if (shelf.length < 3) shelf.unshift(book);
  },
  unshelfBook: (book, shelf) => {
    for (let i = 0; i < shelf.length; i++) {
      if (shelf[i].title === book) shelf.splice(i, 1);
    }
  },
  listTitles: (arr) => {
    let result = '';
    for (let movie of arr) {
      result += (movie.title + ', ')
    }
    return result.slice(0, result.length - 2);
  },
  searchShelf: (arrShelf, title) => {
    for (let i = 0; i < arrShelf.length; i++) {
      if (arrShelf[i].title === title) return true
    }
    return false;
  }
};