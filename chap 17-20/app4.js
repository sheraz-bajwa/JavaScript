var a = prompt("which table you want")
var b = prompt("enter legth of table:")
document.write("multiplication table of:  " + a + "<br>");
document.write("length:  " + b+"<br>"+"<br>");
for(var i = 1; i <= b; i++)
{
    document.write(a + "x" + i + "=" + a*i + "<br>")
   }
  