const searchWrapper = document.querySelector('.search-input');
const inputBox = document.querySelector('input');
const suggbox = document.querySelector('.autoco-box');

inputBox.addEventListener('keyup', good);

function good(e) {
    let userData = e.target.value // recipocate on the input
    let emptyArray = [];
    if(emptyArray) {
        emptyArray = suggestions.filter(data => {
            // it represent the first letter of a particular word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map(datas => {
            return datas = `<li>${datas}</li>`
        });

        console.log(emptyArray);
        searchWrapper.classList.add('active');
        showSuggesion(emptyArray);
        let allList = suggbox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute('onclick', 'select(this)')
        }
    } else {
        searchWrapper.classList.remove('active');

    };
};

function select(element) {
    let selectUserData = element.textContent; // after typing on the inbox and you dont want to go far straight directly click on the current list
    inputBox.value = selectUserData; // this appaer straight to the search box
    searchWrapper.classList.remove('active');
}

function showSuggesion(list) {
    let listData;
    if(!list.length) {
        userValue = inputBox.value; 
        listData = `<li>${userValue}</li>`; 
    } else {
        listData = list.join('');
    }

    suggbox.innerHTML = listData;
}