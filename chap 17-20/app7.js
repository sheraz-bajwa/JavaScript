var a = prompt("available item in out baker \r\n “cake”, “apple pie”, “cookie”, “chips”, “patties”","enter your search")
a = a.toLowerCase()
var arr = ["cake" , "apple pie", "cookie", "chips", "patties"];
for (var i =0; i < arr.length; i++){
    if(arr [i] == a){
        document.write(arr[i] + " is available at index 2 in aur bakery ")
    }
}

