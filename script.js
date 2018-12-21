var count = 0;

function calculateCurrentGrade() {
    var hw = document.getElementById('hwPoints').value;
    var hwW = parseInt(document.getElementById('hwWeight').value);
    var cl = document.getElementById('clPoints').value;
    var clW = parseInt(document.getElementById('clWeight').value);
    var par = document.getElementById('parPoints').value;
    var parW = parseInt(document.getElementById('parWeight').value);
    var tes = document.getElementById('tesPoints').value;
    var tesW = parseInt(document.getElementById('tesWeight').value);

    var hwA = convertArrayStringToNumber(hw);
    var clA = convertArrayStringToNumber(cl);
    var parA = convertArrayStringToNumber(par);
    var tesA = convertArrayStringToNumber(tes);

    var hwAv = averageArray(hwA);
    var clAv = averageArray(clA);
    var parAv = averageArray(parA);
    var tesAv = averageArray(tesA);

    var hwF = weightAndGrade(hwAv,hwW);
    var clF = weightAndGrade(clAv,clW);
    var parF = weightAndGrade(parAv,parW);
    var tesF = weightAndGrade(tesAv,tesW);

    var percentage = ( hwW + clW + parW + tesW);

    var findingCurrent = hwF+clF+parF+tesF;
    var current = (findingCurrent).toFixed(2);
    var high = toHighWeight(percentage);
    var low = toLowWeight(percentage);
    //document.getElementById("high").innerHTML = high;
    //document.getElementById("low").innerHTML = low;
    if (high && low) {
        document.getElementById("answer").innerHTML = current + "%";
    }
    return [current,high && low];
}
function calculateFinalGrade() {

    var curr = calculateCurrentGrade();

    var cal = curr[0];

    if (curr[1])  {

        var grade = parseInt(document.getElementById("wanted").value);
        var final = parseInt(document.getElementById("finalWeight").value);
        var fin = 1 - (final / 100);
        var cur = fin * cal;
        var finalGradeCal = (grade - cur) / (final / 100);
        var fin2 = (finalGradeCal).toFixed(2);
        document.getElementById("final").innerHTML = fin2;
    }  
}




function convertArrayStringToNumber (string){
    var grades = string.split(",");

    for(var i = 0; i < grades.length; i++){
        grades[i] = parseInt(grades[i]);
    }
    return grades;
}

function averageArray(array){
    var avg = 0;
    for(var i = 0; i < array.length; i++){
        avg += array[i];
    }

    avg = avg / (array.length);
    return avg;
}
 function weightAndGrade(average,weight) {
     var bean = average*(weight * .01)
     return bean;
 }

 function toHighWeight (percentage){
    if(percentage > 100) {
        alert("The total weight is higher than one hundred, please try again");
        return false;
    }
    return true;
}
 function toLowWeight (percentage){
     if(percentage < 100) {
         alert("the total weight is lower than one hundred, please try again");
         return false;
     }
    return true;
 }

