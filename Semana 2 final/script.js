const book1 = {
  thrillerNovel: "The Silent Patient",
  author: "Alex Michaelides",
  releaseYear: 2019,
  printPages: 336,
  bestSellerBook: true,
  womemWriter: false,
  bookStyle: ["mystery", "suspense", "thriller"],
};

const book2 = {
  thrillerNovel2: "The Trusted",
  author2: "Michelle Medhat",
  releaseYear2: 2019,
  printPages2: 307,
  bestSellerBook2: false,
  womemWriter2: true,
  bookStyle2: ["Series", "Espionage Thriller", "Political Criminals"],
};

const book3 = {
  thrillerNovel3: "Then She Was Gone",
  author3: "Lisa Jewell",
  releaseYear3: 2018,
  printPages3: 384,
  bestSellerBook3: true,
  womemWriter3: true,
  bookStyle3: ["Novel", "Psychological Thriller", "Family Drama"],
};

const verificacaoBook1 = book1.bestSellerBook;
console.log("Is the book a best seller?", verificacaoBook1);

const verificacaoBook2 = book2.bestSellerBook2;
console.log("Is the book a best seller?", verificacaoBook2);

const verificacaoBook3 = book3.bestSellerBook3;
console.log("Is the book a best seller?", verificacaoBook3);

let allBooks = [];
allBooks.push();
console.log(allBooks);

if (verificacaoBook1 === true) {
  allBooks.push(book1);
} else {
  alert("This book isn't a best seller, and It's not added to the list.");
}

if (verificacaoBook2 === true) {
  allBooks.push(book2);
} else {
  alert("This book isn't a best seller, and It's not added to the list.");
}

if (verificacaoBook3 === true) {
  allBooks.push(book3);
} else {
  alert("This book isn't a best seller, and It's not added to the list.");
}
