function createTitle() {

}

module.exports = {
  createTitle: (title) => {
    return 'The ' + title;
  },
  buildMainCharacter: (name, age, pronouns) => {
    return {
      name:name,
      age:age,
      pronouns:pronouns
    }
  },
  saveReview: (review, array) => {
    // ensure no duplicates
    if (!array.length) return array.push(review);
    for (let i = 0; i < array.length; i++) {
      if (array[i] === review) return
    }
    return array.push(review);
  },
  calculatePageCount: (title) => {
    return title.length * 20;
  },
  writeBook: (bookTitle, bookCharacter, genre) => {
    return {
      title: bookTitle,
      mainCharacter: bookCharacter,
      pageCount: bookTitle.length * 20,
      genre: genre,
    }
  },
  editBook: (book) => {
    book.pageCount *= .75
  }
}