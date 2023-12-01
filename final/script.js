document.addEventListener('DOMContentLoaded', function() {
    const pageNumberInput = document.querySelector('#pageNumberInput');
    const limitInput = document.querySelector('#limitInput');
    const requestButton = document.querySelector('#requestButton');
    const imageList = document.querySelector('#imageList');

    requestButton.addEventListener('click', function() {
      const pageNumber = parseInt(pageNumberInput.value);
      const limit = parseInt(limitInput.value);

      if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) {
        imageList.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        return;
      }

      if (isNaN(limit) || limit < 1 || limit > 10) {
        imageList.innerHTML = 'Лимит вне диапазона от 1 до 10';
        return;
      }

      fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {
          imageList.innerHTML = '';

          data.forEach(image => {
            const listItem = document.createElement('li');
            const imageElement = document.createElement('img');

            imageElement.src = image.download_url;

            listItem.appendChild(imageElement);
            imageList.appendChild(listItem);
          });

     
          localStorage.setItem('lastRequest', JSON.stringify({ pageNumber, limit }));
        })
        .catch(error => console.log('error', error));
    });

   
    const lastRequest = localStorage.getItem('lastRequest');
    if (lastRequest) {
      const { pageNumber, limit } = JSON.parse(lastRequest);
      pageNumberInput.value = pageNumber;
      limitInput.value = limit;
      requestButton.click(); 
    }
  });