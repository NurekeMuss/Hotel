/* TOASTS */

function showToast() {
    let toastElList = [].slice.call(document.querySelectorAll('.toast'));
    let toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl);
    });
    toastList[0].show();
}

function showWarning() {
    let toastElList = [].slice.call(document.querySelectorAll('.toast'));
    let toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl);
    });
    toastList[1].show();
}

function showNotEmptyCart() {
    let toastElList = [].slice.call(document.querySelectorAll('.toast'));
    let toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl);
    });
    toastList[2].show();
}

function showTotal() {
    let toastElList = [].slice.call(document.querySelectorAll('.toast'));
    let toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl);
    });

    let totalCost = document.getElementById("total_cost").innerHTML;

    document.getElementById("total_cost_toast").innerHTML = totalCost;
    toastList[3].show();
}

/* MODAL INFO */

const more_info_buttons = document.querySelectorAll(".infoBtn");
const title = document.querySelector("#infoModal h5");
const description = document.querySelector("#infoModal p");

for (let i = 0; i < more_info_buttons.length; i++) {
    more_info_buttons[i].addEventListener("click", function() {
        const modal = new bootstrap.Modal(document.getElementById('infoModal'));

        switch (i) {
        case 0:
            title.innerHTML = "SINGLE ROOM";
            description.innerHTML = "Ideal for solo travelers, our Single Rooms offer a cozy space with a comfortable bed and essential amenities, providing a peaceful retreat after a day of exploration or business activities.<br/><b>Price</b>: $100 per night.<br/><b>Occupancy</b>: 1 person.";
            modal.show();
            break;
        case 1:
            title.innerHTML = "DOUBLE ROOM";
            description.innerHTML = "Perfect for couples or close friends, our Double Rooms feature a spacious layout with a double bed, ensuring a comfortable and enjoyable stay for two.<br/><b>Price</b>: $120 per night.<br/><b>Occupancy</b>: 2 people.";
            modal.show();
            break;
        case 2:
            title.innerHTML = "TWIN ROOM";
            description.innerHTML = "Designed for pairs who prefer separate beds, our Twin Rooms provide the convenience of individual sleeping spaces while maintaining the same level of comfort and style.<br/><b>Price</b>: $120 per night.<br/><b>Occupancy</b>: 2 people.";
            modal.show();
            break;
        case 3:
            title.innerHTML = "SUITE ROOM";
            description.innerHTML = "Indulge in luxury with our Suites, offering a sophisticated blend of a well-appointed living area and a private bedroom. Perfect for those seeking an elevated experience with added space and exclusive amenities.<br/><b>Price</b>: $200 per night.<br/><b>Occupancy</b>: 2 people.";
            modal.show();
            break;
        case 4:
            title.innerHTML = "EXECUTIVE ROOM";
            description.innerHTML = "Tailored for business travelers, our Executive Rooms provide a refined atmosphere with additional amenities to enhance productivity and relaxation, making it an ideal choice for corporate guests.<br/><b>Price</b>: $150 per night.<br/><b>Occupancy</b>: 1-2 people.";
            modal.show();
            break;
        case 5:
            title.innerHTML = "FAMILY ROOM";
            description.innerHTML = "Bring the whole family together in our Family Rooms, featuring multiple beds and extra space. Enjoy a comfortable stay with loved ones, creating lasting memories in a family-friendly environment.<br/><b>Price</b>: $180 per night.<br/><b>Occupancy</b>: 3-4 people.";
            modal.show();
            break;
        case 6:
            title.innerHTML = "DELUXE ROOM";
            description.innerHTML = "Experience a touch of luxury in our Deluxe Rooms, where modern design meets comfort. These rooms offer extra amenities and a stylish ambiance, providing a premium stay for discerning guests.<br/><b>Price</b>: $130 per night.<br/><b>Occupancy</b>: 1-3 people.";
            modal.show();
            break;
        case 7:
            title.innerHTML = "ACCESSIBLE ROOM";
            description.innerHTML = "Thoughtfully designed for guests with accessibility needs, our Accessible Rooms provide comfort and convenience, ensuring that everyone can enjoy a welcoming and inclusive stay.<br/><b>Price</b>: $110 per night.<br/><b>Occupancy</b>: 1-2 people.";
            modal.show();
            break;
        }
    })
}

/* FILTERING PARAM*/

function filterSelection(c) {
  const filterDivs = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (let i = 0; i < filterDivs.length; i++) {
    filterDivs[i].classList.remove('d-none');
    if (filterDivs[i].className.indexOf(c) === -1) filterDivs[i].classList.add('d-none');
}
}

const btnContainer = document.getElementById("myBtnContainer");
const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("btn-selected");
    current[0].classList.remove('btn-selected');
    this.classList.add('btn-selected');
});
}

/* FILTERING PRICE */

function filterPrice() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    const filterDivs = document.getElementsByClassName("filterDiv");
    for (let i = 0; i < filterDivs.length; i++) {
        const price = parseInt(filterDivs[i].querySelector(".reserveBtn").innerHTML.substr(1,3));
        filterDivs[i].classList.remove('priceFilter');
        if (price < min || price > max) {
            filterDivs[i].classList.add('priceFilter');
        }
    }
}

/* CART LOGIC */

function showCart() {
   var offcanvas = new bootstrap.Offcanvas(document.querySelector(".offcanvas"));
   offcanvas.show();
}

function isCartEmpty() {
    const items = document.getElementsByClassName("itemHolder");
    for (let i = 0; i < items.length; i++) {
        if (!items[i].classList.contains("d-none")) {
            document.getElementById("empty-info").classList.add("d-none"); 
            return;
        }
    }
    document.getElementById("empty-info").classList.remove("d-none");
}

function cartFunction() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        showWarning();
        return;
    }

    isCartEmpty();
    showCart();
}

function addToCartActions(c) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        showWarning();
        return;
    }

    let amount = document.querySelectorAll(".itemHolder input")[c];
    amount.value = parseInt(amount.value) + 1;

    document.getElementsByClassName("itemHolder")[c].classList.remove("d-none");

    document.getElementById("empty-info").classList.add("d-none");

    showToast();
    showCart();
    setNewPrice(c);
}

function setNewPrice(c) {
    const amount = document.querySelectorAll(".itemHolder input")[c].value;
    const costBtn = document.querySelectorAll(".filterDiv .reserveBtn")[c];
    let price = document.getElementsByClassName("itemHolder")[c].querySelectorAll("p")[1];

    price.innerHTML = parseInt(costBtn.innerHTML.substr(1,3)) * parseInt(amount);

    if (amount === "0") {
        document.getElementsByClassName("itemHolder")[c].classList.add("d-none");
    }

    isCartEmpty();
    updateTotalCost();
}


function updateTotalCost() {
    let totalCost = 0;
    const items = document.getElementsByClassName("itemHolder");

    for (let i = 0; i < items.length; i++) {
        totalCost += parseInt(items[i].querySelectorAll("p")[1].innerHTML);
    }

    document.getElementById("total_cost").innerHTML = totalCost;
}

function submitAction() {
    if (!document.getElementById("empty-info").classList.contains("d-none")) {
        showNotEmptyCart();
        return;
    }

    showTotal();

    const values = document.querySelectorAll(".itemHolder input");
    const items = document.getElementsByClassName("itemHolder");
    const price = document.getElementsByClassName("itemHolder");

    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("d-none");
        values[i].value = 0;
        price[i].querySelectorAll("p")[1].innerHTML = 0;
    }

    document.getElementById("empty-info").classList.remove("d-none");
    document.getElementById("total_cost").innerHTML = 0;
}