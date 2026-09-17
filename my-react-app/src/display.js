const data = JSON.parse(localStorage.getItem("userData"));

if (data) {
    document.getElementById("displayName").textContent = data.name;
    document.getElementById("displayEmail").textContent = data.email;
    document.getElementById("displayPhone").textContent = data.phone;
} else {
    document.body.innerHTML = `
        <h3 style="color: red; text-align: center;">
            No data found
        </h3>
    `;
}   