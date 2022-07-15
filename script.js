// js for TicTacToe

// listen for clicks run function to check if click was in gameboard

const gameboard = () => {

}

const players = (name) => {
    
}

const gamePlay = () => {
    document.addEventListener( "click", someListener );
    let turnelement = document.querySelector('.getturn')
    let countClicks = 0;
    
    if (countClicks = countClicks%2 == 1){
        turnelement.textContent - ('Player x turn')
    } else if(countClicks%2 == 0 ){
        turnelement.textContent - ('Player o turn')
    } else{}

    function someListener(event){
        var element = event.target;
        if(element.classList == ("child")){
            var element = element
            console.log(element);
            if(countClicks >= 9){
                alert("Game finished")
            } else if(countClicks%2 == 1 && element.textContent == ""){
                countClicks++;
            element.textContent = ('x')
            console.log(countClicks)
            } else if(countClicks%2 == 0 && element.textContent == ""){
                countClicks++;
            element.textContent = ('o')
            console.log(countClicks)
            } else{}
        } else{}
    }
}

gamePlay()