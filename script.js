

function resetGame(cells){
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.pointerEvents = 'auto';
    });
}

function main(){
    const cells = document.querySelectorAll('.cell');

    const newButton = document.querySelector('#newButton');
        let winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    newButton.addEventListener('click', () => {
        resetGame(cells);
    });



  

 cells.forEach(cell => {
        cell.addEventListener('click', () => {
            cell.textContent = 'X';
            cell.style.pointerEvents = 'none';
        });
    });
} 




main();