function wstaw(liczba)
	{
		document.formularz.tekst.value = document.formularz.tekst.value + liczba;
	}

function znak(dzialanie)
	{
		document.formularz.tekst.value = document.formularz.tekst.value + dzialanie;
	}

function wynik()
	{
		if(document.formularz.tekst.value)
			{
				document.formularz.tekst.value = eval(document.formularz.tekst.value);
			}
	}

function wyczysc() 
	{
		document.formularz.tekst.value = "";
	}

function cofnij()
	{
		var usun = document.formularz.tekst.value;
		document.formularz.tekst.value = usun.substring(0,usun.length-1);
	}

function pierwiastek()
	{
		if(document.formularz.tekst.value)
			{
				x = document.formularz.tekst.value;
				document.formularz.tekst.value = document.formularz.tekst.value / Math.sqrt(x);
			}
	}

function silnia()
	{
		a = document.formularz.tekst.value;
		silnia = 1;

		for (i = 1; i <= a; i++)
			{
				silnia = silnia * i;
			}

		document.formularz.tekst.value = silnia;	
	}
