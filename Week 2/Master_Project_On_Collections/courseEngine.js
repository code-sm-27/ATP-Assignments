const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// 1. Get published courses
export function getPublishedCourses() {
    let published = courses.filter((c) => c.published === true);
    return published;
}

// 2. Sort courses by price (high -> low)
export function sortByPrice() {
    // Creating a copy so we don't sort the original array
    let coursesCopy = [...courses]; 
    let sorted = coursesCopy.sort((a, b) => b.price - a.price);
    return sorted;
}

// 3. Extract { title, price } only
export function extractTitleAndPrice() {
    let data = courses.map((course) => {
        return {
            title: course.title,
            price: course.price
        };
    });
    return data;
}

// 4. Calculate total value of published courses
export function getTotalValue() {
    let published = getPublishedCourses();
    let total = published.reduce((acc, course) => acc + course.price, 0);
    return total;
}

// 5. Add a new course immutably
export function addCourse(id, title, price, published) {
    let newCourse = { id, title, price, published };
    let updatedList = [...courses, newCourse];
    return updatedList;
}