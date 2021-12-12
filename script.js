let inp = document.querySelector('input');
let btnAdd = document.getElementById('add');
let btnRemove = document.getElementById('remove');
let ul = document.querySelector('ul');
let div = document.querySelector('div');
let img = document.querySelector('img');
let countLi = 0;

    inp.addEventListener('focus', function () {
        inp.style.borderColor = "blue";
        inp.style.backgroundColor = "lightblue";
    })

    inp.addEventListener('blur', function () {
        inp.style.borderColor = "grey";
        inp.style.backgroundColor = "white";
    })

    btnAdd.addEventListener('click', function () {   
        if (!inp.value) {
            inp.style.borderColor = "red";
            inp.style.backgroundColor = "pink";
            } else {
        let li = document.createElement('li');
        li.innerHTML = inp.value;
        ul.append(li);
        countLi++;
        inp.value="";
            if (countLi >= 5) {
                btnAdd.disabled = true;   
            }
        }

        let liElems = document.querySelectorAll('li');
        for (let liElem of liElems) {
            console.log(liElem);
            liElem.addEventListener('click', function () {
                liElem.classList.toggle('textDecor');
            });
        }
        btnRemove.addEventListener('click', function () {
            for (let liElem of liElems) {
                liElem.remove();
            }
        })
    })

    img.addEventListener('click', function () {
        img.src = "./images/time-to-plan.jpg";
    })
    
