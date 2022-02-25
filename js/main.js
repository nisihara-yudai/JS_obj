// オブジェクト
// const user = {
//   name: "太郎", //キー"name"に値"太郎"が格納される
//   age: 20, //キー"age"に値20が格納される
// };

// console.log(user.name);
// console.log(user.age);

// オブジェクト内のメソッド
// const user = {
//   say: function () {
//     console.log("Hello");
//   },
// };

// user.say();

// const user = {
//   say() {
//     console.log("Hello");
//   },
// };

// user.say(); //関数の呼び出し

// メソッド内の「this」
// const user = {
//   name: "太郎",
//   age: 20,
//   say: function () {
//     console.log(this.name);
//   },
// };

// user.say();

// 分割代入
// const cost = { p: 42, q: true, r: 'オブジェクト' };
// const { p, q, r } = cost;

// console.log(p); // 42 
// console.log(q); // true
// console.log(r); // オブジェクト

// const obj = { post: 100, quest: true };
// const { post: apple, quest: ball } = obj;

// console.log(apple);
// console.log(ball);

// Mathオブジェクト
// console.log(Math.random() * 100);
// console.log(Math.ceil(7.2));
// console.log(Math.floor(7.2));
// console.log(Math.round(7.2));
// console.log(Math.floor(Math.random() * 100));

// json
// const student = {
//   name: "太郎",
//   age: 20,
//   gender: "男性",
//   skills: ["HTML", "CSS", "JavaScript"],
//   wife: null,
// };

// const json = JSON.stringify(student);

// console.log(student);
// console.log(json);

// 練習問題
const school = {
  name: "COACHTECH",
  month: 2,
  skills: ["HTML", "CSS", "JavaScript", "Vue.js", "PHP", "Laravel"],
  createSentense() {
    // 処理を記述
    let learn;
    this.skills.forEach((skill, index) => {
      if (index = 0) {
        learn = skill;
      } else {
        learn = `${learn}と${skill}`;
      }
    });
    return `${this.name}は${this.month}ヶ月で${learn}を学ぶ事が出来ます。`;
  },
};

console.log(school.createSentense());