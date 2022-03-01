// load all phone
const loadPhone = () => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=phone`)
        .then(response => response.json())
        .then(data => displayPhone(data))
}
loadPhone()
// display loaded phone
const displayPhone = (phones) => {
    console.log(phones)
    const displayPhones = document.getElementById('display-phones')
    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card ">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                                <a href="#" class="btn btn-primary">More info</a>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    `
        displayPhones.appendChild(div)

    });
    // 
}
// display searching result

const searchPhone = () => {
    const searchPhone = document.getElementById('search-phone')
    const searchText = searchPhone.value;
    searchPhone.value = ''

    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(data => displySearchedPhone(data.data[0]))
}
const displySearchedPhone = (brand) => {
    console.log(brand)
    const searchResult = document.getElementById('search-result')

    const newdiv = document.createElement('div')

    div.innerHTML = `
    <div class="card ">
                    <img src="${brand.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${brand.phone_name}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-primary">More info</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                `
    searchResult.appendChild(newdiv)
// }