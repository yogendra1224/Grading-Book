const appRoot = document.getElementById('app-root');

/*
write your code here

list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/
/* eslint-disable no-magic-numbers */

appRoot.classList.add('container');
const form = document.createElement('form');
const br = document.createElement('br');
const h1 = document.createElement('h1');
h1.innerText = 'Countries Search';
appRoot.appendChild(h1);

const label = document.createElement('label');
label.innerText = 'Please choose type of serach:';

appRoot.appendChild(form);
const radioRegion = document.createElement('input');
const radioLabel = document.createElement('label');
radioLabel.innerHTML = 'By region<br/>';
radioRegion.type = 'radio';
radioRegion.name = 'search';
radioRegion.id = 'region';
radioRegion.value = 'region';

const div=document.createElement('div');
div.id='radios'
form.appendChild(div);
div.appendChild(label)
div.appendChild(radioRegion);
div.appendChild(radioLabel);

const languageRegion = document.createElement('input');
const languageLabel = document.createElement('label');
languageLabel.innerText = 'By Language';
languageRegion.setAttribute('name', 'search');
languageRegion.setAttribute('type', 'radio');
languageRegion.setAttribute('id', 'language');
languageRegion.setAttribute('value', 'language');

div.appendChild(languageRegion);
div.appendChild(languageLabel);

const searchQuery = document.createElement('label');
searchQuery.innerHTML = ' <br/>Please Chose search query:';
form.appendChild(searchQuery);
const select = document.createElement('select');
select.disabled = true;
select.id = 'select';
select.appendChild(document.createElement('option')).textContent =
  'Select value';
form.appendChild(select);
const div1=document.createElement('div');
div1.id='tableId';
form.appendChild(div1);

const regionsList = externalService.getRegionsList();
const languagesList = externalService.getLanguagesList();
const radioId1 = document.getElementById('region');
const radioId2 = document.getElementById('language');

