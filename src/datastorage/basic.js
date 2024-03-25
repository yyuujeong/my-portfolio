import work1 from "../images/project-weather.png";
import work2 from "../images/project-keepingbox.png";
import work3 from "../images/project-creme.png";
import work4 from "../images/project-todolist.png";
import work5 from "../images/project-oldchannel.jpg";

export const skillTools = [
  {
    skills: ["HTML5", "CSS3", "JS", "jQuery", "React"],
    tools: ["Photoshop", "Illustrator", "Figma"],
    skilldescs: [
      "웹 표준, 웹 접근성을 준수하여 시맨틱 마크업을 작성합니다.",
      "미디어 쿼리, 다양한 레이아웃으로 반응형 웹 제작을 합니다.",
      "JS, jQuery로 애니메이션, 이벤트를 이용해 동적인 웹을 구현합니다.",
      "React 구조와 Hook에 대한 이해를 기반으로 범용성과 재사용성을 고려한 컴포넌트를 설계합니다.",
    ],
    tooldescs: [
      "간단한 디자인 작업, 웹 페이지 시안 제작이 가능합니다.",
      "툴을 활용하여 와이어 프레임 제작과 협업이 가능합니다.",
    ],
  },
];

export const projectList = [
  {
    id: "1",
    site: "https://weather-finedust.vercel.app",
    img: work1,
    name: "포트폴리오",
    tags: ["React", "Styled-Components", "Express.js"],
    category: "개인 프로젝트",
    title: "날씨 조회/위치 기반 미세먼지",
    infos: ["개인 프로젝트", "Open API를 활용해 보고자 제작"],
    descs: [
      "styled-components로 스타일 적용",
      "시간대 별 배경화면 변화",
      "react-router를 이용한 페이지 이동 (특정 링크 스타일링을 위해 NavLink 사용)",
      "Open API를 사용하고 async & await와 axios로 API 호출",
      "API 키 보호를 위해 Express 백엔드 프레임워크 사용 & 정보 조회를 위한 REST API 구현",
      "미디어 쿼리를 이용해 반응형으로 제작"
    ],
    descs_one: [
      "세계 도시를 검색하여 날씨 정보 조회"
    ],
    descs_two: [
      "Geolocation API를 이용해 사용자 위치를 구함",
      "Reverse-Geocoding으로 위도와 경도 값을 주소로 변환",
      "미세먼지 단계별 이모티콘 & 색상 변경"
    ]
  },
  {
    id: "2",
    site: "https://yyuujeong.github.io/team-keepingbox/keepingbox/",
    img: work2,
    name: "포트폴리오",
    tags: ["HTML5", "CSS3", "JS"],
    category: "팀 프로젝트",
    title: "키핑박스",
    infos: [
      "팀 프로젝트",
      "짐을 맡길 수 있는 예약 서비스를 주제로 제작",
      "제작영역 : 기획, 디자인, HTML 마크업, CSS 스타일링, js기능구현",
    ],
    descs: [
      "오늘 날짜 이전으로는 선택되지 않도록 구현",
      "기간, 사이즈 선택에 따라 요금 계산",
      "회원가입/수정, 아이디/비밀번호 찾기를 위해 정규식 유효성 검사 활용",
    ],
  },
  {
    id: "3",
    site: "https://yyuujeong.github.io/responsive-renewal/cremedemarrons/",
    img: work3,
    name: "포트폴리오",
    tags: ["HTML5", "CSS3", "JS", "jQuery"],
    category: "개인 반응형 리뉴얼",
    title: "크렘드마롱",
    infos: [
      "개인 반응형 리뉴얼",
      "홈페이지 반응형 리뉴얼을 통해 문제점과 사용성을 개선하고자 제작",
    ],
    descs: [
      "Swiper, Slick을 이용하여 자동 슬라이드와 인디케이터 활성화",
      "수량 증가/감소 시 총합계 계산",
      "미디어 쿼리를 이용해 반응형으로 제작",
    ],
  },
  {
    id: "4",
    site: "https://yyuujeong.github.io/react-todolist/",
    img: work4,
    name: "포트폴리오",
    tags: ["React", "CSS3"],
    category: "개인 프로젝트",
    title: "투두리스트",
    infos: [
      "개인 프로젝트",
      "리액트를 학습하며 기본적인 CRUD 개념을 익히고자 제작",
    ],
    descs: [
      "기본적인 CRUD 기능 구현",
      "해당하는 부분만 수정, 체크, 삭제되도록 구현",
      "미디어 쿼리를 이용해 반응형으로 제작",
    ],
  },
  {
    id: "5",
    site: "https://yyuujeong.github.io/mobile-renewal/oldchannel/",
    img: work5,
    name: "포트폴리오",
    tags: ["HTML5", "CSS3", "JS", "jQuery"],
    category: "개인 모바일 리뉴얼",
    title: "올드채널",
    infos: [
      "개인 모바일 리뉴얼",
      "PC 환경에만 적합했던 기존 페이지를 모바일에서도 직관적으로 사용할 수 있도록 브랜드가 추구하는 콘셉트에 맞춰 리뉴얼",
    ],
    descs: [
      "Swiper를 이용하여 자동 슬라이드와 인디케이터 활성화",
      "수량 증가/감소 시 총합계 계산",
    ],
  },
];
