const quotes = [
  {
    quote: "인내는 어떤 실력보다 강하다.",
    author: "Ben Hogan",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
    author: "Friedrich Wilhelm Nietzsche",
  },
  {
    quote:
      "작은 성공부터 시작하라. 성공에 익숙해지면 무슨 목표든지 할 수 있다는 자신감이 생긴다.",
    author: "Dale Carnegie",
  },
  {
    quote: "나의 미래는 내가 오늘 무엇을 하느냐에 달려있다.",
    author: "Mohandas Karamchand Gandhi",
  },
  {
    quote: "기회는 누구에게나 있다. 다만 포착하지 못할 뿐이다.",
    author: "Andrew Carnegie",
  },
  {
    quote: "시작하는데 있어서 나쁜 시기란 없다.",
    author: "Franz kafka",
  },
  {
    quote: "행복도 내가 만들고, 불행도 내가 만든다.",
    author: "법률스님",
  },
  {
    quote: "또 실패했는가? 괜찮다. 다시 실행하라. 그리고 더 나은 실패를 해라.",
    author: "Samuel Beckett",
  },
  {
    quote: "나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "남들보다 더 잘하려고 고민하지 마라. 지금의 나보다 잘하려고 애쓰는게 더 중요하다.",
    author: "Willam Faulkner",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
