// Question 5:
let range = function(start , end) {
    const num = Math.floor(Math.random() * end) + 1;
    if (end-start >= start) {
        if(num >= start) {
            console.log(num);
        } else  {
            console.log(num + start);
    }
} else {
    if((num <= end) && (num >= start)) {
        console.log(num);
    } else {
    console.log(Math.floor((start + end)/2));
    }
}
}

//Question 4: 
let vowlesCount = function(word) {  //enter
    for (let i=0 ; i<word.length ; i++) {
        if(word[i] === "a" || "e" || "i" || "o" || "u") {
            let arr = [];
            arr.push(word[i]);
            console.log(arr.length);
        } 
    }
}

//assignment 8 Q-1
let arr = [1 , 4 , 5 , 4 , 8];
let squareAndSum = (...arr) => {
    return arr.reduce((add , el) => 
         add + el**2
    );
}

//Q-2
let numb = [1 , 2 , 3 , 4 , 8 , 12 , 15];
let newArr = numb.map((el) => el + 5);

//Q-3
let arra = ["tom" , "karan" , "peter" , "ironman" , "steve"];
function names(...arra) {
    for(item of arra) {
       return item.toUpperCase();
    }
}