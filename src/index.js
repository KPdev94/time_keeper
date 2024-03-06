let workDays = [];

class Workday{
    constructor(startTime= '', lunchTime = "", lunchReturnTime = "", leaveTime = ""){
        this.month = startTime.getMonth();
        this.date = startTime.getDate();
        this.workDate = `${startTime.getMonth()} ${startTime.getDay()}`;
        this.startTimeHours = startTime.getHours();
        this.startTimeMins = startTime.getMinutes();
        this.lunchTimeHours = lunchTime.getHours();
        this.lunchTimeMins = lunchTime.getMinutes();
        let preLunchFactor = (this.lunchTimeMins - this.startTimeMins) >= 0 ? 60 : -60;
        this.lunchReturnTimeHours = lunchReturnTime.getHours();
        this.lunchReturnTimeMins = lunchReturnTime.getMinutes();
        this.leaveTimeHours = leaveTime.getHours();
        this.leaveTimeMins = leaveTime.getMinutes();
        let postLunchFactor = (this.lunchTimeMins - this.startTimeMins) >= 0 ? 60 : -60;
        this.preLunchTime = (this.lunchTimeHours - this.startTimeHours) + ((this.lunchTimeMins - this.startTimeMins) / preLunchFactor);
        this.postLunchTime = (this.leaveTimeHours - this.lunchReturnTimeHours) + ((this.leaveTimeMins - this.lunchReturnTimeMins) / postLunchFactor)
        this.totalTime = this.preLunchTime + this.postLunchTime;

        workDays.push(this);
    }
}
let day1 = new Workday(new Date('Mar 4, 24 08:00'), new Date('Mar 4, 24 11:45'), new Date('Mar 4, 24 12:40'), new Date('Mar 4, 24 16:46'));
// let day2 = new Workday(new Date('Mar 5, 24 07:00'), new Date('Mar 5, 24 12:10'), new Date('Mar 5, 24 12:40'), new Date('Mar 5, 24 15:40'));

function verifyNewDay() {
let now = new Date();
if(now.getMonth() == workDays[workDays.length - 1].month) {
    if(now.getDate == workDays[workDays.length - 1].day) {
        console.log('Date is same, not pushing');
    }
}
else{
    new Workday(now);
}
console.log(now);
}

function createHome() {
    let h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.textContent = 'Time Keeper';
    document.querySelector('#content').appendChild(h1);
    
    verifyNewDay();
    console.log(workDays);
}
window.addEventListener('load', createHome());
console.log("HELLO!");
function morningClockIn() {

}
function morningClockOut() {

}
function lunchReturnClockIn() {

}
function endOfDayClockOut() {

}

