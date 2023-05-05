(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const form = document.querySelector('.needs-validation')

    for (let i = 0; i < form.length; i++) {
        console.log(form[i])


    }
    // Loop over them and prevent submission
    form.addEventListener('submit', event => {
        // for (let i = 0; i < form.length; i++) {
        //     switch (form[i].id) {
        //         case 'fullnameValidation':
        //             if (form[i].value.length < 6) {
        //                 form[i].validity.valid = false;
        //             }
        //             break;

        //         default:
        //             break;
        //     }

        // }
        let cb = false;
        for (let i = 0; i < form.length; i++)   //checking if any checkboxes have been checked
            if (form[i].name == 'interests[]' || form[i].name == 'items[]')
                if (form[i].checked)
                    cb = true;

        if (cb) //if one has been checked remove the required on the others
            for (let i = 0; i < form.length; i++)
                if (form[i].name == 'interests[]' || form[i].name == 'items[]')
                    form[i].required = false;



        if (!form.checkValidity() || !cb) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)



})()