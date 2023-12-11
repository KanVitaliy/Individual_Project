const mathBtn = document.getElementById('#math-btn')
const mathList = document.getElementById('#math-list')
function click(){
    mathList.style.display = 'block'
}
mathBtn.addEventListener('click', click())