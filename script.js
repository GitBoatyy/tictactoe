// js for TicTacToe

// listen for clicks run function to check if click was in gameboard

const gameboard = () => {

};


const players = (name) => {
    
}

const gamePlay = (() => {

    document.addEventListener( "click", someListener );
    const turnelement = document.querySelector('.getturn')
    const gameBoard = document.querySelectorAll('.child') 
    const reset1 = document.querySelector('#box1')
    const reset2 = document.querySelector('#box2')
    const reset3 = document.querySelector('#box3')
    const reset4 = document.querySelector('#box4')
    const reset5 = document.querySelector('#box5')
    const reset6 = document.querySelector('#box6')
    const reset7 = document.querySelector('#box7')
    const reset8 = document.querySelector('#box8')
    const reset9 = document.querySelector('#box9')

    const gameArray = Array.from(gameBoard)
    console.log(gameBoard)
    let countClicks = 0;



    function someListener(event){
        var element = event.target;
        if(element.classList == ("child")){
            var element = element
            if(countClicks == 9){
                alert("Game finished")
                reset1.textContent = ('')
                reset2.textContent = ('')
                reset3.textContent = ('')
                reset4.textContent = ('')
                reset5.textContent = ('')
                reset6.textContent = ('')
                reset7.textContent = ('')
                reset8.textContent = ('')
                reset9.textContent = ('')
                countClicks = 0

            } else if(countClicks%2 == 1 && element.textContent == ""){
                countClicks++;
            element.textContent = ('X')
            turnelement.textContent = ('Player O turn')
            } else if(countClicks%2 == 0 && element.textContent == ""){
                countClicks++;
            element.textContent = ('O')
            turnelement.textContent = ('Player X turn')
            } else{}
        } else{}
    }
})();
