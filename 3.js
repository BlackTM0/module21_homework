var namePerson;
var visitTime


if(!localStorage.getItem('name')) {
 namePerson = prompt('Ваше имя'); 
 visitTime = new Date(); 

localStorage.setItem('name', namePerson); 
localStorage.setItem('time', visitTime); 



}
else { 
    namePerson = localStorage.getItem('name');
    visitTime = localStorage.getItem('time');
    alert(`Добрый день, ${namePerson}, давно не виделись! В последний раз Вы были у нас ${visitTime}` );
}