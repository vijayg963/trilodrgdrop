import { combineimg, fadeFlower, interior, plant } from "../constant";

export const todoData = {
  todo: [
    {
      head: "Low",
      order: "1",
      id: Math.floor(Math.random() * 500),
      title: "Brainstorming",
      desc: "Brainstorming brings team members' diverse experience into play.",
      comments: "12 comments",
      file: "0 files",
      status: "todo",
    },
    {
      head: "High",
      order: "2",
      id: Math.floor(Math.random() * 500),
      desc: "User research helps you to create an optimal product for users.",
      comments: "10 comments",
      file: "3 files",
      status: "todo",
    },
  ],
  onProgress: [
    {
      head: "Low",
      order: "1",
      id: Math.floor(Math.random() * 500),
      img: fadeFlower,
      comments: "9 comments",
      file: "10 files",
      status: "doing",

    },
    {
      head: "Low",
      order: "2",
      id: Math.floor(Math.random() * 500),
      desc: "User research helps you to create an optimal product for users.",
      comments: "14 comments",
      file: "15 files",
      img1: plant,
      img2: interior,
      status: "doing",
    },
  ],
  done: [
    {
      head: "completed",
      order: "1",
      id: Math.floor(Math.random() * 500),
      img4: combineimg,
      desc: "Brainstorming brings team members' diverse experience into play.",
      comments: "12 comments",
      file: "15 files",
      status: "done",

    },
    {
      head: "Completed",
      order: "2",
      id: Math.floor(Math.random() * 500),
      comments: "12 comments",
      file: "15 files",
      status: "done",

    },
  ],
};
