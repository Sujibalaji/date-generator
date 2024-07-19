var div = document.createElement("div")
div.className = "main";
var input = document.createElement("input")
input.setAttribute("type","date")
input.id ="dob";
var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Display Data";
button.addEventListener("click", date_generator)
div.append(input,button);
document.body.append(div);
function date_generator(){
    var res = document.getElementById("dob").value;
    var inputdate= new Date(res);
    var currentdate = new Date();
    console.log(inputdate,currentdate);
    //finding milliseconds
    var milliseconds= parseInt(currentdate.getTime()-inputdate.getTime());
    console.log(milliseconds);
    //finding seconds
    var seconds = Math.floor(milliseconds/1000);
    console.log(seconds);
    //finding minute
    var minute = Math.floor(seconds/60);
    console.log(minute);
    //finding hours
    var hours = Math.floor(minute/60);
    console.log(hours);
    //finding day
    var day = Math.floor(hours/24);
    console.log(day);
    //finding year
    var year = currentdate.getFullYear() - inputdate.getFullYear();
    console.log(year);
    //finding monthdiff
    var monthdiff = (year*12)+(currentdate.getMonth()- inputdate.getMonth());
    console.log(monthdiff);
    var ele = document.createElement("div")
    ele.innerHTML = `Given input date is ${inputdate}`;
    document.body.append(ele);
var ele0 = document.createElement("div")
ele0.innerHTML = `year is ${year}`;
document.body.append(ele0);
    var ele1 = document.createElement("div")
    ele1.innerHTML = `Month is ${monthdiff}`;
     document.body.append(ele1);

    var ele2 = document.createElement("div")
    ele2.innerHTML = `Days is ${day}`;
    document.body.append(ele2);

    var ele3 = document.createElement("div")
    ele3.innerHTML = `Hours is ${hours}`;
    document.body.append(ele3);

    var ele4 = document.createElement("div")
    ele4.innerHTML = `Minutes is ${minute}`;
    document.body.append(ele4);

    
    var ele5 = document.createElement("div")
    ele5.innerHTML = `Seconds is ${seconds}`;
    document.body.append(ele5);

    
    var ele6 = document.createElement("div")
    ele6.innerHTML = `milliseconds is ${milliseconds}`;
    document.body.append(ele6);

  
}
