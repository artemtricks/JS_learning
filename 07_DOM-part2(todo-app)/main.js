(function() {

  let array = [],
    listName = '';




   function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.classList.add('pt-5', 'pb-3');
    appTitle.innerHTML = title;

    return appTitle;

    }


    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');
        button.id = 'btnMain';
        button.disabled = true;

        input.addEventListener('input', () => {
            if (input.value != '') {
                btnMain.disabled = false;
            }
        });

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-outline-dark');
        button.textContent = '+';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);



        return {
            form,
            input,
            button,
        };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');

        return list;
    }

    function createTodoItem(obj) {
        let item = document.createElement('li');
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = obj.name;

        let buttonGroup = document.createElement('div');
        buttonGroup.classList.add('btn-group', 'btn-group-sm');

        let doneButton = document.createElement('button');
        doneButton.classList.add('btn', 'btn-outline-success', 'mr-2');
        doneButton.innerHTML = '&#10003';


        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-outline-danger');
        deleteButton.innerHTML = '&#10007';

        doneButton.addEventListener('click',() => {
            obj.done = !obj.done;
            item.classList.toggle('list-group-item-success')
            saveList(array, listName);
        });

        deleteButton.addEventListener('click', () => {
            if (confirm('Вы уверенны?')) {
                item.remove();
                for (let i = 0; array.length > i; i++) {
                    if (array[i].id == obj.id) {
                        array.splice(i,1);
                    }
                }
                saveList(array, listName);
            }
            });

            if (obj.done == true) {
                item.classList.add('list-group-item-success');
            }

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,

        }
    }


    let getNewId = (arr) => {
        let max = 0;
        for (const item of arr) {
           console.log(item)
            if (item.id > max) {
                max = item.id
            }
        }
        return max + 1;
    }

    function saveList(arr, keyName) {
        localStorage.setItem(keyName, JSON.stringify(arr))
    }


function createTodoApp(container, title = 'Список дел', keyName, ExArray = []) {

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();


    listName = keyName;
    array = ExArray;



    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    let localData = localStorage.getItem(listName)

    if (localData !== null && localData !== '') {
        array = JSON.parse(localData)
    }
        for (const itemList of array) {
            let todoItem = createTodoItem(itemList);
            todoList.append(todoItem.item)
        }




    todoItemForm.form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!todoItemForm.input.value) {
            return;
        }

        let newItem = {
            id: getNewId(array),
            name: todoItemForm.input.value,
            done: false,
        }



        let todoItem = createTodoItem(newItem);


        array.push(newItem);
        saveList(array, listName)

        todoList.append(todoItem.item)
        todoItemForm.input.value = '';
        document.getElementById('btnMain').disabled = true;

    })
}

window.createTodoApp = createTodoApp;

})();
