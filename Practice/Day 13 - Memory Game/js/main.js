const parentBox = document.querySelector('#boxParent');
const box = document.querySelectorAll('.box');

console.log(box);


const boxData = [];
const parentBoxData = [];
console.log(boxData);
console.log(parentBoxData);
function displayBox(event) {

	let target = event.target;
	let targetIconClass = event.target.childNodes[0].classList.value;

	target.classList.add('unhide');
	parentBoxData.push(target);
	boxData.push(targetIconClass);
	if(boxData.length == 2) {
		if(boxData[0] !== boxData[1]) {
			parentBoxData.forEach(function(element) {
				element.classList.remove('unhide');
			}); 
		}
		boxData.splice(0, boxData.length);
		parentBoxData.splice(0, parentBoxData.length);
	}
}
parentBox.addEventListener('click', displayBox);