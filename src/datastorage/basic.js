import work1 from "../images/project-weather.png";
import work2 from "../images/project-keepingbox.png";
import work3 from "../images/project-quiz.png";
import work4 from "../images/project-creme.png";
import work5 from "../images/project-todolist.png";
import work6 from "../images/project-oldchannel.jpg";

export const skillTools = [
  {
    skills: ["React","JavaScript", "HTML5", "CSS3", "styled-components", "SCSS",  "jQuery", "Webpack", "Babel"],
    tools: ["Figma", "Git", "Vercel"],
    skilldescs: [
      "웹 표준, 웹 접근성을 준수하여 시맨틱 마크업을 작성합니다.",
      "미디어 쿼리, 다양한 레이아웃으로 반응형 웹 제작을 합니다.",
      "JS, jQuery로 애니메이션, 이벤트를 이용해 동적인 웹을 구현합니다.",
      "React 구조와 Hook에 대한 이해를 기반으로 범용성과 재사용성을 고려한 컴포넌트를 설계합니다.",
      "컴포넌트 기반의 동적 스타일링, 변수 및 믹스인을 활용해 효율적인 스타일 관리가 가능합니다."
    ],
    tooldescs: [
      "툴을 활용하여 와이어 프레임 제작과 협업이 가능합니다.",
      "버전 관리와 프로젝트 공유를 위해 Git과 Github를 사용합니다.",
    ],
  },
];

export const groupAList = [
  {
    id: "1",
    site: "https://weather-finedust.vercel.app",
    github: "https://github.com/yyuujeong/weather-finedust",
    img: work1,
    name: "포트폴리오",
    date: "2023.12 - 2024.02",
    tags: ["React", "styled-components", "Express"],
    category: "개인 프로젝트",
    title: "날씨 조회/위치 기반 미세먼지",
    infos: ["리액트와 Express로 제작한 후, Vercel을 통해 배포했습니다."],
    descs: [
      "Open API를 통해 사용자 위치와 날씨/대기 정보를 수집하고, 정보 조회를 위해 REST API를 사용",
      "클라이언트 측에서 API 키가 노출되지 않도록 보호하기 위해 Express 백엔드 프레임워크를 사용하여 임시 서버 구축",
      "대기 질 상태를 직관적으로 표현하기 위해 이모지와 색상, 메시지를 사용하여 사용자 경험 개선",
    ],
  },
  {
    id: "2",
    site: "https://yyuujeong.github.io/team-keepingbox/keepingbox/",
    github: "https://github.com/yyuujeong/team-keepingbox",
    img: work2,
    name: "포트폴리오",
    date: "2022.05 - 2022.06",
    tags: ["HTML5", "CSS3", "JavaScript"],
    category: "팀 프로젝트",
    title: "키핑박스",
    infos: ["짐 보관 예약 서비스 사이트입니다."],
    descs: [
      "담당 부분: 메인 페이지 및 예약하기 페이지 UI/UX 설계",
      "오늘 날짜 이전은 선택되지 않도록 구현하고 사이즈와 날짜에 따라 요금 자동 계산",
      "자바스크립트로 입력값을 검증하고, 경고 및 확인 창을 통해 잘못된 입력에 의한 오류를 방지",
      "공통부분을 모듈화하고자 ES6 모듈로 변경하여 유지 보수성과 안전성 개선",
    ],
  },
];

export const groupBList = [
  {
    id: "3",
    github: "https://github.com/yyuujeong/RandomQuiz_MyPick/blob/front/src/components/Home.tsx",
    img: work3,
    name: "포트폴리오",
    date: "2024.06 ~ 진행 중",
    tags: ["React", "TypeScript", "SCSS", "Webpack", "Babel"],
    category: "2인 팀 프로젝트",
    title: "RandomQuiz MyPick",
    infos: [
      "타입스크립트를 학습한 후 제작 중인 퀴즈 맞히기 사이트입니다.",
    ],
    descs: [
      "웹팩과 바벨로 모듈 번들링과 트랜스파일링을 통해 성능 최적화",
      "변수, 중첩, mixin 등의 기능으로 일관된 색상과 레이아웃을 적용하고, 스타일링 규칙을 간결하게 유지",
      "깃허브 협업 중 Merge 시 발생한 충돌 해결"
    ],
  },
  {
    id: "4",
    site: "https://yyuujeong.github.io/responsive-renewal/cremedemarrons/",
    github: "https://github.com/yyuujeong/responsive-renewal",
    img: work4,
    name: "포트폴리오",
    date: "2022.04 - 2022.05",
    tags: ["HTML5", "CSS3", "jQuery"],
    category: "개인 반응형 리뉴얼",
    title: "크렘드마롱",
    infos: [
      "반응형 홈페이지 리뉴얼을 통해 문제점과 사용성을 개선한 사이트입니다.",
    ],
    descs: [
      "Swiper, Slick 등의 라이브러리를 이용해 자동 슬라이드와 인디케이터 활성화",
      "수량의 증가/감소에 따라 총합 자동 계산",
      "미디어 쿼리를 사용해 반응형 웹 구현",
    ],
  },
  {
    id: "5",
    site: "https://yyuujeong.github.io/react-todolist/",
    github: "https://github.com/yyuujeong/react-todolist",
    img: work5,
    name: "포트폴리오",
    date: "2023.05",
    tags: ["React", "CSS3"],
    category: "개인 프로젝트",
    title: "리액트 투두리스트",
    infos: [
      "리액트를 학습하며 기본적인 CRUD 개념을 익히고자 제작했습니다.",
    ],
    descs: [
      "기본적인 CRUD 기능 구현",
      "해당하는 부분만 수정, 체크, 삭제되도록 구현",
      "미디어 쿼리를 사용해 반응형 웹 구현",
    ],
  },
  {
    id: "6",
    site: "https://yyuujeong.github.io/mobile-renewal/oldchannel/",
    github: "https://github.com/yyuujeong/mobile-renewal",
    img: work6,
    name: "포트폴리오",
    date: "2022.03",
    tags: ["HTML5", "CSS3", "jQuery"],
    category: "개인 모바일 리뉴얼",
    title: "올드채널",
    infos: [
      "PC 환경에만 적합했던 기존 페이지를 모바일에서도 직관적으로 사용할 수 있도록, 브랜드가 추구하는 컨셉에 맞춰 리뉴얼한 사이트입니다.",
    ],
    descs: [
      "Swiper 라이브러리를 이용해 자동 슬라이드와 인디케이터 활성화",
      "수량의 증가/감소에 따라 총합 자동 계산",
    ],
  },
];
