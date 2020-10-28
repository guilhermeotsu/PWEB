const $level = document.querySelector('#level')
const d1 = new Date(1998, 07, 19);

function getAge(d1, d2){
    d2 = d2 || new Date()
    const diff = d2.getTime() - d1.getTime()
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
}

$level.innerHTML = getAge(d1)