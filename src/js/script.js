let clientNumberMorning = document.getElementById("clientNumberMorning")
let clientNumberEvening=document.getElementById('clientNumberEvening')
let clientNumberNight=document.getElementById('clientNumberNight')
let manha=document.getElementsByClassName('manha')
let evening=document.getElementsByClassName('evening')
let night=document.getElementsByClassName('night')

const clients=[{
    name:'Jonas', 
    hair:true, 
    beard:false,
},{
    name:'matheus',
    hair:true,
    beard:true,
}
]

const timeCheck=(hour)=>{
    if(hour>=8 && hour <12){'morning'}
        else if (hour>=12 && hour<18){'evening'}
            else if (hour >= 18 && hour<=21){'night'}
    else{'closed'}
}

let slots = []
for (let h= 8; h)

clientNumberMorning=2
clientNumberEvening=4
clientNumberNight=3

