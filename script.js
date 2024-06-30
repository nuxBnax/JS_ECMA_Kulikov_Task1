// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));



// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter(initialValue) {
	let counter = initialValue;
	function increment(value) {
		return counter += value;
	};
	function decrement(value) {
		return counter -= value;
	};
	function self() {
		return counter;
	}
	return { increment, decrement, self };
}

const incrementFn = createCounter(6);
console.log(incrementFn.increment(5));
console.log(incrementFn.increment(3));
console.log(incrementFn.decrement(2));
console.log(incrementFn.decrement(8));
console.log(incrementFn.self());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

// const rootElement = document.getElementById('root');


function findElementByClass(rootElement, findClass) {
	if (rootElement.className === findClass) {
		console.log(rootElement, ' попало в цель');
		return rootElement;
	}
	for (let item of rootElement.children) {
		console.log(item);
		let find = findElementByClass(item, findClass);
		if (find) {
			return find;
		}
	}
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);