let listData = [{
  name: 'Екатерина',
  surname: 'Кабанова',
  lastname: 'Константиновна',
  education: 'Танцы с бубном',
  age: new Date('November 29, 1993'),
  dateStudy: 2022,

}, {
  name: 'Пиво',
  surname: 'Коньяк',
  lastname: 'Виноводочникович',
  education: 'Алкоголь',
  age: new Date('March 08, 1998'),
  dateStudy: 2019,

},{
  name: 'Артём',
  surname: 'Кабанов',
  lastname: 'Викторович',
  education: 'Финансы и кредит',
  age: new Date('January 06, 1993'),
  dateStudy: 2015,

}, {
  name: 'Морковь',
  surname: 'Свекла',
  lastname: 'Кабачкововна',
  education: 'Садоводство',
  age: new Date('February 25, 2005'),
  dateStudy: 2010,

}, {
  name: 'Редбул',
  surname: 'Чай',
  lastname: 'Кофеинович',
  education: 'Капучино',
  age: new Date('September 06, 2001'),
  dateStudy: 2021,

}
];

let sortObj = 'fio';
let sortDir = true;
/*Create form*/

const app = document.getElementById('app');

const titleApp = document.createElement('h1');
titleApp.textContent = 'Список студентов';
titleApp.classList.add('mb-5');

const formCreate = document.createElement('form');
formCreate.classList.add('mb-5');


const inputCreateName = document.createElement('input');
inputCreateName.classList.add('form-control', 'mb-3');

inputCreateName.placeholder = 'Введите имя';
inputCreateName.required = true;



const inputCreateSurname = document.createElement('input');
inputCreateSurname.classList.add('form-control', 'mb-3');
inputCreateSurname.placeholder = 'Введите фамилию';
inputCreateSurname.required = true;

const inputCreateMiddlename = document.createElement('input');
inputCreateMiddlename.classList.add('form-control', 'mb-3');

inputCreateMiddlename.placeholder = 'Введите отчество';
inputCreateMiddlename.required = true;

const inputCreateBirthDate = document.createElement('input');
inputCreateBirthDate.classList.add('form-control', 'mb-3');
inputCreateBirthDate.type = 'Date';
inputCreateBirthDate.min = new Date('January 02, 1900').toISOString().split('T')[0];
inputCreateBirthDate.max = new Date().toISOString().split('T')[0];
inputCreateBirthDate.required = true;

const inputCreateEducation = document.createElement('input');
inputCreateEducation.classList.add('form-control', 'mb-4');
inputCreateEducation.placeholder = 'Введите факультет';
inputCreateEducation.required = true;

const inputCreateStudyDate = document.createElement('input');
inputCreateStudyDate.classList.add('form-control', 'mb-3');
inputCreateStudyDate.placeholder = 'Введите год начала обучения';
inputCreateStudyDate.type = 'number';
inputCreateStudyDate.setAttribute('min', 2000);
inputCreateStudyDate.setAttribute('max', new Date().getFullYear());
inputCreateStudyDate.required = true;

const btnFormCreate = document.createElement('button');
btnFormCreate.type = 'submit';
btnFormCreate.classList.add('btn', 'btn-outline-success');
btnFormCreate.textContent = 'Добавить студента';


app.append(titleApp);
formCreate.append(inputCreateName);
formCreate.append(inputCreateSurname);
formCreate.append(inputCreateMiddlename);
formCreate.append(inputCreateBirthDate);
formCreate.append(inputCreateStudyDate);
formCreate.append(inputCreateEducation);
formCreate.append(btnFormCreate);
app.append(formCreate);


/*Filter form*/


const formFilter = document.createElement('form');
formFilter.classList.add('mb-5');
const titleFilter = document.createElement('h4');
titleFilter.classList.add('mb-3');
titleFilter.textContent = 'Фильтрация';

const inputFilterFio = document.createElement('input');
inputFilterFio.classList.add('mb-3', 'form-control');
inputFilterFio.placeholder = 'ФИО';

const inputFilterEducation = document.createElement('input');
inputFilterEducation.classList.add('mb-3', 'form-control');
inputFilterEducation.placeholder = 'Факультет';

