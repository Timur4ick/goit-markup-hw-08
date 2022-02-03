// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
// };
//   //   addPotion(newPotion) {
//   //     if () {
//   //       return `Error! Potion ${newPotion} is already in your inventory!`;
//   //     }

//   //     this.potions.push(newPotion);
//   //   },
//   //   removePotion(potionName) {
//   //     const potionIndex = this.potions.indexOf(potionName);

//   //     if (potionIndex === -1) {
//   //       return `Potion ${potionName} is not in inventory!`;
//   //     }

//   //     this.potions.splice(potionIndex, 1);
//   //   },
//   //   updatePotionName(oldName, newName) {
//   //     const potionIndex = this.potions.indexOf(oldName);

//   //     if (potionIndex === -1) {
//   //       return `Potion ${oldName} is not in inventory!`;
//   //     }

//   //     this.potions.splice(potionIndex, 1, newName);
//   //   },
//   // Change code above this line
// };
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
  { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books.filter((book) => book.rating > MIN_BOOK_RATING);

console.log(names);
