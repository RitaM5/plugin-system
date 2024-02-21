// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar');
const sidebar = document.getElementById('sidebar');

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})

// close

function closeSidebar() {
sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
}

// main data
function showDashboard() {
	document.getElementById('dashboard').style.display = 'block';
	document.getElementById('ecommerce').style.display = 'none';
}

function showEcommerce() {
	document.getElementById('dashboard').style.display = 'none';
	document.getElementById('ecommerce').style.display = 'block';
}
// for popup
function showPopup() {
	document.getElementById('detailsPopup').style.display = 'flex';
}

function hidePopup() {
	document.getElementById('detailsPopup').style.display = 'none';
}

var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#1775F1');

// for lock icon
const urlParams = new URLSearchParams(window.location.search);
const fromEcommerce = urlParams.get('fromEcommerce');
const iconPlaceholder = document.getElementById('iconPlaceholder');

if (fromEcommerce) {
	iconPlaceholder.textContent = 'check_circle';
} else {
	iconPlaceholder.textContent = 'lock';
}