const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//Task 1 filter() only "Sci-Fi" movies
let task1 = movies.filter(i => i.genre === "Sci-Fi")
console.log(task1)

//Task 2 map() to return: "Inception (8.8)"
let task2 = movies.map(i => `${i.title} (${i.rating})`)
console.log(task2)

//Task 3 reduce() to find average movie rating
let task3 = movies.reduce((i,j) => i + j.rating, 0) / movies.length
console.log(task3)

//Task 4 find() movie "Joker"
let task4 = movies.find(i => i.title === "Joker")
console.log(task4)

//Task 5 findIndex() of "Avengers"
let task5 = movies.findIndex(i => i.title === "Avengers")
console.log(task5)