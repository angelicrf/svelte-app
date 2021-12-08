import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";
export const FeedbackStore = writable([
  {
    id: uuidv4(),
    rating: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: uuidv4(),
    rating: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: uuidv4(),
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
]);
