Md Baizid Bustami
const phoneSearch = () => {
    const searchBox = document.getElementById('search-Box');
    document.getElementById('first-error').style.display = "block";
    const searchText = searchBox.value;
    //  clear Value
    searchBox.value = '';
    //  error hendeling
    if (searchText == 0 || searchText == undefined) {
        document.getElementById('first-error').style.display = "block";
    }
    // Api link
    else {
        const url = https://openapi.programming-hero.com/api/phones?search=${searchText};
            fetch (url)
                .then(pres => pres.json())
                .then(data => display(data.data));

        document.getElementById('first-error').style.display = "none";
    }
}

const display = data => {
    const cardParent = document.getElementById('card')

    // clear dispaly
    cardParent.innerHTML = '';

    //  forEach
    data.forEach(element => {
        // createElement

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.phone_name}</h5>
          <h6>${element.brand}</h6>
          <button onclick="details('${element.others}')">Detils</button>
        </div>
      </div>
        `
        cardParent.appendChild(div);
    });
}