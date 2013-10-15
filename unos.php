
<?php

//require ("funkcije.php");

?>

<!DOCTYPE html> 

<html>

<head>

<title>Unos člana</title>

<link rel="stylesheet" type="text/css" href="stil.css">

<script type="text/javascript" src="ValidacijaForme.js"></script>

<script>
alert ("Ušli ste u formular za unos novog člana KROHEMA!");
</script>

</head>

<body>

<div id="container">

<form action="index.php" name="natrag">
    <input type="submit" value="<-- Natrag na popis članova" id="natrag">
</form>

<form name="forma" method="POST"  onSubmit='return(provjeriPodatke())'>
	
<h1>UNOS ČLANA:</h1>

<table border="1">
	<tbody>
		<tr>
			<td>Ime</td>
			<td><input type="text" name="ime" id="ime" value=""></td>
		</tr>
		<tr>
			<td>Prezime</td>
			<td><input type="text" name="prezime" id="prezime" value=""></td>
		</tr>

		<tr>
			<td><input type="submit" name="btn_send" value="UNESI U BAZU"></td>
			<td><button type="reset" value="Reset">ODBACI</button></td>
		</tr>

	</tbody>
</table>
</form>

</div>

</body>
</html>
