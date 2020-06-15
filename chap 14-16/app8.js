var arr = ["sheraz", "zeeshan", "noman"];
var arr1 = ["500", prompt("enter marks of sheraz"),prompt("enter marks of zeeshan"),prompt("enter marks of noman"),"100"]
var arr2 = ["score of ", " is ", " percentage: "," % "]
document.write(arr2[0]+arr[0]+arr2[1]+arr1[1]+arr2[2]+(arr1[1]/arr1[0]*arr1[4])+arr2[3] ,"<br>");
document.write(arr2[0]+arr[1]+arr2[1]+arr1[2]+arr2[2]+(arr1[2]/arr1[0]*arr1[4])+arr2[3] ,"<br>");
document.write(arr2[0]+arr[2]+arr2[1]+arr1[3]+arr2[2]+(arr1[3]/arr1[0]*arr1[4])+arr2[3] ,"<br>");