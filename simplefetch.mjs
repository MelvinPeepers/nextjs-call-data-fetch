// Simple example

// declaring a variable response = fetching from the API
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

// assigning a variable and turning the response into a json
const json = await response.json();

// logging the json
console.log(json);

// we need a await as a async operation
// it can take time, so we need to wait for it.

// async function getData() {
//     const res = await fetch('https://api.example.com/...')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.

//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }

//     return res.json()
//   }

//   export default async function Page() {
//     const data = await getData()

//     return <main></main>
//   }
