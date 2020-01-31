/**
 * @function: get all data from guest table
 * 
 */
database.collection('tbl_guest').get().then(
    (guests) => {
        const table = document.querySelector('#guest-list');
        guests.docs.forEach(guest => {
            const item = `
                <tr>
                    <td>
                        <a href="#"><i class="material-icons red-text">delete</i></a>
                        <a href="#"><i class="material-icons teal-text">edit</i></a>
                        <a href="#"><i class="material-icons blue-text">visibility</i></a>
                    </td>
                    <td>${guest.data().name}</td>
                    <td>${guest.data().village}</td>
                    <td>${guest.data().province}</td>
                    <td>${guest.data().money}</td>
                </tr>
            `;
            table.insertAdjacentHTML('beforeend', item);
        });
    }
);

/**
 * @function: get all data from drin table
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
