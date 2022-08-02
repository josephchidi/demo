function printhello(){
    console.log("hello world")
}
printhello()

function printbye(){
    console.log("bye")
}
printbye()

function calculator(operation, num1, num2=10){
    let result
    if(operation==="add"){
        result = num1+num2
    }

else if(operation==="sub"){
    result = num1-num2
}
else if(operation==="div"){
    result = num1/num2
}
else if(operation==="mult"){
    result = num1 * num2
}

else{
    result = " this operation is not allowed"
}

return result 

}


calculator("sub",50,70)
calculator("mult",8,9)
console.log()

function score(ca1,ca2,exam){
    let total = ca1+ca2+exam

}

function printscore(totalscore){

    console.log("your score is " + totalscore)
}
printscore(5,2,12)

console.log(printscore)

var tot = score(5,2,12)
printscore(tot)




function score(ca1,ca2,exam){

    console.log(" score" + totalscore){
}
printscore(10,50,60)
console.log(printtotal)
}
    



function gettotalscore(ca1,ca2,exam){
    return ca1+ca2+exam
}
gettotalscore(10,50,90)

function printgrade(score){
    if (score>=70 && score<=100){
        console.log(your score is A)
    }

else if (score>=60 && score<=69){
    console.log(your score is B)
}
else if(score>=50 && score<=59){
    console.log(your score is C)
}
else if(score>=45 && score<=49){
    console.log(your score is D)
}
else if(score>=0 && score<=44){
    console.log(your score is F)
}
else{
    console.log("your score is invalid")
}
}

printgrade(gettotalscore(30,30,-40))




function totalscore(grade){
    if(grade >=70 && grade <=100){
        result = "A"
    }
    else if(grade >=68 && grade <70){
        result = "B"
    }
    else if(grade >=58 && grade <60){
        result = "score is B"
    }
    else if(grade <=50 && grade <59){
        result = "c"
    }
    else if(grade <=48 && grade <50){
        result = "score is c"
    }
    else if(grade >=40 && grade <49){
        result = "D"
    }
    else if(grade >=38 && grade <40){
        result = "score is D"
    }
    else if(grade >=0 && grade <39){
        result = "F"
    }
    else{
        result = "involid score"
    }
    console.log(result)
}

function score(ca1, ca2, exam){
    if(ca1, ca2 >=0 && ca1,ca2 <=20){
        result ca1+ca2+exam
    }
else if(exam >= 0 && exam <=100){
    result ca1+ca2+exam
}
else if(ca1, ca2 <= 0 && ca1, ca2 >20){
    console.log("input right value")
}
}
totalscore(score(7,19,45))
totalscore(score(8,11,30))
totalscore(score(9,23,26))
totalscore(score(10,12,45))

























