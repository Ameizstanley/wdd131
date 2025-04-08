const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const listElememnt = document.querySelector('ul');


const listElement = document.createElement('li');

const deletebuttonElement = document.createElement('button')
deletebuttonElement.textContent = 'delete';

listItem.textContent = InputValue ;

deleteItem.textContent = '✔'

listElememnt.appendChild('li')
listElememnt.append('✔')

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {const inputElement = document.querySelector('input');
        const buttonElement = document.querySelector('button');
        const listElememnt = document.querySelector('ul');
        
        
        const listElement = document.createElement('li');
        
        const deletebuttonElement = document.createElement('button')
        deletebuttonElement.textContent = 'delete';
        
        listItem.textContent = InputValue ;
        
        deleteItem.textContent = '✔'
        
        listElememnt.appendChild('li')
        listElememnt.append('✔') }

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
          });
          
          input.value = '';

          input.focus();



});


const chapterArray = getChapterList();

function getChapterList() {

    
    return [];

}
