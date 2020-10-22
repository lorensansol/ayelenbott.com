// TOGGLE BUTTON UP
function btnUp(option){
	 const btn = document.querySelector('.btn-up').classList
	 option == 'add' ? btn.add('btn-up-hide') : btn.remove('btn-up-hide')
}
scrollShot(
	'0px',
	'0px',
	'.btn-up-aux',
	() => { btnUp('add'); },
	() => { if(scrollY <= document.querySelector('.btn-up-aux').scrollHeight - 50){ btnUp(); } },
	() => { btnUp(); }
);