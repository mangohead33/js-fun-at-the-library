

module.exports = {
  createLibrary: (name) => {
    return {
      name: name,
      shelves: {
        fantasy:[],
        fiction:[],
        nonFiction:[],
      }
    }
  },
  addBook: (library, book, genre) => {
    library.shelves[book.genre].push(book);
  },
  checkoutBook: (library, book, genre) => {
    let shelf = library.shelves[genre];
    for (let i = 0; i < shelf.length; i++) {
      if (shelf[i].title === book) {
        shelf.splice(i,1);
        return `You have now checked out ${book} from the ${library.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`

  }
};