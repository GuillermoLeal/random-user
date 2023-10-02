const API_URL = "https://randomuser.me/api";

// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => {
//     createCard(data);
//   });

// ? Metodo con: async y await
// const getUserData = async () => {
//   const res = await fetch(API_URL);
//   const data = await res.json();

//   createCard(data);
// };

// ? metodo con async, await y then
export const getUserData = async () => {
  const data = await fetch(API_URL).then((res) => res.json());

  const userData = data.results[0];
  const { name, email, phone, location } = userData;
  const { title, first, last } = name;
  const { country, postcode } = location;
  const fullname = `${title} ${first} ${last}`;
  const username = userData.login.username;
  const imageSrc = userData.picture.large;

  return {
    name,
    email,
    phone,
    title,
    first,
    last,
    country,
    postcode,
    fullname,
    username,
    imageSrc
  };
};
