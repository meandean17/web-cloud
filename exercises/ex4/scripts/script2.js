const mainCont = document.querySelector('.main-container');
const zoomBtn = document.getElementById('entry-btn');
const vidContainer = document.querySelector('.vid-container');
const vid = document.getElementById('welcome-vid');
const heart = document.getElementById('pumping-heart');
const header = document.getElementById('app-header');
const form = document.querySelector('.app-form');
const musicBtn = document.querySelector('.music');
const audio = document.querySelector('.main-audio');

musicBtn.addEventListener('click', () => {
    if (audio.duration > 0 && !audio.paused) {
        audio.pause();
        musicBtn.style.background = `url('./images/volume_off_FILL1_wght400_GRAD0_opsz48.svg')`;
        musicBtn.style.backgroundColor = 'rgb(58, 0, 0)';
    }
    else {
        audio.play();
        musicBtn.style.background = `url('./images/volume_up_FILL1_wght400_GRAD0_opsz48.svg')`;
        musicBtn.style.backgroundColor = 'rgb(58, 0, 0)';
    }
})

const submitData = (e) => {
    for (let i = 0; i < form.length; i++) {
        const input = form[i];
        if (input.value === 'Male' && input.checked === true) {
            alert('No entry for males');
            e.preventDefault();
            return;
        }
        else if (input.value === 'Female' && input.checked === true || input.value === 'Male' && input.checked === false) {
            form.style.opacity = 0;
            vid.style.opacity = 1;
            form.style.zIndex = '1'
            setTimeout(() => {
                vid.play();
            }, 400)
            setTimeout(() => {
                zoomBtn.style.visibility = 'visible';
                zoomBtn.style.opacity = 1;
            }, 4000)

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
                        id: 'algorithm', class: 'pulse-input form-range', name: 'algorithm', type: 'range', minmax: {
                            min: '0',
                            max: '100',
                        }
                    }, 'range');
                }
            }, 'dogs');

            e.preventDefault();
            return;
        }
        else if (input.name === 'next3') {
            removeFormInput(form, {
                timeoutFunc: () => {
                    mainCont.removeChild(form);
                }
            }, 'range');
            setTimeout(() => {
            }, 2000)
            const pArea1 = document.createElement('div');
            pArea1.classList.add('post-submission');
            pArea1.style.opacity = '0';
            pArea1.style.top = '23%';
            const p1 = document.createElement('p');
            p1.innerHTML = "Thank you for filling out the girlfriend application, you will be contacted shortly.";
            const pArea2 = document.createElement('div');
            pArea2.classList.add('post-submission');
            pArea2.style.opacity = '0';
            pArea2.style.top = '80%';
            const p2 = document.createElement('p');
            p2.innerHTML = "Oh wait... I forgot to ask for your number";
            pArea1.append(p1);
            pArea2.append(p2);
            mainCont.append(pArea1);
            mainCont.append(pArea2);
            setTimeout(() => {
                pArea1.style.opacity = '1';
                pArea1.style.top = '35%';
            }, 2000)
            setTimeout(() => {
                pArea2.style.opacity = '1';
                pArea2.style.top = '55%';
            }, 5000)
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
    zoomBtn.style.visibility = 'hidden';
    vid.style.height = 'auto';
    vid.style.transform = 'scale(8) translateY(11%) translateX(3%)';
    vid.style.opacity = '0';
    document.body.style.background = 'black';
    document.querySelector('.main-container').style.background = 'black';
    setTimeout(() => {
        vidContainer.style.overflow = 'hidden';
    }, 2000);
    heart.style.display = 'block';
    musicBtn.style.visibility = 'visible';
    setTimeout(() => {
        musicBtn.style.opacity = '1';
        header.style.visibility = 'visible';
        header.style.top = '15%';
    }, 2000);
    setTimeout(() => {
        form.style.zIndex = 901;
        addFormInput({ id: 'name', class: 'pulse-input form-control', name: 'Name', type: 'text', placeholder: 'Jennifer Lopez' }, 'text');
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
                label.innerHTML = 'Full ' + attrs[attr];
            }
            else if (attr === 'id') {
                label.setAttribute('for', attrs[attr]);
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
        label2.innerHTML = 'Love them';
        label3.innerHTML = 'More of a cat person';
        for (const attr in attrs) {
            if (attr === 'name') {
                label1.innerHTML = 'Do you like ' + attrs[attr] + '?';
                input1.setAttribute(attr, attrs[attr]);
                input2.setAttribute(attr, attrs[attr]);
            }
            else if (attr === 'class') {
                label1.setAttribute(attr, 'form-label');
                label2.setAttribute(attr, 'form-label');
                label3.setAttribute(attr, 'form-label');
            }
            else if (attr === 'id') {
                label2.setAttribute('for', attrs[attr] + '1');
                label3.setAttribute('for', attrs[attr] + '2');
            }
            if (attr === 'value') {
                input1.setAttribute(attr, attrs[attr].first);
                input2.setAttribute(attr, attrs[attr].second);
            }
            else {
                if (attr === 'id') {
                    input1.setAttribute(attr, attrs[attr] + '1');
                    input2.setAttribute(attr, attrs[attr] + '2');
                }
                else {
                    input1.setAttribute(attr, attrs[attr]);
                    input2.setAttribute(attr, attrs[attr]);
                }
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
    else if (inputType === 'range') {
        const label1 = document.createElement('label'), label2 = document.createElement('label'), label3 = document.createElement('label');
        const input1 = document.createElement('input');
        const nextBtn = document.createElement('button');
        const area1 = document.createElement('div');
        const area2 = document.createElement('div');
        area1.setAttribute('class', 'form-check');
        area2.setAttribute('class', 'form-check');
        label2.innerHTML = 'What?';
        label3.innerHTML = 'Better than Avivit';
        label2.style.fontSize = '1rem';
        label3.style.fontSize = '1rem';
        for (const attr in attrs) {
            if (attr === 'name') {
                label1.innerHTML = 'How well do you know Dijkstras algorithm?';
                input1.setAttribute(attr, attrs[attr]);
            }
            else if (attr === 'class') {
                label1.setAttribute(attr, 'form-label');
                label2.setAttribute(attr, 'form-label');
                label3.setAttribute(attr, 'form-label');
                input1.setAttribute(attr, attrs[attr]);
            }
            else if (attr === 'id') {
                label1.setAttribute('for', attrs[attr]);
            }
            else if (attr === 'value') {
                input1.setAttribute(attr, attrs[attr].first);
            }
            else if (attr === 'minmax') {
                input1.setAttribute('min', attrs[attr].min);
                input1.setAttribute('max', attrs[attr].max);
            }
            else {
                input1.setAttribute(attr, attrs[attr]);
            }
        }
        input1.required = true;
        input1.style.marginInline = '12px';
        input1.style.width = '33%';
        area1.style.paddingLeft = 0;
        nextBtn.setAttribute('class', 'btn btn-primary next-btn');
        nextBtn.setAttribute('type', 'submit');
        nextBtn.setAttribute('id', 'next-form-btn')
        nextBtn.setAttribute('name', 'next3')
        nextBtn.style.backgroundColor = 'darkred';
        nextBtn.style.borderColor = 'darkred';
        nextBtn.innerHTML = 'Next';
        nextBtn.style.marginTop = '4%';
        form.append(label1);
        area1.append(label2);
        area1.append(input1);
        area1.append(label3);
        // form.append(label2);
        // form.append(input1);
        // form.append(label3);
        form.append(area1);
        form.append(nextBtn);
        form.style.width = '34%';
        setTimeout(() => {
            form.style.transition = 'opacity 1s, right 2s';
            form.style.right = '12%';
            form.style.opacity = 1;
        }, 200);
    }
}

const removeFormInput = (formElement, { timeoutFunc }, inputToRemove) => {
    if (inputToRemove === 'name') {
        const input = formElement.querySelector('.form-control');
        const label = formElement.querySelector('.form-label');
        const nextBtn = formElement.querySelector('.btn');
        input.style.right = '165%';
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
        checkedDiv.style.transform = 'translateX(-150%)';
        divs[0].style.opacity = 0;
        divs[1].style.opacity = 0;
        const label = formElement.querySelector('.form-label');
        const nextBtn = formElement.querySelector('.btn');
        label.style.opacity = 0;
        nextBtn.style.opacity = 0;
    }
    else if (inputToRemove === 'range') {
        const div = formElement.querySelector('.form-check');
        div.style.transform = 'translateX(-100%)';
        div.style.opacity = 0;
        const label = formElement.querySelector('.form-label');
        const nextBtn = formElement.querySelector('.btn');
        label.style.opacity = 0;
        nextBtn.style.opacity = 0;
        header.style.top = '20%';
        header.style.opacity = '0';
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


