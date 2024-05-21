//create type alias
type Book = {
    title: string;
    author: string;
    publishedYear: number;

}

//create isRecentBook function
const isRecentBook = (book: Book): boolean => {
    const currentYear:number = new Date().getFullYear();
    const publishedYear:number = book.publishedYear;

    if (currentYear - publishedYear <= 5) {
        return true;
    }
    else {
        return false;
    }
}
//created object
const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};
//called function
const result:boolean = isRecentBook(book1);

console.log(result);