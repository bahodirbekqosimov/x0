const cells = document.querySelectorAll(".cell")
const statusText =  document.querySelector("#status")
const btn = document.querySelector("#reset")
let arr =["","","","","","","","",""]
let Player = "X"
let run = false

let wincondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



function game(){
    cells.forEach(cell=>cell.addEventListener("click",click))
    btn.addEventListener("click",reset)
    statusText.textContent=`${Player}ni navbati`
    run = true
}
function click(){
    const cellIbdex = this.getAttribute("data-cell-index")
    if(arr[cellIbdex] != "" || !run){
        return
    }
    update(this,cellIbdex)
    // nextPlayer()
    Winner()
}
function update(cell,index){
    arr[index] = Player
    cell.textContent = Player

}
function nextPlayer(){
    Player = (Player == "X")?"O":"X"
    statusText.textContent = `${Player}ni navbati`
}
function Winner(){
    let won = false
    for(let i = 0 ; i<wincondition.length;i++){
        let con = wincondition[i]
        let cellA = arr[con[0]]
        let cellB = arr[con[1]]
        let cellC = arr[con[2]]
        let cellD = arr[con[3]]
        let cellE = arr[con[4]]
        let cellF = arr[con[5]]
        let cellJ = arr[con[6]]
        let cellK = arr[con[7]]
        let cellH = arr[con[8]]
        if(cellA==""||cellB==""||cellD==""||cellE==""||cellC==""||cellF==""||cellJ==""||cellK==""||cellH==""){
            continue
        }
        if((cellA==cellB&cellB==cellC) ){
            won = true
            break
        }

    }
    if(won){
        statusText.textContent = `${Player} yutdi!!`
        run=false
    }
    else if(!arr.includes("")){
        statusText.textContent = `Teng!!`
        run = false
    }
    else(
        nextPlayer()
    )
}
function reset(){
    Player = "X"
    arr =["","","","","","","","",""]
    statusText.textContent = `${Player}ni navbati`
    cells.forEach(cell=>cell.textContent="")
    run = true

}


game()
