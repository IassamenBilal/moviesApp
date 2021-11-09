const movies = [
  {
    id: "1",
    title: "Oceans 8",
    image: "/images/oceans_8.jpg",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "2",
    title: "Midnight Sun",
    image: "/images/mid_sun.jpg",

    category: "Comedy",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    image: "/images/indestructible.jpg",

    category: "Animation",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "4",
    title: "Sans un bruit",
    image: "/images/sans_un_bruit.jpg",

    category: "Thriller",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    image: "/images/creed_2.jpg",

    likes: 16,
    dislikes: 2,
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    image: "/images/pulp_fic.jpg",

    likes: 11,
    dislikes: 3,
  },
  {
    id: "7",
    title: "Pulp Fiction",
    image: "/images/pulp_fic.jpg",

    category: "Thriller",
    likes: 12333,
    dislikes: 32,
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    image: "/images/seven.jpg",

    likes: 2,
    dislikes: 1,
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    image: "/images/inception.jpg",

    likes: 2,
    dislikes: 1,
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    image: "/images/gone_girl.jpg",

    likes: 22,
    dislikes: 12,
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
