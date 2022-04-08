//check weekend

const checkWeekend = (date) => {
    let day = date.getDay();
  if (day === 6 || day === 0) {
    return `It's a weekend!`;
  } else {
    return `It's not a weekend!`;
  }
};

console.log(checkWeekend(new Date()));

////////////////////////////////////////////////////
//Calculate the difference between two dates in day format

const dateDifference = (date1, date2) => {
let diffDays = date2.getTime() - date1.getTime();
let differenceInDays = diffDays / (1000 * 3600 * 24); 
return `different Days: ${Math.abs(differenceInDays)} day`;
}

console.log(dateDifference(new Date('7/21/2020'), new Date('7/18/2021')));
////////////////////////////////////////////////////
// show yesterday and monthBefore and monthAfter

const yesterday1 =(date)=>{
let day = date.getDate();
day=day-1;
let month = date.getMonth();
let monthBefore =month-1;
let monthAfter =month+1;
let show ={yesterday: day,
    monthBefore,
    monthAfter};
return show;
}

console.log(yesterday1(new Date()));
////////////////////////////////////////////////////
//Calculate the difference between two dates in minutes format

const dateDifference2 = (date1, date2) => {
  let diffDays = date2.getTime() - date1.getTime();
  let differenceInMinutes = diffDays * 60 / 3600*1000 ; 
  return `different Days: ${Math.abs(differenceInMinutes)} minutes`;
  }
  
  console.log(dateDifference2(new Date('7/21/2020'), new Date('7/18/2021')));
//////////////////////////////////////////////////////
//return number of day of month
const dayMonth = (date)=>{
  let num = date.getDate();
  let num1 = num.toString();
  if (num1.length===1){
    return `0${num} of month`;
  }
  else{return `${num} of month`;}
}
console.log(dayMonth(new Date()));
//////////////////////////////////////////////////////
//AM or PM
const formatAMPM = (date)=>{
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours;
  if(ampm >= 12){ampm='pm'} 
  else{ampm='am'};
  hours = hours % 12;
  if(hours===0){hours===12}// the hour '0' should be '12'
  if(minutes<10){minutes==='0'+minutes}
  else{minutes=== minutes};
  return ` ${hours} : ${minutes}  ${ampm}`;
}

console.log(formatAMPM(new Date));