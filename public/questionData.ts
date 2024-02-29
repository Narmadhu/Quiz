import person1 from "./images/person1.jpg";
import person2 from "./images/person2.jpg";
import person3 from "./images/person3.jpg";

export const questionsData = [
  {
    id: 1,
    question:
      "In What year did the United States host the FIFA World Cup for the first time ?",
    options: ["1996", "1986", "1994", "2004"],
    answer: "1994",
  },
  {
    id: 2,
    question: "Where did sushi originate ?",
    options: ["Korea", "Japan", "China", "Bhutan"],
    answer: "China",
  },
  {
    id: 3,
    question: "What country drinks the most coffee ?",
    options: ["Finland", "Japan", "USA", "India"],
    answer: "Finland",
  },
  {
    id: 4,
    question: "Who was the first Disney princess ?",
    options: ["Ariel", "Aurora", "Merida", "Snow White"],
    answer: "Snow White",
  },
  {
    id: 5,
    question: "What year was the United Nations established ?",
    options: ["1955", "1944", "1954", "1945"],
    answer: "1945",
  },
  {
    id: 6,
    question: "What is the name of the longest river in the world ?",
    options: ["Yellow River", "Nile", "Amazon River", "Ganges"],
    answer: "Nile",
  },
  {
    id: 7,
    question: "Which planet is known as the 'Red Planet' ?",
    options: ["Earth", "Venus", "Mars", "Mercury"],
    answer: "Mars",
  },
  {
    id: 8,
    question: "Who wrote 'Romeo and Juliet' ?",
    options: [
      "William Shakespeare",
      "Anne Hathaway",
      "Jane Austen",
      "George Eliot",
    ],
    answer: "William Shakespeare",
  },
  {
    id: 9,
    question: "Which country is the largest in the world ?",
    options: ["China", "India", "USA", "Russia"],
    answer: "Russia",
  },
  {
    id: 10,
    question: "Who discovered India ?",
    options: ["Vasco da Gama", "Columbus", "Bartholomew Diaz", "Leif Erikson"],
    answer: "Vasco da Gama",
  },
];

export const usersScoreData = [
  {
    id: "1",
    userName: "Naveen",
    score: "7/10",
    image: {
      src: person1,
      width: 84,
      height: 84,
    },
  },
  {
    id: "2",
    userName: "Venkat",
    score: "5/10",
    image: {
      src: person2,
      width: 96,
      height: 96,
    },
  },
  {
    id: "3",
    userName: "Kumar",
    score: "2/10",
    image: {
      src: person3,
      width: 84,
      height: 84,
    },
  },
];
