const hidePassword = (password) => {
    let hiddenPassword = "";
    for(let i = 0; i < password.length; i++) {
        hiddenPassword += "*";
    }
    return hiddenPassword;
}

const copyContent = (content) => {
    navigator.clipboard.writeText(content).then( () => {
        alert("Copied");
    }).catch(err => {
        alert("Copying Failed");
    });
}

const deletePasswordData = (index) => {
    let passwordDetails = localStorage.getItem("passwordDetails");
    let passwordData = JSON.parse(passwordDetails);
    passwordData.splice(index, 1);
    localStorage.setItem("passwordDetails", JSON.stringify(passwordData));
    alert("Password Deleted Successfully.");
    populateSavedPasswordDetails();
}

const populateSavedPasswordDetails = () => {
    let table = document.querySelector("table")
    let passwordDetails = localStorage.getItem("passwordDetails");
    if(passwordDetails == null) {
        table.innerHTML = "No Details Available";
    } else {

        table.innerHTML = `<tr>
            <th style="background-color:lightgray;">Website</th>
            <th style="background-color:lightgray;">Username</th>
            <th style="background-color:lightgray;">Password</th>
            <th style="background-color:lightgray;">Action</th>
        </tr>`

        let passwordData = JSON.parse(passwordDetails);
        let html = ""

        let color = "lightgray";
        for(let i = 0; i < passwordData.length; i++) {
            if(i % 2 == 0) {
                color = "white";
            } else {
                color = "whitesmoke";
            }
            row = passwordData[i];
            html += `
                <tr>
                    <td>${row.website}</td>
                    <td>${row.username}</td>
                    <td>${row.password}</td>
                    <td>${"Delete"}</td>
                    <td style="background-color: ${color};">${row.website} <i onClick="copyContent('${row.website}')" class="fa-regular fa-clipboard copy"></i></td>
                    <td style="background-color: ${color};">${row.username} <i onClick="copyContent('${row.username}')" class="fa-regular fa-clipboard copy"></i></td>
                    <td style="background-color: ${color};">${hidePassword(row.password)} <i onClick="copyContent('${row.password}')" class="fa-regular fa-clipboard copy"></i></td>
                    <td style="background-color: ${color};">
                        <button class="delete-btn" onClick="deletePasswordData('${i}')">Delete</button>
                        <button class="delete-btn" onClick="deletePasswordData('${i}')">Edit</button>
                        <button class="delete-btn" onClick="deletePasswordData('${i}')">Save</button>
                    </td>
                </tr>
            `;
        }
        table.innerHTML = table.innerHTML + html;
    }

}

document.querySelector(".btn").addEventListener("click", (event) => {
populateSavedPasswordDetails();
document.querySelector(".save-btn").addEventListener("click", (event) => {
    event.preventDefault();
    let passwordDetails = localStorage.getItem("passwordDetails");
    if(passwordDetails == null) {
    document.querySelector(".btn").addEventListener("click", (event) => {alert("Password Details Saved.");}

    website.value = "";
    username.value = "";
    password.value = "";

    populateSavedPasswordDetails();
});