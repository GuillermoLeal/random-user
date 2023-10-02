import { getUserData } from "./modules/getUserData.js";
import { createCard } from "./modules/createCard.js";

const userData = await getUserData();
createCard(userData);
