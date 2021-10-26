//EMAIL 

const emails = ['captain.america18@gmail.com', 'iron_man@gmail.com', 'thor-thebest@gmail.com', 'vitsbardella@gmail.com'];

const emailImput = document.getElementById('email');
const accessBtn = document.querySelector('.btn-access');

accessBtn.addEventListener('click',
    function() {
        const user = emailImput.value.trim().toLowerCase();
        let userFound = false;

        for (let i = 0; i < emails.length; i++) {
            if (user === emails[i]) {
                userFound = true;
                break;
            }
        }
        if (userFound) {
            console.log('Accesso consentito');
        }
        else {
            console.log('Accesso negato');
        }
    }
)

//GIOCO DEI DADI
const playBtn = document.querySelector('.btn-play');
let playerResult = document.querySelector('.player-result');
let computerResult = document.querySelector('.computer-result');
let winner = document.querySelector('.winner')

playBtn.addEventListener('click',
    function() {
        let numbPlayer = Math.floor(Math.random() * 6) + 1;
        let numbComputer = Math.floor(Math.random() * 6) + 1;
        playerResult.innerHTML = `Il player ha fatto: ${numbPlayer}`;
        computerResult.innerHTML = `Il computer ha fatto ${numbComputer}`;

        if (numbPlayer > numbComputer) {
            winner.innerHTML = 'Player vince!!';
        }
        else if (numbComputer > numbPlayer) {
            winner.innerHTML = 'Il computer vince, sarai più fortunato la prossima volta';
        }
        else {
            winner.innerHTML = 'Avete fatto lo stesso numero, riprova!!'
        }
    }
)


