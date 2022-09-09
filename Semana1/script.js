/* Título;
 * Sinopse;
 * Duração em minutos;
 * Ano de Lançamento;
 * Gênero (terror, suspense, ação, comédia etc);
 * É um remake? */

// Books

const thrillerNovel = "The Silent Patient";
const author = "Alex Michaelides";
const releaseYear = 2019;
const printPages = 336;
const bestSellerBook = true;
const womemWriter = false;
const bookStyle = ["mystery", "suspense", "thriller"];

console.log(
  "The book's name is",
  thrillerNovel.toUpperCase(),
  ". The author is",
  author,
  ". The release Year is",
  releaseYear,
  ". The print length is",
  printPages,
  ". Is the book a best seller?",
  bestSellerBook,
  ". The book style is",
  bookStyle
);

const thrillerNovel2 = "The Trusted";
const author2 = "Michelle Medhat";
const releaseYear2 = 2019;
const printPages2 = 307;
const bestSellerBook2 = false;
const womemWriter2 = true;
const bookStyle2 = ["Series", "Espionage Thriller", "Political Criminals"];

console.log(
  "The book's name is",
  thrillerNovel2.toUpperCase(),
  ". The author is",
  author2,
  ". The release year is",
  releaseYear2,
  ". The print length is",
  printPages2,
  ". Is the book a best seller?",
  bestSellerBook2,
  "The book style is",
  bookStyle2
);

const thrillerNovel3 = "Then She Was Gone";
const author3 = "Lisa Jewell";
const releaseYear3 = 2018;
const printPages3 = 384;
const bestSellerBook3 = true;
const womemWriter3 = true;
const bookStyle3 = ["Novel", "Psychological Thriller", "Family Drama"];

console.log(
  "The book's name is",
  thrillerNovel3.toUpperCase(),
  ". The author is",
  author3,
  ". The release year is",
  releaseYear3,
  ". The print length is",
  printPages3,
  "Is the book a best seller?",
  bestSellerBook3,
  "The book style is",
  bookStyle3
);

const bookLengthAverage = (printPages + printPages2 + printPages3) / 3;
console.log("The average book length is", bookLengthAverage);

const areAllBestSeller = bestSellerBook && bestSellerBook2 && bestSellerBook3;
console.log("Are all books a best seller?", areAllBestSeller);
