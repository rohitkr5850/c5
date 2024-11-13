document.getElementById("fetchUsersBtn").addEventListener("click", fetchUsers);

async function fetchUsers() {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        displayUsers(data.data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

function displayUsers(users) {
    const userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = ""; 

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML = `
            <img src="${user.avatar}" alt="User Avatar">
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>Email: ${user.email}</p>
        `;

        userContainer.appendChild(userCard);
    });
}