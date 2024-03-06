let workDays = [];

class Workday{
    constructor(dateGenerator){
        this.month = dateGenerator.getMonth();
        this.date = dateGenerator.getDate();
        this.workDate = `${dateGenerator.getMonth()} ${dateGenerator.getDay()}`;
        this.startTimeHours;
        this.startTimeMins;
        this.lunchTimeHours;
        this.lunchTimeMins;
        let preLunchFactor = (this.lunchTimeMins - this.startTimeMins) >= 0 ? 60 : -60;
        this.lunchReturnTimeHours;
        this.lunchReturnTimeMins;
        this.leaveTimeHours;
        this.leaveTimeMins;
        let postLunchFactor = (this.lunchTimeMins - this.startTimeMins) >= 0 ? 60 : -60;
        this.preLunchTime = (this.lunchTimeHours - this.startTimeHours) + ((this.lunchTimeMins - this.startTimeMins) / preLunchFactor);
        this.postLunchTime = (this.leaveTimeHours - this.lunchReturnTimeHours) + ((this.leaveTimeMins - this.lunchReturnTimeMins) / postLunchFactor)
        this.totalTime = this.preLunchTime + this.postLunchTime;

        workDays.push(this);
    }
}

// let day1 = new Workday(new Date('Mar 4, 24 08:00'), new Date('Mar 4, 24 11:45'), new Date('Mar 4, 24 12:40'), new Date('Mar 4, 24 16:46'));
// let day2 = new Workday(new Date('Mar 5, 24 07:00'), new Date('Mar 5, 24 12:10'), new Date('Mar 5, 24 12:40'), new Date('Mar 5, 24 15:40'));

function verifyNewDay() {
    let now = new Date();
    if(workDays.length == 0) {
        console.log('NEW DATE, PUSHING');
        new Workday(now);
        console.log(now);
    }
    else if(workDays.length > 0) {
        if(now.getMonth() == workDays[workDays.length - 1].month) {
            if(now.getDate() != workDays[workDays.length - 1].date) {
                console.log('NEW DATE, PUSHING');
                new Workday(now);
                console.log(now);
            }
        }
        else if(now.getMonth() != workDays[workDays.length - 1].month) {
            console.log('NEW DATE, PUSHING');
            new Workday(now);
            console.log(now);
        }
    }
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
function morningClockIn() {
    let now = new Date();
}
function morningClockOut() {
    let now = new Date();
}
function lunchReturnClockIn() {
    let now = new Date();
}
function endOfDayClockOut() {
    let now = new Date();
}

