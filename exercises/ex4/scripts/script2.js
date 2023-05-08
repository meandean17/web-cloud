const zoomBtn = document.getElementById('entry-btn');
const vidContainer = document.querySelector('.vid-container');
const vid = document.getElementById('welcome-vid');
const heart = document.getElementById('pumping-heart');
const header = document.getElementById('app-header');
const form = document.querySelector('.app-form');

const submitData = (e) => {
    for (let i = 0; i < form.length; i++) {
        const input = form[i];
        console.log(input);

        if (input.value === 'Male' && input.checked === true) {
            alert('No entrance');
            e.preventDefault();
            return;
        }
        else if (input.value === 'Female' && input.checked === true || input.value === 'Male' && input.checked === false) {
            form.style.opacity = 0;
            vid.style.opacity = 1;
            form.style.zIndex = '1'
            setTimeout(() => {
                vid.play();
                zoomBtn.style.opacity = 1;
            }, 400)
            // zoomBtn.style.visibility = 'visible';
            // zoomBtn.style.opacity = 1;
            removeChildren(form);
            form.style.right = '0%';
            form.style.opacity = 1;
            e.preventDefault();
            return;
        }
        else if (input.name === 'next') {
            removeFormInput(form, {
                timeoutFunc: () => {
                    removeChildren(form);
                    form.style.transition = 'none';
                    form.style.right = '0%';
                    form.style.opacity = 0;
                    addFormInput({
                        id: 'dogs', class: 'pulse-input form-check-input', name: 'dogs', type: 'radio', value: {
                            first: 'Yes',
                            second: 'No',
                        }
                    }, 'radio');
                }
            }, 'name');

            e.preventDefault();
            return;
        }
        else if (input.name === 'next2') {
            removeFormInput(form, {
                timeoutFunc: () => {
                    removeChildren(form);
                    form.style.transition = 'none';
                    form.style.right = '0%';
                    form.style.opacity = 0;
                    addFormInput({
                        id: 'dogs', class: 'pulse-input form-check-input', name: 'dogs', type: 'radio', value: {
                            first: 'Yes',
                            second: 'No',
                        }
                    }, 'checkbox');
                }
            }, 'dogs');

            e.preventDefault();
            return;
        }
    }
}

form.addEventListener('submit', submitData);

vid.addEventListener('ended', event => {
    zoomBtn.style.visibility = 'visible';
})

zoomBtn.onclick = () => {
    zoomBtn.style.opacity = 0;
    vid.style.height = 'auto';
    vid.style.transform = 'scale(8) translateY(11%) translateX(3%)';
    vid.style.opacity = '0';
    document.body.style.background = 'black';
    setTimeout(() => {
        vidContainer.style.overflow = 'hidden';
    }, 2000);
    heart.style.display = 'block';
    setTimeout(() => {
        header.style.visibility = 'visible';
        header.style.top = '15%';
    }, 2000);
    setTimeout(() => {
        form.style.zIndex = 901;
        addFormInput({ id: 'name', class: 'pulse-input form-control', name: 'Name', type: 'text', placeholder: 'Full name' }, 'text');
        form.style.right = '25%';
        form.style.opacity = 1;
    }, 2000);
}

// {id, class, type, value, placeholder}
// atters {name: 'blabla', type: 'email'}
const addFormInput = (attrs, inputType) => {
    if (inputType === 'text') {
        const input = document.createElement("input");
        const label = document.createElement('label');
        const nextBtn = document.createElement('button');
        for (const attr in attrs) {
            if (attr === 'name') {
                label.setAttribute('for', attrs[attr]);
                label.innerHTML = attrs[attr];
            }
            else if (attr === 'class') {
                label.setAttribute(attr, 'form-label');
            }
            input.setAttribute(attr, attrs[attr])
        }
        input.required = true;
        nextBtn.setAttribute('class', 'btn btn-primary next-btn');
        nextBtn.setAttribute('type', 'submit');
        nextBtn.setAttribute('id', 'next-form-btn')
        nextBtn.setAttribute('name', 'next')
        nextBtn.style.backgroundColor = 'darkred';
        nextBtn.style.borderColor = 'darkred';
        nextBtn.innerHTML = 'Next';
        nextBtn.style.marginTop = '4%';
        form.append(label);
        form.append(input);
        form.append(nextBtn);
    }
    else if (inputType === 'radio') {
        const label1 = document.createElement('label'), label2 = document.createElement('label'), label3 = document.createElement('label');
        const input1 = document.createElement('input'), input2 = document.createElement('input');
        const nextBtn = document.createElement('button');
        const area1 = document.createElement('div');
        const area2 = document.createElement('div');
        area1.setAttribute('class', 'form-check');
        area2.setAttribute('class', 'form-check');
        label2.innerHTML = 'Yes';
        label3.innerHTML = 'No';
        for (const attr in attrs) {
            if (attr === 'name') {
                label1.innerHTML = 'Do you like ' + attrs[attr] + '?';
            }
            else if (attr === 'class') {
                label1.setAttribute(attr, 'form-label');
                label2.setAttribute(attr, 'form-label');
                label3.setAttribute(attr, 'form-label');
            }
            if (attr === 'value') {
                input1.setAttribute(attr, attrs[attr].first);
                input2.setAttribute(attr, attrs[attr].second);
            }
            else {
                input1.setAttribute(attr, attrs[attr]);
                input2.setAttribute(attr, attrs[attr]);
            }
        }
        input1.required = true;
        nextBtn.setAttribute('class', 'btn btn-primary next-btn');
        nextBtn.setAttribute('type', 'submit');
        nextBtn.setAttribute('id', 'next-form-btn')
        nextBtn.setAttribute('name', 'next2')
        nextBtn.style.backgroundColor = 'darkred';
        nextBtn.style.borderColor = 'darkred';
        nextBtn.innerHTML = 'Next';
        nextBtn.style.marginTop = '4%';
        form.append(label1);
        area1.append(label2);
        area1.append(input1);
        form.append(area1);
        area2.append(label3);
        area2.append(input2);
        form.append(area2);
        form.append(nextBtn);
        setTimeout(() => {
            form.style.transition = 'opacity 1s, right 2s';
            form.style.right = '25%';
            form.style.opacity = 1;
        }, 200);
    }
}

const removeFormInput = (formElement, { timeoutFunc }, inputToRemove) => {
    if (inputToRemove === 'name') {
        const input = formElement.querySelector('.form-control');
        const label = formElement.querySelector('.form-label');
        const nextBtn = formElement.querySelector('.btn');
        input.style.right = '100%';
        input.style.opacity = 0;
        label.style.opacity = 0;
        nextBtn.style.opacity = 0;
    } else if (inputToRemove === 'dogs') {
        const divs = formElement.querySelectorAll('.form-check');
        let checkedDiv;
        for (const div of divs) {
            if (div.querySelector('input').checked) {
                checkedDiv = div;
            }
        }
        checkedDiv.style.transform = 'translateX(-100%)';
        divs[0].style.opacity = 0;
        divs[1].style.opacity = 0;
        const label = formElement.querySelector('.form-label');
        const nextBtn = formElement.querySelector('.btn');
        label.style.opacity = 0;
        nextBtn.style.opacity = 0;
    }
    setTimeout(timeoutFunc, 2000);
}

const removeChildren = (element) => {

    while (element.children.length) {
        element.removeChild(element.children[0])
    }
};

const removeInput = (element) => {
    element.removeChild(element.children[1])
};

