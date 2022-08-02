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
        result=ca1+ca2+exam
    }
else if(exam >= 0 && exam <=100){
    result=ca1+ca2+exam
}
else if(ca1, ca2 <= 0 && ca1, ca2 >20){
    console.log("input right value")
}
}
totalscore(score(7,19,45))
totalscore(score(8,11,30))
totalscore(score(9,23,26))
totalscore(score(10,12,45))


