// Simple example

// declaring a variable response = fetching from the API
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

// assigning a variable and turning the response into a json
const json = await response.json();

// logging the json
console.log(json);

// we need a await as a async operation
// it can take time, so we need to wait for it.
