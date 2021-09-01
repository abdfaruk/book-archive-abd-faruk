const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';

    const url = `http://openlibrary.org/search.json?q=${searchText}
    `;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data.docs));
}

// display result
const displayResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach (doc => {
        
        // console.log(doc);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="card" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://covers.openlibrary.org/b/id/{cover_i}-L.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${doc.title.slice(0, 40)}</h5>
              <p class="card-text">by : ${doc.author_name}</p>
              <p class="card-text">published by : ${doc.publisher}</p>
              <p class="card-text"><small class="text-muted">First published in ${doc.first_publish_year}</small></p>
            </div>
          </div>
        </div>
      </div>
        `;
        searchResult.appendChild(div);

        // how many result found
        const searchResult2 = document.getElementById('result-found');
        searchResult2.textContent = '';
        const div2 = document.createElement('div2');
        div2.innerHTML = `
            <div style="width: 700px;" class="mx-auto rounded-3 p-1 mb-2 bg-secondary text-white text-center">
                <h3>something</h3>
            </div>
        `;
        searchResult2.appendChild(div2);
    })
};