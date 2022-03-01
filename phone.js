// load all phone
const loadPhone = () => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=`)
        .then(response => response.json())
        .then(data => displayPhone(data.data))
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

}
const displySearchedPhone = () => {

}