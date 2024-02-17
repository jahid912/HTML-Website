function main()
	{
		var a = document.getElementById("finder").value
		var c ;

		if(a>0)
			{
				for(i = 1; i <= 10; i++)
					{
						c = a * i;
						document.write(a + " X " + i + " = " + c + "<br>");
					}
			}
		else
			{
				alert("Please enter a number greater than 0");
			}
	}