const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

const students = xmlDoc.getElementsByTagName('student');
const result = {
  list: []
};

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const nameElement = student.getElementsByTagName('name')[0];
  const firstName = nameElement.getElementsByTagName('first')[0].textContent;
  const lastName = nameElement.getElementsByTagName('second')[0].textContent;
  const age = student.getElementsByTagName('age')[0].textContent;
  const prof = student.getElementsByTagName('prof')[0].textContent;
  const lang = nameElement.getAttribute('lang');
  
  const studentObj = {
    name: `${firstName} ${lastName}`,
    age: parseInt(age),
    prof: prof,
    lang: lang
  };
  
  result.list.push(studentObj);
}

console.log(result);