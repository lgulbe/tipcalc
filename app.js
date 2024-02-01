function number() {
    document.getElementById("tipoutput").innerText=document.getElementById("tipinput").value+"%";
}

function tasks() {
    let totalbill= parseInt(document.getElementById("billtotal").value);
    let tips= document.getElementById("tipinput").value;
    
if (totalbill=="" || tips=="") {
    alert("ERROR")
} else{
let tip=totalbill*(tips/100)
let totalbillwtip=tip+totalbill
  document.getElementById("tipamount").value=tip;
  document.getElementById("totalbillwithtip").value=totalbillwtip;



}
}


