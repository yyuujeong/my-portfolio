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
      "Zustand",
      "Styled-Components",
      "jQuery",
    ],
    tools: ["Git", "Vercel", "Figma"],
    skilldescs: [
      "웹 표준과 접근성을 준수한 시맨틱 마크업 및 반응형 디자인 구현",
      "JavaScript와 jQuery로 동적 웹 애니메이션 및 이벤트 처리",
      "컴포넌트 기반 설계와 CSS-in-JS 방식으로 효율적인 스타일링 구현",
      "Zustand로 유지 보수와 재사용성을 고려한 상태 관리",
    ],
    tooldescs: [
      "툴을 활용한 와이어 프레임 제작 및 협업",
      "효율적인 개발과 배포를 위한 도구 활용",
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
      "Styled-Components",
      "Express",
      "Zustand",
      "Webpack",
      "Babel",
    ],
    category: "1인 개발",
    title: "세계 날씨 & 위치 기반 미세먼지",
    infos: [
      "세계 날씨 검색 및 위치 기반 미세먼지 정보 제공 서비스",
    ],
    descs: [
      "Open API와 Axios로 날씨, 미세먼지, 위치 정보를 연동하고 화면에 표시",
      "Zustand로 상태를 관리하고 Webpack과 Babel 최적화를 통해 페이지 로딩 시간 3.4초 단축",
    ],
    troubles: [
      "API 키 보호를 위해 .env를 설정했으나 여전히 키가 노출되는 문제 발생",
    ],
    solves: [
      "Express 서버를 적용해 API 요청을 처리하도록 리팩토링하여 클라이언트가 서버를 통해 요청하도록 구현",
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
    infos: ["짐 보관 예약 서비스"],
    descs: [
      "담당 부분: 메인, 예약 페이지 UI/UX 설계 및 구현",
      "오늘 날짜 이전 선택 불가 기능과 사이즈/날짜별 요금 자동 계산 기능 구현",
      "JavaScript를 활용한 폼 유효성 검사 및 경고 창 적용으로 잘못된 입력 방지"
    ],
    troubles: [
      "HTML include 방식으로 구현된 공통 컴포넌트에서 보안 취약성과 성능 저하 문제 발생",
    ],
    solves: [
      "공통 컴포넌트를 ES6 모듈로 리팩토링하여 코드 재사용성을 높이고 성능과 보안을 강화"
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
    category: "1인 개발 반응형 리뉴얼",
    title: "크렘드마롱",
    infos: [
      "반응형 홈페이지 리뉴얼을 통해 문제점과 사용성을 개선한 사이트",
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
    category: "1인 개발",
    title: "리액트 투두리스트",
    infos: ["리액트를 학습하며 기본적인 CRUD 개념을 익히고자 제작"],
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
    category: "1인 개발 모바일 리뉴얼",
    title: "올드채널",
    infos: [
      "PC 환경에만 적합했던 기존 페이지를 모바일에서도 직관적으로 사용할 수 있도록 브랜드가 추구하는 컨셉에 맞춰 리뉴얼",
    ],
    descs: [
      "Swiper 라이브러리를 이용해 자동 슬라이드와 인디케이터 활성화",
      "수량의 증가/감소에 따라 총합 자동 계산",
    ],
  },
];
