export const createCard = (data) => {
  const container = document.querySelector(".container");

  const cardElement = /* html */`<div class="card">
      <img class="image" src="${data.imageSrc}" alt="${data.username}">
      <div class="data">
      <h1 class="name">${data.fullname}</h1>
      <div class="username">${data.username}</div>
      <div class="email">${data.email}</div>
      <div>
        <span class="country">${data.country}</span>
        <span class="postal">${data.postcode}</span>
      </div>
      <div class="phone">${data.phone}</div>
      </div>
    </div>`;

  container.insertAdjacentHTML("beforeend", cardElement);
};
