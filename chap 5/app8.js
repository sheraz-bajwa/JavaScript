var tmarks = prompt("enter your total marks");
var omarks = prompt("enter your marks obtained");
var arr = ["Total marks: ", "Marks Obtained: ", "Percentage "]
document.write("Marks Sheet ","<br>");
document.write(arr[0] + tmarks + "<br>");
document.write(arr[1] + omarks + "<br>");
document.write(arr[2] + omarks/tmarks*100 + "<br>");