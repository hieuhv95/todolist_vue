import { v4 as uuidv4 } from "uuid";
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export default [
  {
    id: uuidv4(),
    name: " ABC Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    level: 0, //small
  },
  {
    id: uuidv4(),
    name: "123 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    level: 1, //medium
  },
  {
    id: uuidv4(),
    name: " DCFC Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    level: 2, //hight
  },
  {
    id: uuidv4(),
    name: " D Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    level: 0, //small
  },
];
