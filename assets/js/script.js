
let validator = {
    handleSubmit: (event)=> {
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input');

        for(let i=0; i<inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            if(check !== true) {
                send = false;
                // exibir o error
            }
        }

        if(send) {
            form.submit();
        }
    },
    checkInput: (input)=> {
        let rules = input.getAttribute('data-rules');
        if(rules !== null) {
            rules = rules.split('|');
            for(let i in rules) {
                let rDetail = rules[i].split('=');
                switch(rDetail[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'Campo obrigatório';
                        }
                    break;
                    case 'min':
                    
                    break;
                }
            }
        }
        return true;
    }
};

let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);