const inputFilterStartStudyDate = document.createElement('input');
inputFilterStartStudyDate.classList.add('mb-3', 'form-control');
inputFilterStartStudyDate.placeholder = 'Год начала обучения';

const inputFilterEndStudyDate = document.createElement('input');
inputFilterEndStudyDate.classList.add('mb-3', 'form-control');
inputFilterEndStudyDate.placeholder = 'Год окончания обучения';

formFilter.append(titleFilter);
formFilter.append(inputFilterFio);
formFilter.append(inputFilterEducation);
formFilter.append(inputFilterStartStudyDate);
formFilter.append(inputFilterEndStudyDate);
app.append(formFilter);


/*Create table*/

const table = document.createElement('table');
table.classList.add('table', 'table-striped', 'table-hover');
const tableHead = document.createElement('thead');
const tableBody = document.createElement('tbody');
const tableHeadTr = document.createElement('tr');

const tableHeadThFio = document.createElement('th');
const tableHeadThFioBtn = document.createElement('button');
tableHeadThFioBtn.classList.add('btn');
tableHeadThFioBtn.textContent = 'ФИО';



const tableHeadThEducation = document.createElement('th');
const tableHeadThEducationBtn = document.createElement('button');
tableHeadThEducationBtn.classList.add('btn');
tableHeadThEducationBtn.textContent = 'Факультет';

const tableHeadThAge = document.createElement('th');
const tableHeadThAgeBtn = document.createElement('button');
tableHeadThAgeBtn.classList.add('btn');
tableHeadThAgeBtn.textContent = 'Дата рождения и возраст';

const tableHeadThStudyDate = document.createElement('th');
const tableHeadThStudyDateBtn = document.createElement('button');
tableHeadThStudyDateBtn.classList.add('btn');
tableHeadThStudyDateBtn.textContent = 'Годы обучения';

tableHeadThFio.append(tableHeadThFioBtn);
tableHeadThAge.append(tableHeadThAgeBtn);
tableHeadThStudyDate.append(tableHeadThStudyDateBtn);
tableHeadThEducation.append(tableHeadThEducationBtn);


tableHeadTr.append(tableHeadThFio);
tableHeadTr.append(tableHeadThEducation);
tableHeadTr.append(tableHeadThAge);
tableHeadTr.append(tableHeadThStudyDate);

tableHead.append(tableHeadTr);
table.append(tableHead);
table.append(tableBody);
app.append(table);


// add element


function createNewUser(oneUser) {

  const userTr = document.createElement('tr');
  const userFio = document.createElement('th');
  const userEducation = document.createElement('th');
  const userAge = document.createElement('th');
  const userStudy = document.createElement('th');

  userFio.textContent = oneUser.fio;
  userEducation.textContent = oneUser.education;
  userAge.textContent = `${oneUser.newdata} (${oneUser.newAge} лет)`;
  userStudy.textContent = oneUser.newDateStudy;

  userTr.append(userFio);
  userTr.append(userEducation);
  userTr.append(userAge);
  userTr.append(userStudy);

  tableBody.append(userTr)

  return userTr

}


// render

