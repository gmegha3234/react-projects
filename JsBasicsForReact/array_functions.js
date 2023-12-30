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

//array.map()- apply to every element of array and return new array
const books = getBooks();
const x1 = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x1);

const titles = books.map((book) => book.title);
// console.log(titles);

const essentials = books.map((book) => (
   {
        id: book.id,
        title: book.title
    }
));
//array.filter[filters values in array]
const longBooks = books.filter((book) => book.id == 1);
// console.log(longBooks);

const fairyTaleBooks = books.filter((book) =>
    book.genres.includes("Fairy Tale")).map((book1) => book1.title);
// console.log(fairyTaleBooks);



/**
 * map    : Array(N) -> Array(N)  (do not mutate array)
 * filter : Array(N) -> Array(M) // M <= N (do not mutate array)
 * reduce : Array -> Primitive(number, string) (do not mutate array)
 * sort : Mutates original array
 * slice: create a new copy of array
*/

// const nums = [1, 2, 3, 4, 5] // Sum = 15

// const sum = nums.reduce((acc, e) => { return acc + e }, 0)

// console.log(sum);

// const functions = [
//     (text) => text.trim(),
//     (text) => text.toUpperCase(),
//     (text) => "#" + text + "#",
// ];
// const input = "   hello    ";
// const output = functions.reduce((acc, fn) => {
//     return fn(acc);
// }, input);

// console.log(output);

const validators = [
    (text) => /[0-9]/.test(text),
    (text) => /[a-b]/.test(text),
    (text) => /[A-B]/.test(text),
];

const pwd = "abcA123";

const isValid = validators.reduce((acc, v) => !acc ? false : v(pwd), true);

// console.log(isValid);

const num = [2, 4, 6, 7, 8];
const multiplyOfNumbers = num.reduce((acc, el) => acc * el);
// console.log(multiplyOfNumbers);


const arr = [3.9, 7, 9, 2, 1];
const sortArray = arr.slice().sort((a, b) => a - b);
// console.log(sortArray);
// console.log(arr);
const desSortArray = arr.slice().sort((a, b) => b - a);
// console.log(sortArray, desSortArray);//

const newBook = {
    id: 3,
    title: "My Experience With Truth"
};
const newAddedBook = [...books, newBook];// add new book to array(new array )
// console.log(newAddedBook);

const DeletedBookArray = newAddedBook.filter((book) => book.id !== 3);//delete a book from array
// console.log(DeletedBookArray);

const updatedBookArray = DeletedBookArray.map((book) => book.id === 1 ? {...book,"pages":10} : book);//updating a book
// console.log(updatedBookArray);