function countryIncreasing(){

          let table, i, x, y;
          table = document.getElementById('table2');
          let switching = true;
          while (switching) {
            switching = false;
            let rows = table.rows;
            let shouldSwitch;         
            for (i = 1; i < rows.length - 1; i++) {
              shouldSwitch = false;
              x = rows[i].getElementsByTagName('TD')[0];
              y = rows[i + 1].getElementsByTagName('TD')[0];
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
              }
            }
            if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }
          }

}
function countryDecreasing(){
        let table, i, x, y;
        table = document.getElementById('table2');
        let switching = true;
        while (switching) {
          switching = false;
          let rows = table.rows;
          let shouldSwitch;       
          for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;   
            x = rows[i].getElementsByTagName('TD')[0];
            y = rows[i + 1].getElementsByTagName('TD')[0];

            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }

} 
function areaIncreasing(){
 
          let table, i, x, y;
          table = document.getElementById('table2');
          let switching = true;

          while (switching) {
            switching = false;
            let rows = table.rows;
            let shouldSwitch;

            for (i = 1; i < rows.length - 1; i++) {
              shouldSwitch = false; 
              x = rows[i].getElementsByTagName('TD')[4];
              y = rows[i + 1].getElementsByTagName('TD')[4];
              if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
              }
            }
            if (shouldSwitch) {   
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
            }
          }
        
}
function areaDecreasing(){

  let table, i, x, y;
  table = document.getElementById('table2');
  let switching = true;

  while (switching) {
    switching = false;
    let rows = table.rows;
    let shouldSwitch;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('TD')[4];
      y = rows[i + 1].getElementsByTagName('TD')[4];

      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

}
function tableUpdate(optionValue,radioValue){
  const div11=document.getElementById('tableId');
  div11.innerText='';
  const table = document.createElement('table');
  table.id = 'table2';
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const tr = document.createElement('tr');
  tbody.appendChild(tr);
  const th = document.createElement('th');
  th.innerHTML = 'Country name   <span class=" arrow" value="increasing">&#8593;</span>';
  tr.appendChild(th);
  const th2 = document.createElement('th');
  th2.innerText = 'Capital';
  tr.appendChild(th2);
  const th3 = document.createElement('th');
  th3.innerText = 'World Region';
  tr.appendChild(th3);
  const th4 = document.createElement('th');
  th4.innerText = 'Languages';
  th4.classList.add('languages');
  tr.appendChild(th4);
  const th5 = document.createElement('th');
  th5.innerHTML ='Area <span class="upDownArrow arrowR" value="unsort">&#8597;</span>';
  tr.appendChild(th5);
  const th6 = document.createElement('th');
  th6.innerHTML = 'Flag';
  tr.appendChild(th6);
  div1.appendChild(table);
  const listByLanguage =
    externalService.getCountryListByLanguage(optionValue);
  const listByRegion=externalService.getCountryListByRegion(optionValue);
  let lists;
  if(radioValue==='region'){
    lists=listByRegion;
  }else if(radioValue==='language'){
    lists=listByLanguage;
  }
  lists.forEach((countryDetail) => {
    const tr1 = document.createElement('tr');
    tr1.id='trow';
    tbody.appendChild(tr1);
    for (let i=0; i < 6; ++i) {

      const td = document.createElement('td');
      tr1.appendChild(td);
      if (i === 0) {
        td.innerHTML = countryDetail['name'];
      } else if (i === 1) {
        td.innerHTML = countryDetail['capital'];
      } else if (i === 2) {
        td.innerHTML = countryDetail['region'];
      } else if (i === 3) {
        const languages = countryDetail['languages'];
        for (const lang in languages) {
          if (true) {
            const element = languages[lang];
            td.innerHTML += `${element}, `;
          }
        }
      } else if (i === 4) {
        td.innerHTML = countryDetail['area'];
      } else if (i === 5) {
        const img = document.createElement('img');
        const url =countryDetail['flagURL'];
        img.src=`${url}`
        td.appendChild(img);
      }
    }

  })
  countryIncreasing();

  const countryInc = document.querySelector('.arrow');
let sort=countryInc.getAttribute('value');
const areaInc = document.querySelector('.arrowR');
  let sortA=areaInc.getAttribute('value');
  countryInc.addEventListener('click',function(){
    areaInc.innerHTML='&#8597;';
    areaInc.setAttribute('value','unsort');
    if(sort==='unsort'){
      countryIncreasing();
      countryInc.innerHTML='&#8593';
    countryInc.setAttribute('value','increasing');
    sort='increasing';
    }else if(sort==='increasing'){

      countryDecreasing();
      countryInc.innerHTML='&#8595;'
      countryInc.setAttribute('value','decreasing');
      sort='decreasing';
   }else if(sort==='decreasing'){
    countryIncreasing()
    countryInc.innerHTML='&#8593;'
    countryInc.setAttribute('value','increasing');
    sort='increasing';
   }
  })

  areaInc.addEventListener('click',function(){
    countryInc.innerHTML='&#8597;';
    countryInc.setAttribute('value','unsort');
    if(sortA==='unsort'){
      areaIncreasing();
      areaInc.innerHTML='&#8593';
    areaInc.setAttribute('value','increasing');
    sortA='increasing';
    }else if(sortA==='increasing'){
      areaDecreasing();
      areaInc.innerHTML='&#8595';
      areaInc.setAttribute('value','decreasing');
      sortA='decreasing';
   }else if(sortA==='decreasing'){
    areaIncreasing()
    areaInc.innerHTML='&#8593';
    areaInc.setAttribute('value','increasing');
    sortA='increasing';
   }
  })
 
}
const p = document.createElement('p');
p.id='para1'
p.innerText = '';
p.innerText = 'No items, please choose search query';
const r=document.getElementById('radios');
r.addEventListener('change',function(e){
let radioValue=e.target.value;
select.innerHTML = '';
select.appendChild(document.createElement('option')).textContent ='Select value';
  const selectElement = document.getElementById('select');
if(radioValue==='region'){
  regionsList.forEach((region) => {
    const option = document.createElement('option');
    option.value = region;
    option.textContent = region;
    select.appendChild(option);
  });
  if(selectElement.value==='Select value'){
    const tableDiv = document.getElementById('tableId');
      tableDiv.innerText = '';
    p.innerText = 'No items, please choose search query';
    form.appendChild(p)
  }

  selectElement.addEventListener('input', function (e) {
    p.innerText='';
    let optionValue = e.target.value;
    // eslint-disable-next-line brace-style
    tableUpdate(optionValue,radioValue) })
}
select.disabled = false;

if(radioValue==='language'){
  languagesList.forEach((language) => {
    const option = document.createElement('option');
    option.value = language;
    option.textContent = language;
    select.appendChild(option);
  });
  if(selectElement.value==='Select value'){
    const tableDiv = document.getElementById('tableId');
      tableDiv.innerText = '';
    p.innerText = 'No items, please choose search query';
    form.appendChild(p)
  }
  selectElement.addEventListener('input', function (e) {
    p.innerText='';
    let optionValue = e.target.value;
    // eslint-disable-next-line brace-style
    tableUpdate(optionValue,radioValue) })
}
select.disabled = false;
})