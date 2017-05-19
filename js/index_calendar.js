var date=new Date();
var datearr=date.toDateString().match(/([\w\d]*)/g);
var current_date={
day:datearr[0],
month:datearr[2],
date:datearr[4],
year:datearr[6]
}; 
document.getElementsByClassName("date")[0].innerHTML=current_date.date;
document.getElementsByClassName("month")[0].innerHTML=current_date.month;
document.getElementsByClassName("year")[0].innerHTML=current_date.year;
var d="",c="";

function getday(){
if(date.getMonth()==2){
if(current_date.year%4==0){
if(current_date.year%100==0){
return 29;
}
if(current_date.year%400!=0){
return 28;
}
else{
return 29;
}
}else{
return 28;
}
}
return 0;
}
var feb=getday();
var days=["31",feb,"31","30","31","30","31","31","30","31","30","31"];
var dayname=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"]
/*
d+="<li class='date-small'>M<\/li>";
d+="<li class='date-small'>Tu<\/li>";
d+="<li class='date-small'>W<\/li>";
d+="<li class='date-small'>Th<\/li>";
d+="<li class='date-small'>F<\/li>";
d+="<li class='date-small'>Sat<\/li>";
d+="<li class='date-small'>Sun<\/li>";
*/

for(var i=0;i<(days[date.getMonth()]*1);i++){
if((i+1)!=current_date.date){
d+="<li class='date-small'>"+(i+1)+"<\/li>";
if((i+1)%7==0){d+="";}
}else{
d+="<li class='date-small today'>"+(i+1)+"<\/li>";
if((i+1)%7==0){d+="";}
}
} 
c+="<div class='day-full'>"+dayname[date.getDay()]+"day</div>";
document.getElementsByClassName("calendar")[0].innerHTML+=c;
document.getElementsByClassName("datelist")[0].innerHTML=d;