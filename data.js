const users = [
  {
    id: "1",
    fullName: "Mehmet Seven",
    age: 29,
  },
  {
    id: "2",
    fullName: "Ahmet Günal",
    age: 32,
  },
];

const posts = [
  {
    id: "1",
    title: "Mehmet'in Gönderisi",
    user_id: "1",
  },
  {
    id: "2",
    title: "Mehmet'in Diğer Gönderisi",
    user_id: "1",
  },
  {
    id: "3",
    title: "Ahmet'in Gönderisi",
    user_id: "2",
  },
];

const comments = [
  {
    id: "1",
    text: "Bu Ahmet'in Yorumudur",
    post_id: "1",
    user_id: "2",
  },
  {
    id: "2",
    text: "Bu Mehmet'in Yorumudur",
    post_id: "1",
    user_id: "1",
  },
  {
    id: "3",
    text: "foo bar",
    post_id: "2",
    user_id: "2",
  },
  {
    id: "4",
    text: "foo bar baz",
    post_id: "3",
    user_id: "1",
  },
];

module.exports = {
  users,
  posts,
  comments,
};
