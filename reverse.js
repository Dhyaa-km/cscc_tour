let a = "abc"
let b = "cba"

let list = a.split("")
let list2 = b.split("")
 
j = list2.length -1 ;

test = 1;


// wrong one :

/* for (let i = 0; i < list.length; i++) {
    if (list[i] !== list2[j]) {
        
        test = 0;
        j--;
    }
} */

// true one
for (let i = 0; i < list.length; i++) {
    if (list[i] !== list2[j]) {
        
        test = 0;
        break
    }
    j--;
}


if (test === 1) {
    console.log("yes");
    
}else if (test === 0){
    console.log("no");
}




