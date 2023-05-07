const zoomBtn = document.getElementById('entry-btn');
const vidContainer = document.querySelector('.vid-container');
const vid = document.getElementById('welcome-vid');
const heart = document.getElementById('pumping-heart');
const header = document.getElementById('app-header');
const form = document.querySelector('.app-form');

const submitData = (e) => {
    for (let i = 0; i < form.length; i++) {
        const input = form[i];
        if (input.value === 'Male' && input.checked === true) {
            alert('No entrance');
            e.preventDefault();
            return;
        }
        else if (input.value === 'Female' && input.checked === true) {
            form.style.opacity = 0;
            vid.style.opacity = 1;
            form.style.zIndex = '1'
            setTimeout(() => {
                vid.play();
                zoomBtn.style.opacity = 1;
            }, 700)
            // zoomBtn.style.visibility = 'visible';
            // zoomBtn.style.opacity = 1;
            removeChildren(form);
            form.style.right = 0;
            form.style.opacity = 1;
            e.preventDefault();

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
        addFormInput({ id: 'email', class: 'form-control email pulse-input', name: 'Email', type: 'email', placeholder: 'honeybun@website.com' });
    }, 2000);
}

// {id, class, type, value, placeholder}
// atters {name: 'blabla', type: 'email'}
const addFormInput = (attrs) => {
    const input = document.createElement("input");
    const label = document.createElement('label');
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
    form.append(label);
    form.append(input);

    form.style.right = '25%';
    form.style.opacity = 1;
}

const removeChildren = (element) => {
    while (element.children.length) {
        element.removeChild(element.children[0])
    }
};


