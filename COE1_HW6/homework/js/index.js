/* eslint-disable guard-for-in */
function visitLink(path) {
	let CountLink = localStorage.getItem(path);
	if (!CountLink) {
		CountLink = 0;
	}
	CountLink++;
	localStorage.setItem(path, CountLink);
}

function viewResults() {
	const linkCounts = {};
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		const value = localStorage.getItem(key);
		linkCounts[key] = value;
	}
	const resultsList = document.createElement('ul');
	resultsList.style.paddingLeft = '450px';
	for (const link in linkCounts) {
		const CountLink = linkCounts[link];
		const listItem = document.createElement('li');
		listItem.innerText = `You visted ${link} ${CountLink} time(s)`;
		resultsList.appendChild(listItem);
	}
	document.body.appendChild(resultsList);
	localStorage.clear();
}
