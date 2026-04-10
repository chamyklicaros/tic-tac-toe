let player1;
let player2;

function resetGame(cells){
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.pointerEvents = 'auto';
    });
}

function player(name){
    this.name = name;
    this.score = 0;
    this.incrementScore = function(){
        this.score++;
    }


}


function checkWin(winConditions, cells) {
    for (let condition of winConditions) {
        let posA = cells[condition[0]].textContent;
        let posB = cells[condition[1]].textContent;
        let posC = cells[condition[2]].textContent;
        if (posA !== '' && posB !== '' && posC !== '' && posA === posB && posB === posC) {
            return true;
        }
    }
    return false;
}

function checkDraw(cells) {
    for (let cell of cells) {
        if (cell.textContent === '') {
            return false;
        }
    }
    return true;
}

function main(){

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

    const cells = document.querySelectorAll('.cell');
    const player1NameInput = document.querySelector('#player1');
    const player2NameInput = document.querySelector('#player2');
    const submitButton = document.querySelector('#submitButton');   

    const name1Input = document.querySelector('.name1Input');
    const name2Input = document.querySelector('.name2Input');
    
    const player1 = new player(player1NameInput.value || "Player 1");
    const player2 = new player(player2NameInput.value || "Player 2");

    const nameInput = document.querySelector('.Name');
    nameInput.classList.add('show');

    let firstPlayerTurn = true;
    let secondPlayerTurn = false;

   

    name1Input.textContent = `${player1.name}: ${player1.score}`;
    name2Input.textContent = `${player2.name}: ${player2.score}`;

    

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        player1.name = player1NameInput.value || "Player 1";
        player2.name = player2NameInput.value || "Player 2";

        

        name1Input.textContent = `${player1.name}: ${player1.score}`;
        name2Input.textContent = `${player2.name}: ${player2.score}`;
        nameInput.classList.remove('show');
    });

   


    const newButton = document.querySelector('#newButton');
 



  

 cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (firstPlayerTurn){
                cell.textContent = 'X';
                cell.style.pointerEvents = 'none';
                firstPlayerTurn = false;
                secondPlayerTurn = true;
            }
            else if (secondPlayerTurn){
                cell.textContent = 'O';
                cell.style.pointerEvents = 'none';
                firstPlayerTurn = true;
                secondPlayerTurn = false;
            }

            if (checkWin(winConditions, cells)){
                if (firstPlayerTurn){
                    player2.incrementScore();

                    alert(`${player2.name} wins!`);
                    cells.forEach(cell => cell.style.pointerEvents = 'none');
                }
                else {
                    player1.incrementScore();
                    alert(`${player1.name} wins!`);
                    cells.forEach(cell => cell.style.pointerEvents = 'none');
                }
            }
            else if (checkDraw(cells)){
                alert("It's a draw!");
                cells.forEach(cell => cell.style.pointerEvents = 'none');

            }
            
        });
    });

        newButton.addEventListener('click', () => {
        resetGame(cells);
    });

} 







main();