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

// this adds a "half hour"
let slots = []
for (let h= 8; h<=21; h++){
    slots.push({hour: h, minute:0,period:timeCheck(h)});
    if (h<21){
        slots.push({hour: h, minute:30,period:timeCheck(h)})
    }
}
/*
print all the available barber slots
always comment it to test (!important)
*/ 

// slots.forEach(slot => {
//     console.log(
//         `${slot.hour.toString().padStart(2, '0')}:${slot.minute === 0 ? '00' : '30'} - ${slot.period}`
//     );
// });

const clients=[
{
    name:'Jonas', 
    hair:true, 
    beard:false,
    time: timeCheck(19)
    },{
    name:'matheus',
    hair:true,
    beard:true,
}
]

console.log(clients[0])

// ALWAYS REMEMBER TO NODE IT WHERE THE SCRIPT IS