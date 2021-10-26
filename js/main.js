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

