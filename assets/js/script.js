
let validator = {
    handleSubmit: (event)=> {
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input');

        validator.clearErrors();

        for(let i=0; i<inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input);
            if(check !== true) {
                send = false;
                validator.showError(input, check);
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
    },
    showError: (input, error)=> {
        input.style.borderColor = 'red';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSide);
    },
    clearErrors: ()=> {
        let inputs = form.querySelectorAll('input');
        for(let i=0; i<inputs.length; i++) {
            inputs[i].style = '';
        }

        let errorElement = document.querySelectorAll('.error');
        for(let i=0; i<errors.length; i++) {
            errorElement[i].remove();
        }
    }
};

let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);
