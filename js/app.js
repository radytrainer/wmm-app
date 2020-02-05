/**
 * @function: get all data from guest table
 * 
 */
const table = document.querySelector('#guest-list');
function updateGuest(guests) {
    let item = "";
        guests.docs.forEach(guest => {
             item += `
                <tr id="${guest.id}">
                    <td>
                        <a href="#" onclick="deleteGuest('${guest.id}')"><i class="material-icons red-text">delete</i></a>
                        <a href="#" id="${guest.id}edit" class="edit"><i class="material-icons teal-text">edit</i></a>
                        <a href="#" id="${guest.id}view" class="view"><i class="material-icons blue-text">visibility</i></a>
                    </td>
                    <td>${guest.data().name}</td>
                    <td>${guest.data().village}</td>
                    <td>${guest.data().province}</td>
                    <td>${guest.data().money}</td>
                </tr>
            `;
            table.innerHTML = item;
        });
}
/**
 * @function add guest data to firebase storage
 * 
 */
const guestBtn = document.querySelector('#guest-btn');
const guestName = document.querySelector('#guest-name');
const guestVillage = document.querySelector('#village');
const guestProvince = document.querySelector('#province');
const guestMoney = document.querySelector('#money');

guestBtn.addEventListener('click', ()=> {
    // TODO: check condition of each field must be fill
    if(guestName != "" || guestProvince != "" || guestVillage != "" || guestMoney != "") {
        database.collection('tbl_guest').add({
            name: guestName.value,
            village: guestVillage.value,
            province: guestProvince.value,
            money: guestMoney.value
        });
        clearInputGuest();
    }
})
/**
 * @function clear input of guest
 * 
 */
function clearInputGuest() {
    guestName.value = "";
    guestVillage.value = "";
    guestProvince.value ="";
    guestMoney.value = "";
}
database.collection('tbl_guest').orderBy('name').onSnapshot( guest => {
    let updates = guest.docChanges();
    updates.forEach( update => {
        if(update.type == "added") {
            updateGuest(guest)
        }else if(update.type == "removed") {
            updateDeleteGuest(update.doc.id);
        }
    });
});
/**
 * @function update delete guest
 * 
 */
function updateDeleteGuest(guestId) {
    let trEmelent = document.querySelector('#' + guestId);
    var x = document.getElementById('#' + guestId).parentNode.nodeName;
    console.log(x);
    table.removeChild(trEmelent);
}
/**
 * @function delete guest
 * 
 */
function deleteGuest(id) {
    database.collection('tbl_guest').doc(id).delete();
}
/**
 * @function: get all data from drink table
 * 
 */
database.collection('tbl_drink').get().then(
    (guests) => {
        const table = document.querySelector('#drink-list');
        guests.docs.forEach(guest => {
            const item = `
                <tr>
                    <td>
                        <a href="#"><i class="material-icons red-text">delete</i></a>
                        <a href="#"><i class="material-icons teal-text">edit</i></a>
                        <a href="#"><i class="material-icons blue-text">visibility</i></a>
                    </td>
                    <td>${guest.data().drink}</td>
                    <td>${guest.data().type}</td>
                    <td>${guest.data().quality}</td>
                    <td>${guest.data().payment}</td>
                </tr>
            `;
            table.insertAdjacentHTML('beforeend', item);
        });
    }
);

/**
 * @function: get all food information
 * 
 */
database.collection('tbl_food').get().then(
    (guests) => {
        const table = document.querySelector('#food-list');
        guests.docs.forEach(guest => {
            const item = `
                <tr>
                    <td>
                        <a href="#"><i class="material-icons red-text">delete</i></a>
                        <a href="#"><i class="material-icons teal-text">edit</i></a>
                        <a href="#"><i class="material-icons blue-text">visibility</i></a>
                    </td>
                    <td>${guest.data().name}</td>
                    <td>${guest.data().type}</td>
                    <td>${guest.data().price}</td>
                    <td>${guest.data().cooker_name}</td>
                </tr>
            `;
            table.insertAdjacentHTML('beforeend', item);
        });
    }
);
/**
 * @function: get all table information
 * 
 */
database.collection('tbl_table').get().then(
    (guests) => {
        const table = document.querySelector('#table-list');
        guests.docs.forEach(guest => {
            const item = `
                <tr>
                    <td>
                        <a href="#"><i class="material-icons red-text">delete</i></a>
                        <a href="#"><i class="material-icons teal-text">edit</i></a>
                        <a href="#"><i class="material-icons blue-text">visibility</i></a>
                    </td>
                    <td>${guest.data().table}</td>
                    <td>${guest.data().price}</td>
                    <td>${guest.data().hall_owner}</td>
                    <td>${guest.data().hall_price}</td>
                </tr>
            `;
            table.insertAdjacentHTML('beforeend', item);
        });
    }
);
