const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

let sum = 0;

items.forEach(() => {
    sum += 1;
});

console.dir(`Number of categories: ${sum}`);


items.forEach((item) => {
    const header = item.querySelector('h2').textContent;
    const elCount = item.querySelectorAll('li').length;
    console.dir(`Category: ${header}`);
    console.dir(`Elements: ${elCount}`);
});
