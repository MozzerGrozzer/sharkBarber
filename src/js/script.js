// let clientNumberMorning = document.getElementById("clientNumberMorning")
// let clientNumberEvening=document.getElementById('clientNumberEvening')
// let clientNumberNight=document.getElementById('clientNumberNight')
// let manha=document.getElementsByClassName('manha')
// let evening=document.getElementsByClassName('evening')
// let night=document.getElementsByClassName('night')


/* timeCheck(hour) is to automaticaly put each user on HTML
 calendar by the time the user put it there
so: morning, evening and night 
theres a closed one so user dont choose a hour where the barber isnt
working
*/

const timeCheck=(hour)=>{
    if(hour>=8 && hour <12){return 'morning'}
        else if (hour>=12 && hour<18){return 'evening'}
            else if (hour >= 18 && hour<=21){return 'night'}
    else{'closed'}
}

// // this adds a "half hour"
// let slots = []
// for (let h= 8; h<=21; h++){
//     slots.push({hour: h, minute:0,period:timeCheck(h)});
//     if (h<21){
//         slots.push({hour: h, minute:30,period:timeCheck(h)})
//     }
// }

// this shows every hour and what time of day it is (it was a test)
// slots.forEach(slot => {
//     console.log(
//         `${slot.hour.toString().padStart(2, '0')}:${slot.minute === 0 ? '00' : '30'} - ${slot.period} `
//     );
// });
// format time for comaparison (HH:MM)
function toMinutes(hour,minute){
    return hour * 60 + minute
}
//generate a slot (08:00 to 21:00)
function generateSlots(){
    let slots = [];
    for (let h=8; h<=21; h++){slots.push({hour:h,minute:0});
        if(h<21){slots.push({hour:h,minute:30});
        }
    }
    return slots;
}
//mark a expired slot
function markExpiredSlots(slots, currentHour, curentMinute) {
    const now = toMinutes(currentHour, curentMinute);
    return slots.map(slot=>({
        ...slot,
        expired: toMinutes(slot.hour,slot.minute)<now
    }));
}


function chooseSlot(slots, index) {
    const slot = slots[index];
    if (slot.expired) {
        return `Slot ${slot.hour}:${slot.minute === 0 ? '00' : '30'} is expired!`;
    } else {
        return `Slot ${slot.hour}:${slot.minute === 0 ? '00' : '30'} selected!`;
    }
}

// --- TESTING ---

// Simulate current time (for testing; use real time for production)
let testHour = 13;   // Set to current hour for real use: (new Date()).getHours()
let testMinute = 15; // Set to current minute: (new Date()).getMinutes()

let slots = generateSlots();
let slotsWithStatus = markExpiredSlots(slots, testHour, testMinute);

// Display slots and their status
slotsWithStatus.forEach((slot, i) => {
    console.log(
        `${i}: ${slot.hour.toString().padStart(2,'0')}:${slot.minute === 0 ? '00' : '30'} - ` +
        (slot.expired ? 'EXPIRED' : 'AVAILABLE')
    );
});

// Simulate choosing slot 4 (should be 10:00)
console.log(chooseSlot(slotsWithStatus, 4));

// Simulate choosing slot 0 (should be 08:00, expired)
console.log(chooseSlot(slotsWithStatus, 0));

//this goes last so the script acc find the clients

const clients=[
{
        name:'Jonas', 
        hair:true, 
        beard:false,
        time: timeCheck(9)
    },{
        name:'matheus',
        hair:true,
        beard:true,
        time: timeCheck(13)
    },{
        name:'Kyro',
        hair:false,
        beard:true,
        time: timeCheck(19)
    }
]
// ALWAYS REMEMBER TO NODE IT WHERE THE SCRIPT IS