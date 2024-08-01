import work1 from "../images/project-weather.png";
import work2 from "../images/project-keepingbox.png";
import work3 from "../images/project-creme.png";
import work4 from "../images/project-todolist.png";
import work5 from "../images/project-oldchannel.jpg";

export const skillTools = [
  {
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "styled-components",
      "jQuery",
      "Zustand",
    ],
    tools: ["Figma", "Git", "Vercel", "Webpack", "Babel"],
    skilldescs: [
      "웹 표준, 웹 접근성을 준수하여 시맨틱 마크업과 반응형 디자인을 구현합니다.",
      "JavaScript와 jQuery로 애니메이션 및 이벤트를 활용해 동적인 웹을 구현합니다.",
      "컴포넌트 기반 설계로 재사용 가능한 UI를 구현하고, CSS-in-JS 방식으로 효율적인 스타일링을 합니다.",
      "Zustand을 활용하여 유지 보수성과 재사용성을 고려한 전역 상태 관리를 구현합니다.",
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
    tags: [
      "React",
      "styled-components",
      "Express",
      "Zustand",
      "Webpack",
      "Babel",
    ],
    category: "1인 개발",
    title: "세계 날씨/위치 기반 미세먼지",
    infos: ["세계 각 도시의 날씨와 사용자의 위치에 따른 미세먼지를 확인할 수 있는 서비스입니다."],
    descs: [
      "Open API와 axios를 활용하여 날씨, 미세먼지, 사용자의 위치 정보를 불러옴",
      "클라이언트에서의 API 키 노출 방지를 위해, Express로 서버 측 RESTful API를 작성하고 dotenv로 환경 변수 관리",
      "Zustand로 위치, 날씨, 미세먼지 및 역지오코딩 데이터 상태 관리",
      "웹팩과 바벨을 통해 번들링 및 최적화를 진행하여 페이지 로딩 시간을 약 3.4초 단축",
      "react-router-dom을 통해 페이지 이동을 구현하고, NavLink를 사용하여 활성 링크 스타일링 적용",
      "시간대에 따라 변하는 배경화면을 제공하여 사용자의 시각적 경험 향상"
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
    category: "2인 개발",
    title: "키핑박스",
    infos: ["짐 보관 예약 서비스를 주제로 제작한 사이트입니다."],
    descs: [
      "담당 부분: 메인 페이지 및 예약하기 페이지의 UI/UX 설계 및 구현",
      "Date 객체를 활용하여 날짜를 비교한 후, 오늘 날짜 이전은 선택이 안되도록 설정",
      "사이즈와 날짜에 따라 요금 자동 계산 구현",
      "자바스크립트로 폼 유효성 검사를 수행하고, 경고 및 확인 창으로 잘못된 입력 방지",
      "공통부분을 ES6 모듈로 리팩토링하여 유지 보수성과 안전성 향상",
    ],
  },
];

export const groupBList = [
  {
    id: "3",
    site: "https://yyuujeong.github.io/responsive-renewal/cremedemarrons/",
    github: "https://github.com/yyuujeong/responsive-renewal",
    img: work3,
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
    id: "4",
    site: "https://yyuujeong.github.io/react-todolist/",
    github: "https://github.com/yyuujeong/react-todolist",
    img: work4,
    name: "포트폴리오",
    date: "2023.05",
    tags: ["React", "CSS3"],
    category: "개인 프로젝트",
    title: "리액트 투두리스트",
    infos: ["리액트를 학습하며 기본적인 CRUD 개념을 익히고자 제작했습니다."],
    descs: [
      "기본적인 CRUD 기능 구현",
      "해당하는 부분만 수정, 체크, 삭제되도록 구현",
      "미디어 쿼리를 사용해 반응형 웹 구현",
    ],
  },
  {
    id: "5",
    site: "https://yyuujeong.github.io/mobile-renewal/oldchannel/",
    github: "https://github.com/yyuujeong/mobile-renewal",
    img: work5,
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
