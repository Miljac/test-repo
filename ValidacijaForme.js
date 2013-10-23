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
        
      

	//----------------------------------------------------------------------

	  
        // Provjera prezimena.
        
        //provjeravam prezime
        var prez = forma.prez;

        if(prez.value.length == '') {
                alert('Niste upisali prezime!');
                prez.style.backgroundColor = "#ff9933";
                document.getElementById("prez").select();
                prez.focus();
                return false;
        }
        
        //mora imati minimalno tri znaka napisana
        if(prez.value.length < 3) {
                alert('Prezime mora sadrzavati min. 3 znaka!');
                prez.style.backgroundColor = "#ff9933";
                prez.focus();
                return false;
        }

        //mora imati manje od 25 znakova
        if(prez.value.length > 25){
                alert('Prezime mora sadrzavati maksimalno 25 znakova!');
                prez.style.backgroundColor = "#ff9933";
                prez.focus();
                return false;
        }


        //provjeravam ako je prvo slovo imena malo, a ostala velika
        var veliko=false;

        for(var s1=1; s1<prez.length; s1++){
                if(prez.value.charAt(s1) == prez.value.charAt(s1).toUpperCase()){
                        veliko = true;
                        break;
                }
        }
        
        //provjeravam da li je prvo slovo veliko i da li negdje u nazivu postoje
        //velika slova
        var prvo_sl = prez.value.charAt(0);

        if(prvo_sl == prvo_sl.toLowerCase() && veliko == true) {
                alert('Nedopušten format prezimena!');
                prez.style.backgroundColor ="#ff9933";
                prez.focus();
                return false;
        }

        //provjeravam da li sam zapoceo ime sa velikim slovom
        if(prvo_sl == prvo_sl.toLowerCase()) {
                alert('Prezime ste zapoceli sa malim slovom!');
                prez.style.backgroundColor = "#ff9933";
                prez.focus();
                return false;
        }
		
		
	//----------------------------------------------------------------------
		
		// Provjera specijalizacije.
        
        //provjeravam prezime
        var spec = forma.spec;

        if(spec.value.length == '') {
                alert('Niste upisali Specijalizaciju!');
                spec.style.backgroundColor = "#ff9933";
                document.getElementById("spec").select();
                spec.focus();
                return false;
        }
        
        //mora imati minimalno 10 znaka napisana
        if(spec.value.length < 10) {
                alert('Specijalizacija mora sadrzavati min. 10 znakova!');
                spec.style.backgroundColor = "#ff9933";
                spec.focus();
                return false;
        }

        //mora imati manje od 255 znakova
        if(spec.value.length > 255){
                alert('Specijalizacija mora sadrzavati maksimalno 255 znakova!');
                spec.style.backgroundColor = "#ff9933";
                spec.focus();
                return false;
        }


	//----------------------------------------------------------------------



		// Provjera titule.
        
        //provjeravam titulu
        var titula = forma.titula;

        if(titula.value.length == '') {
                alert('Niste upisali titulu!');
                titula.style.backgroundColor = "#ff9933";
                document.getElementById("titula").select();
                titula.focus();
                return false;
        }
        
        //mora imati minimalno 2 znaka napisana
        if(titula.value.length < 2) {
                alert('titula mora sadrzavati min. 2 znaka!');
                titula.style.backgroundColor = "#ff9933";
                titula.focus();
                return false;
        }

        //mora imati manje od 25 znakova
        if(titula.value.length > 25){
                alert('titula mora sadrzavati maksimalno 25 znakova!');
                titula.style.backgroundColor = "#ff9933";
                titula.focus();
                return false;
        }
		
	 
	//----------------------------------------------------------------------
	 
	 	  // Provjera email.
				
		var x = forma.email;
       	var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		  {
		  alert("Niste upisali ispravno e-mail adresu");
		  return false;
		  }
        
		
		
	//----------------------------------------------------------------------
	
	
		
		// Provjera radskupinana.
        
        //provjeravam radskupina
        var radskupina = forma.radskupina;

        if(radskupina.value.length == '') {
                alert('Niste upisali radskupina!');
                radskupina.style.backgroundColor = "#ff9933";
                radskupina.focus();
                return false;
        }
        
        //mora imati minimalno 5 znaka napisana
        if(radskupina.value.length < 5) {
                alert('radskupina mora sadrzavati min. 5 znaka!');
                radskupina.style.backgroundColor = "#ff9933";
                radskupina.focus();
                return false;
        }

        //mora imati manje od 25 znakova
        if(radskupina.value.length > 25){
                alert('radskupina mora sadrzavati maksimalno 25 znakova!');
                radskupina.style.backgroundColor = "#ff9933";
                radskupina.focus();
                return false;
        }


        //provjeravam ako je prvo slovo radskupinana malo, a ostala velika
        var veliko=false;

        for(var s1=1; s1<radskupina.length; s1++){
                if(radskupina.value.charAt(s1) == radskupina.value.charAt(s1).toUpperCase()){
                        veliko = true;
                        break;
                }
        }
        
        //provjeravam da li je prvo slovo veliko i da li negdje u nazivu postoje
        //velika slova
        var prvo_sl = radskupina.value.charAt(0);

        if(prvo_sl == prvo_sl.toLowerCase() && veliko == true) {
                alert('Nedopušten format radskupinana!');
                radskupina.style.backgroundColor ="#ff9933";
                radskupina.focus();
                return false;
        }

        //provjeravam da li sam zapoceo radskupina sa velikim slovom
        if(prvo_sl == prvo_sl.toLowerCase()) {
                alert('radskupina ste zapoceli sa malim slovom!');
                radskupina.style.backgroundColor = "#ff9933";
                radskupina.focus();
                return false;
        }
		
		
	//----------------------------------------------------------------------	
	
		
		 // Provjera zivotopis.
        
        //provjeravam prezime
        var zivotopis = forma.zivotopis;

        if(zivotopis.value.length == '') {
                alert('Niste upisali zivotopis!');
                zivotopis.style.backgroundColor = "#ff9933";
                document.getElementById("zivotopis").select();
                zivotopis.focus();
                return false;
        }
        
        //mora imati minimalno 10 znaka napisana
        if(zivotopis.value.length < 10) {
                alert('zivotopis mora sadrzavati min. 10 znakova!');
                zivotopis.style.backgroundColor = "#ff9933";
                zivotopis.focus();
                return false;
        }

        //mora imati manje od 255 znakova
        if(zivotopis.value.length > 255){
                alert('zivotopis mora sadrzavati maksimalno 255 znakova!');
                zivotopis.style.backgroundColor = "#ff9933";
                zivotopis.focus();
                return false;
        }

		
	//----------------------------------------------------------------------	
	
		 // Provjera telefon
        
        //provjeravam telefon
        var telefon = forma.telefon;

        if(telefon.value.length == '' || isNaN()) {
                alert('Niste upisali telefon!');
                telefon.style.backgroundColor = "#ff9933";
                document.getElementById("telefon").select();
                telefon.focus();
                return false;
        }
        
        //mora imati minimalno 5 znaka napisana
        if(telefon.value.length < 10) {
                alert('telefon mora sadrzavati min. 10 znakova!');
                telefon.style.backgroundColor = "#ff9933";
                telefon.focus();
                return false;
        }

        //mora imati manje od 15 znakova
        if(telefon.value.length > 255){
                alert('telefon mora sadrzavati maksimalno 255 znakova!');
                telefon.style.backgroundColor = "#ff9933";
                telefon.focus();
                return false;
        }

				
			
        return true;
}

