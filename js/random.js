const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=10 ")
    .then((res) => res.json())
    .then((data) => displayRandomUsers(data.results));
};
const displayRandomUsers = (users) => {
  const randomUser = document.getElementById("random");
  for (const user of users) {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
    <h2>user Name:${user.id.name}</h2>
    <p>Email:${user.email}</p>
    <p>user location:${user.location.city} ${user.location.city}</p>
    `;
    randomUser.appendChild(userDiv);
  }
};

loadUsers();
