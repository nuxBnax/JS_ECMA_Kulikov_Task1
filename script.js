
const arr = [1,5,7,9];
console.log(Math.min(...arr));


function createCounter() {
	const obj = {increment, decrement};
	function increment(counter) {
		return counter = counter + 1;
	};
	function decrement(counter) {
		return counter = conter - 1;
	};
	return obj;
}

const incrementFn = createCounter();
console.log(incrementFn.increment(5));

const rootElement = document.getElementById('root');

console.log(rootElement);

// const myEl = document.querySelector('.my-class');
// console.log(myEl.children[0].className);

// function findelementByClass(rootElement, findClass) {
// 	if (rootElement.className === findClass) {
// 		return rootElement;
// 	} else {
// 		console.log(rootElement.children[0]);
// 		return findElementByClass(rootElement.children[0], findClass);
		
// 	}
// }
// const findClass = 'my-class';
// const targetElement = findelementByClass(rootElement, findClass);

// console.log(targetElement);