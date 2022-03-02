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
                                    <h6>${phone.brand}</h6>
                                    <p class="card-text">This is a best phone ever its services too good
                                        additional phone. This phone is a little bit Expencive.</p>
                                        <button onclick="details('${phone.slug}')" class="btn btn-primary">Details</button>
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
    if (phones.length === 0) {
        error.style.display = "block"
    }
    const displaySearchedPhones = document.getElementById('display-phones')
    displaySearchedPhones.textContent = '';
    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card ">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <h6>${phone.brand}</h6>
                            <p class="card-text">This is a best phone ever its services too good
                                additional phone. This phone is a little bit Expencive.</p>
                                <button onclick="details('${phone.slug}')" class="btn btn-primary">Details</button>
                        </div>
                        
                    </div>
          
                    `
        displaySearchedPhones.appendChild(div)

    });
    // 
}

// seraching details
const details = (id) => {
    // console.log(id)
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(response => response.json())
        .then(data => displayDetails(data.data))
}

// details information
const displayDetails = (details) => {
    // console.log(details)
    const detaislInfo = document.getElementById('details')
    detaislInfo.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card">
                <img src="${details.image}" class="card-img-top w-50 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${details.name}</h5>
                    <p class="card-text">This is a best phone ever its services too good! This phone is a little bit Expencive.</p>
                //    device configuretaion
                   <ul>
                   <li><h6>Brand</h6>${details.brand}</li>
                   <li><h6>Storage</h6>${details.mainFeatures.storage}</li>
                   <li><h6>Display</h6>${details.mainFeatures.displaySize}</li>
                   <li><h6>Chipset</h6>${details.mainFeatures.chipSet}</li>
                   <li><h6>sensors</h6>${details.mainFeatures.sensors}</li>
                   <li><h6>network</h6>${details.others.WLAN}</li>
                   <li><h6>Gps</h6>${details.others.GPS}</li>
                   <li><h6>NFC:</h6>${details.others.NFC}</li>
                   <li><h6>Radio:</h6>${details.others.Radio}</li>
                   <li><h6>USB:</h6>${details.others.USB}</li>
                   <li><h6>Bluetooth:</h6>${details.others.Bluetooth}</li >
                   </ul>
                    <p class="card-textfw-bold"><small class="text-muted">${details.releaseDate}</small></p>
                    <button class="btn-warning rounded fw-bold p-1">Buy now</button>
                </div >
            </div >
    `
    detaislInfo.appendChild(div)

}

