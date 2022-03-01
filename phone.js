// load all phone
const loadPhone = () => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=phone`)
        .then(response => response.json())
        .then(data => displayPhone(data.data))
}
loadPhone()

// display loaded phone
const displayPhone = (phones) => {

    // console.log(phones)
    const displayPhones = document.getElementById('display-phones')
    displayPhones.textContent = ' ';
    phones.forEach(phone => {

        // console.log(phone)
        const div = document.createElement('div')
        div.innerHTML = `
                <div class="card ">
                                <img src="${phone.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${phone.phone_name}</h5>
                                    <p class="card-text">This is a best phone ever its services too good
                                        additional phone. This phone is a little bit Expencive.</p>
                                        <button onclick="info('${phone.slug}')" class="btn btn-primary">Details</button>
                                </div>
                               
                            </div>

                            `
        displayPhones.appendChild(div)


    });

}

// searching phone

const searchPhone = () => {
    const searchPhone = document.getElementById('search-phone')
    const searchText = searchPhone.value;
    searchPhone.value = ''
    const error = document.getElementById('error')
    if (searchText == 0) {
        error.style.display = "block"
    }

    else {

        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(response => response.json())
            .then(data => displaySearchedPhone(data.data))
        error.style.display = "none"

    }

}

// searching result
const displaySearchedPhone = (phones) => {
    console.log(phones)
    const displaySearchedPhones = document.getElementById('display-phones')
    displaySearchedPhones.textContent = '';
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card ">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">This is a best phone ever its services too good
                                additional phone. This phone is a little bit Expencive.</p>
                                <button onclick="info('${phone.slug}')" class="btn btn-primary">Details</button>
                        </div>
                        
                    </div>
          
                    `
        displaySearchedPhones.appendChild(div)

    });
    // 
}

// seraching details
const info = (id) => {
    console.log(id)
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(response => response.json())
        .then(data => displayDetails(data.data))
}

// details information
const displayDetails = (details) => {
    console.log(details)
    const detaislInfo = document.getElementById('details')
    detaislInfo.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card">
                <img src="${details.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${details.name}</h5>
                    <p class="card-text">This is a best phone ever its services too good! This phone is a little bit Expencive.</p>
                   <ul>
                   <h6>Brand:</h6><li>${details.brand}</li>
                   <h6>Storage:</h6><li>${details.mainFeatures.storage}</li>
                   <h6>Display:</h6><li>${details.mainFeatures.displaySize}</li>
                   <h6>Chipset:</h6><li>${details.mainFeatures.chipSet}</li>
                   </ul>
                    <p class="card-text"><small class="text-muted">${details.releaseDate}</small></p>
                    <button class="btn-warning rounded fw-bold p-1">Buy now</button>
                </div>
            </div>
    `
    detaislInfo.appendChild(div)

}

{/* <P></p> */ }
