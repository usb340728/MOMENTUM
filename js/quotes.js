const quotes = [
  {
    quote : "의욕적인 목표가 인생을 즐겁게 한다.",
    author : "로버트 슐러",
  },
  {
    quote : "치밀하고 합리적인 계획은 성공하지만 어떤 느낌이나 불숙 떠오른 생각에 의한 행동은 실패하는 경우가 많다. 큰 목표일수록 잘게 썰어라.",
    author : "이도도어 루빈",
  },
  {
    quote : "인간은 자기가 옳다고 생각하는 일, 될 수 있으면 많은 것을 자기의 것으로 삼기를 인생의 목표로 삼고 있다.",
    author : "톨스토이",
  },
  {
    quote : "나는 할 수 있다. 나는 해난다. 나에게는 저력이 있다. 나에게는 오직 전진 뿐이다. 이런 신념을 지니는 습관이 당신의 목표를 달성시킨다. 너의 길을 걸어가라. 사람들이 무어라 떠들든 내버려 두어라.",
    author : "A.단테",
  },
  {
    quote : "위대한 정신의 소유자에게는 목표가 있으며, 범인들에게는 소망이 있다.",
    author : "워싱턴 어빙",
  },
  {
    quote : "꿈을 기록하는 것이 나의 목표였던 적은 없다. 꿈을 실현하는 것이 나의 목표이다.",
    author : "만 레이",
  },
  {
    quote : "중요한 것은 목표를 이루는 것이 아니라 그 과정에서 무엇을 배우며 얼마나 성장하느냐이다.",
    author : "앤드류 매튜스",
  },
  {
    quote : "계획 없는 목표는 한낱 꿈에 불과하다.",
    author : "생텍쥐페리",
  },
  {
    quote : "자기가 원하는 목표를 향하여 대담하게 행동하라. 안하는 것보다는 실패가 오히려 일보전진한다.",
    author : "알랜",
  },
  {
    quote : "작은 일도 목표를 세워라. 그러면 반드시 성공할 것이다.",
    author : "로버트 H.슐러",
  },
]

const $quote = document.querySelector('#quote p:first-child')
const $author = document.querySelector('#quote p:last-child')
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
$quote.innerText = todaysQuote.quote
$author.innerText = todaysQuote.author
