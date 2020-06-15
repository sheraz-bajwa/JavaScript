var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 89;

for (i=0; i<=largest;i++){
    if (array>largest) {
        var largest=array[i];
    }
}
document.write("Array items "+array ,"<br>")

document.write("the largest no is " ,largest)

