import work1 from "../images/project-weather.png";
import work2 from "../images/project-keepingbox.png";
import work3 from "../images/project-creme.png";
import work4 from "../images/project-todolist.png";
import work5 from "../images/project-oldchannel.jpg";

export const skillTools = [
  {
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Zustand",
      "jQuery",
    ],
    tools: ["Git", "Vercel", "Figma"],
    skilldescs: [
      "웹 표준과 접근성을 고려한 시맨틱 마크업 및 반응형 웹 구현",
      "JavaScript와 jQuery를 활용한 DOM 제어 및 이벤트 처리",
      "React 기반 컴포넌트 설계 및 UI 스타일링 구현",
      "Zustand를 활용한 전역 상태 관리",
    ],
    tooldescs: [
      "Git 기반의 버전 관리와 Vercel을 활용한 프로젝트 배포 경험",
      "Figma를 활용한 와이어프레임 제작 및 화면 구성 설계",
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
    ],
    category: "1인 개발",
    title: "웨더에어",
    infos: [
      "세계 날씨 검색 및 위치 기반 미세먼지 정보 제공 서비스",
    ],
    descs: [
      "Open API를 활용해 세계 날씨 및 위치 기반 미세먼지 정보 제공",
      "Zustand를 활용해 날씨와 대기질 데이터를 전역 상태로 관리",
    ],
    troubles: [
      "API 키가 클라이언트에 포함되어 브라우저 개발자 도구에서 노출되는 문제 발생",
    ],
    solves: [
      "Express 서버를 구축하여 API 요청을 서버에서 처리하도록 구조 개선",
      "API 키를 서버 환경 변수로 관리하여 클라이언트 노출 문제 해결",
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
    infos: ["짐 보관 예약 플로우 및 요금 계산 기능을 구현한 시뮬레이션 프로젝트"],
    descs: [
      "메인·예약 페이지 UI/UX 설계 및 구현 담당",
      "과거 날짜 선택 제한 및 사이즈·날짜별 요금 계산 기능 구현",
      "입력값 유효성 검사를 통해 사용자 오류를 줄이고 직관적으로 안내"
    ],
    troubles: [
      "공통 UI 수정 시 여러 파일을 함께 변경해야 하는 유지보수 문제 발생",
    ],
    solves: [
      "공통 UI 요소를 별도 JavaScript 파일로 분리하여 재사용 가능한 구조로 개선",
      "중복 코드를 제거하고 유지보수 효율 향상",
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
