function keyEnter(event){
    if(event.key === 'Enter'){
        ShowTask()
    }
}

const nama = document.getElementsByName("nama")[0]

const submit = document.querySelector("#additem")


const ShowTask = () => {
    let getLocalStorage = localStorage.getItem("data")
    const tasks = document.querySelector(".tasks")
    tasks.textContent = getLocalStorage
}
ShowTask()
console.log(nama)

submit.onclick = () => {
     console.log("first")
     localStorage.setItem("data", nama.value)
     ShowTask()
}

// removeBtn()

// function deleteitem(paramitem){

//     var element = document.getElementById(paramitem);
//     element.remove(paramiten)
// }


let btn = document.querySelector('.delete')
btn.addEventListener('click', () => {
    console.log("removed item")
    localStorage.removeItem('data')
    ShowTask()
})