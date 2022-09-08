const loadUserFetch = () => {
  const url = `https://randomuser.me/api/?gender= female`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUser(data.results[0]))
    .catch((error) => console.log(error[0]));
};
const loadUserAsync = async () => {
  const res = await fetch(url);
  const data = await res.json();
  displayUser(dhaka);
};

const displayUser = (user) => {
  console.log(user);
};
