
function provjeriPodatke() {

	// Provjera imena.
	
	//provjeravam ime
	var ime = forma.ime;

	if(ime.value.length == '') {
		alert('Niste upisali ime!');
		ime.style.backgroundColor = "#ff9933";
		ime.focus();
		return false;
	}
	
	//mora imati minimalno tri znaka napisana
	if(ime.value.length < 3) {
		alert('Ime mora sadrzavati min. 3 znaka!');
		ime.style.backgroundColor = "#ff9933";
		ime.focus();
		return false;
	}

	//mora imati manje od 25 znakova
	if(ime.value.length > 25){
		alert('Ime mora sadrzavati maksimalno 25 znakova!');
		ime.style.backgroundColor = "#ff9933";
		ime.focus();
		return false;
	}


	//provjeravam ako je prvo slovo imena malo, a ostala velika
	var veliko=false;

	for(var s1=1; s1<ime.length; s1++){
		if(ime.value.charAt(s1) == ime.value.charAt(s1).toUpperCase()){
			veliko = true;
			break;
		}
	}
	
	//provjeravam da li je prvo slovo veliko i da li negdje u nazivu postoje
	//velika slova
	var prvo_sl = ime.value.charAt(0);

	if(prvo_sl == prvo_sl.toLowerCase() && veliko == true) {
		alert('Nedopušten format imena!');
		ime.style.backgroundColor ="#ff9933";
		ime.focus();
		return false;
	}

	//provjeravam da li sam zapoceo ime sa velikim slovom
	if(prvo_sl == prvo_sl.toLowerCase()) {
		alert('Ime ste zapoceli sa malim slovom!');
		ime.style.backgroundColor = "#ff9933";
		ime.focus();
		return false;
	}
	
	
	// Provjera prezimena.
	
	//provjeravam prezime
	var prezime = forma.prezime;

	if(prezime.value.length == '') {
		alert('Niste upisali prezime!');
		prezime.style.backgroundColor = "#ff9933";
		document.getElementById("prezime").select();
		prezime.focus();
		return false;
	}
	
	//mora imati minimalno tri znaka napisana
	if(prezime.value.length < 3) {
		alert('Prezime mora sadrzavati min. 3 znaka!');
		prezime.style.backgroundColor = "#ff9933";
		prezime.focus();
		return false;
	}

	//mora imati manje od 25 znakova
	if(prezime.value.length > 25){
		alert('Prezime mora sadrzavati maksimalno 25 znakova!');
		prezime.style.backgroundColor = "#ff9933";
		prezime.focus();
		return false;
	}


	//provjeravam ako je prvo slovo imena malo, a ostala velika
	var veliko=false;

	for(var s1=1; s1<prezime.length; s1++){
		if(prezime.value.charAt(s1) == prezime.value.charAt(s1).toUpperCase()){
			veliko = true;
			break;
		}
	}
	
	//provjeravam da li je prvo slovo veliko i da li negdje u nazivu postoje
	//velika slova
	var prvo_sl = prezime.value.charAt(0);

	if(prvo_sl == prvo_sl.toLowerCase() && veliko == true) {
		alert('Nedopušten format prezimena!');
		prezime.style.backgroundColor ="#ff9933";
		prezime.focus();
		return false;
	}

	//provjeravam da li sam zapoceo ime sa velikim slovom
	if(prvo_sl == prvo_sl.toLowerCase()) {
		alert('Prezime ste zapoceli sa malim slovom!');
		prezime.style.backgroundColor = "#ff9933";
		prezime.focus();
		return false;
	}
	
	return true;
}
