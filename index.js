// code your solution here
function saturdayFun() {
    console.log("This Saturday, I Want to Swim!");
}

function saturdayFun( activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
console.log(saturdayFun())
}
function saturdayFun( activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun('bathe  my dog!'))


const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(wrapper) {
    return function(adjective){
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}