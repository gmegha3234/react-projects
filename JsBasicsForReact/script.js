//array of books
const data = [
    {
    id: 1,
    title: "Lord of the Rings",
        publicationDate: "1954-07-29",
        genres: [
        "fantasy","novels"
        ],
        translations: {
            "english": "yes",
            "hindi":"no"
        },
        reviews: {
            goodreads: {
                rating: 4.2,
                ratingCount: 789034,
                reviewCount:134563

            },
            libraryThing:{
                rating: 4.7,
                ratingCount: 789934,
                reviewCount:134883
            }
        }
 
    },
    {
    id: 2,
        title: "Harry Porter",
        publicationDate: "1956-07-03",
        genres: [
        "fantasy","novels","fiction","Fairy Tale","Fiction in Verse"
        ],
        translations: {
            "english": "yes",
            "hindi":"yes"
        },
        reviews: {
            goodreads: {
                rating: 4.4,
                ratingCount: 787734,
                reviewCount:234563

            },
            libraryThing:{
                rating: 5.0,
                ratingCount: 789334,
                reviewCount:234883
            }
        }
 
    }
];

function getBooks() {
    return data;
}
function getBook(id) {
    return data.find((book) => book.id == id);
    //Here find search first element in array based on the function condition
}
//Destructuring 
const books = getBooks();
const book = getBook(2);
//Object destructuring
const { title, publicationDate, genres } = book;
//console.log(title, publicationDate, genres);
//Array destructuring
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

//rest operator
const [primaryGenre, secondaryGenre,...otherGenre] = genres;
//console.log(primaryGenre, secondaryGenre);
// console.log(otherGenre);

//spread operator
const newGenres = [...genres, 'epic fantasy'];
// console.log(newGenres);

const updatedBook = {
    ...book,
    //adding a new property
    moviePublication: "2021-06-70",

    //overwriting existing property
    publicationDate: "1966-07-03"
};
// console.log(updatedBook);

//template string
const summary = `${title} is a book published on ${publicationDate.split("-")[0]}`;//split divides string based on seperator
//console.log(summary);

//ternary operator
const age = 21;
const status = age > 18 ? "Adult" : "Not an adult";
// console.log(status);

//arrow functions
const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

//short-circuit
//falsy:0,'',null,undefined
//&& search for ist falsy value to stop
// console.log(true && "Some string");//
// console.log(false && "Some string");
// !! search for ist truthy value
console.log(true || false);
const spanishTranslation = book.translations.spanish || "Not Translated";
// console.log(spanishTranslation);

const noOfCounts = 0;
// console.log(noOfCounts || 'no data');

//null coalescence(chk for null and undefined only)
const count = noOfCounts ?? "no data";
// console.log(count);//0

function getTotalReviews(book) {
  
    const a = book.reviews.goodreads.reviewCount;
    const b = book.reviews.library1Thing?.reviewCount ?? 0;//OPtional changing(?.)-if library is empty then it will not go to reviewCount and not produce error
    return a + b;
}
console.log(getTotalReviews(book));