function render(arr) {
  tableBody.innerHTML = '';
  let copyListData = [...arr];


  for (const oneUser of copyListData) {
    oneUser.fio = oneUser.surname + ' ' + oneUser.name + ' ' + oneUser.lastname;
    oneUser.newEndDateStudy = String(oneUser.dateStudy + 4);
    oneUser.newDateStudy = `${oneUser.dateStudy} - ${oneUser.newEndDateStudy} ${getCourse(copyListData)}`;
    oneUser.education;

  function getBirthDayString(copyListData) {

    let year = oneUser.age.getFullYear();
    let month = oneUser.age.getMonth() + 1;
    let day = oneUser.age.getDate();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    return day + '.' + month + '.' + year;
  }

  oneUser.newdata = getBirthDayString(copyListData)

  function getAge(copyListData){

  let year = oneUser.age.getFullYear();
  let currentYear = new Date()
  return currentYear.getFullYear() - year;
  }

 oneUser.newAge = getAge(copyListData)

  function getCourse(copyListData) {
    let course;
    let currentYear = new Date();
    let year = currentYear.getFullYear();
    let month = currentYear.getMonth();

    if (year - oneUser.dateStudy === 0 && month > 8) course = '(1 курс)';
    if (year - oneUser.dateStudy === 1 && month <= 8) course = '(1 курс)';
    if (year - oneUser.dateStudy === 1 && month > 8) course = '(2 курс)';
    if (year - oneUser.dateStudy === 2 && month <= 8) course = '(2 курс)';
    if (year - oneUser.dateStudy === 2 && month > 8) course = '(3 курс)';
    if (year - oneUser.dateStudy === 3 && month <= 8) course = '(3 курс)';
    if (year - oneUser.dateStudy === 3 && month > 8) course = '(4 курс)';
    if (year - oneUser.dateStudy === 4 && month <= 8) course = '(4 курс)';
    if (year - oneUser.dateStudy === 4 && month > 8) course = '(Закончил)';
    if (year - oneUser.dateStudy > 4) course = '(Закончил)';
    return course

  }
}

  //sort
  copyListData = copyListData.sort((a, b) => {
    let sort = a[sortObj] < b[sortObj];
    if (sortDir == false) sort = a[sortObj] > b[sortObj];
    if (sort) return - 1;

  })

  //Filter

  if (inputFilterFio.value.trim() !== '') {
    copyListData = copyListData.filter((oneUser) => {
      if (oneUser.fio.includes(inputFilterFio.value.trim())) return true
    })
  }

  if (inputFilterEducation.value.trim() !== '') {
    copyListData = copyListData.filter((oneUser) => {
      if (oneUser.education.includes(inputFilterEducation.value.trim())) return true
    })
  }

  if (inputFilterStartStudyDate.value.trim() !== '') {
    copyListData = copyListData.filter((oneUser) => {
      if (String(oneUser.dateStudy).includes(inputFilterStartStudyDate.value.trim())) return true
    })
  }

  if (inputFilterEndStudyDate.value.trim() !== '') {
    copyListData = copyListData.filter((oneUser) => {
      if ((oneUser.newEndDateStudy).includes(inputFilterEndStudyDate.value.trim())) return true // нужно исправить
    })
  }

  //render

  for (const oneUser of copyListData) {
    const userTr = createNewUser(oneUser);
    tableBody.append(userTr)
  }
}

render(listData)

formCreate.addEventListener('submit', (e) => {

  e.preventDefault()

  listData.push({
    surname: inputCreateSurname.value.trim(),
    name: inputCreateName.value.trim(),
    lastname: inputCreateMiddlename.value.trim(),
    education: inputCreateEducation.value.trim(),
    age: inputCreateBirthDate.valueAsDate,
    dateStudy: parseInt(inputCreateStudyDate.value.trim()),
  });

  render(listData)

  //Input value clean
  inputCreateSurname.value = '';
  inputCreateName.value = '';
  inputCreateMiddlename.value = '';
  inputCreateEducation.value = '';
  inputCreateBirthDate.value = '';
  inputCreateStudyDate.value = '';
})

// Sort object

tableHeadThFioBtn.addEventListener('click', () => {
  sortObj = 'fio';
  sortDir = !sortDir;
  render(listData)
});

tableHeadThAgeBtn.addEventListener('click', () => {
  sortObj = 'age';
  sortDir = !sortDir;
  render(listData)
});

tableHeadThStudyDateBtn.addEventListener('click', () => {
  sortObj = 'dateStudy';
  sortDir = !sortDir;
  render(listData)
});

tableHeadThEducationBtn.addEventListener('click', () => {
  sortObj = 'education';
  sortDir = !sortDir;
  render(listData)
});

// Filter form

formFilter.addEventListener('submit', (e) => {
  e.preventDefault();
});

inputFilterFio.addEventListener('input', () => {
  render(listData);
});

inputFilterEducation.addEventListener('input', () => {
  render(listData);
});

inputFilterStartStudyDate.addEventListener('input', () => {
  render(listData);
});

inputFilterEndStudyDate.addEventListener('input', () => {
  render(listData);
});


