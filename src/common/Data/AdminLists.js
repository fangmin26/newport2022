export const SideBarLists = [
  {
    icon:"icon",
    title:"home",
    titleLink:"/admin/main",
  },
  {
    icon:"icon",
    title:"project",
    subtitle1:"web",
    subtitle2:"webapp",
    titleLink:"/admin/project/web",
    subtitle1Link:"/admin/project/web",
    subtitle2Link:"/admin/project/webapp"
  },
  {
    icon:"icon",
    title:"skillset",
    subtitle1:"front",
    subtitle2:"back",
    titleLink:"/admin/skillset",
    subtitle1Link:"/admin/skillset",
    subtitle2Link:"/admin/skillset"
  },
  {
    icon:"icon",
    title:"toyprj",
    titleLink:"/admin/toyprj"
  },
  {
    icon:"icon",
    title:"contact",
    titleLink:"/admin/contact"
  }
]

export const WebProjectList = [
  {
    title:"ATTI(ADMIN)",
    description:"폐암환자 대상의 항암제 부작용 및 증상 모니터링 앱용 어드민",
    projectDate:"2021.08~2021.11",
    tools:"javascript, nextjs, redux",
    whattodo:[
      "admin 전체 구조 작업,userrole 별 페이지 세분화",
      "로그인, 회원가입",
      "권한관리 - 관리자등록, 회원등록, 삭제",
      "환자 desease 및 정보 입출력",
      "환자 report 기간조회 및 수정"
    ]
  },
  {
    title:"식품영양 데이터베이스",
    description:"식품 영양 관련 데이터베이스 툴(엑셀형식)",
    projectDate:"2021.11~2022.02",
    tools:"javascript, reactjs, redux",
    whattodo:[
      "전체 구조 작업(행렬 고정 폼, 열별 조건부 토글)",
      "admin 로그인,userrole 별 페이지 분류",
      "행별 입력, 저장 및 수정 작업(행별 약 80여개 데이터)",
      "페이지네이션 라이브러리 생성",
      "select, input, 버튼 통합 서치 기능",
      "userrole간 데이터 비교 페이지 작업 및 최종 데이터 저장 및 수정",
      "최종데이터 및 중간데이터 엑셀 다운로드"
    ]
  },
  {
    title:"O**(ADMIN)",
    description:"특정질병 환자들을 위한 1:1 모니터링 및 다이어리 앱용 어드민(레이아웃 작업)",
    projectDate:"2022.01~2022.02",
    tools:"javascript, reactjs, redux",
    whattodo:[
      "전체 구조 작업(로그인,네비게이션,사이드바)",
      "공통 모달,토글,인풋 설정 셋팅",
      "기본 테이블 및 페이지네이션 작업",
      "페이지네이션 라이브러리 생성",
    ]
  },
  {
    title:"HERINGS(홈페이지)",
    description:"자사 홈페이지 전체 리뉴얼 작업",
    projectDate:"2022.06",
    tools:"javascript, reactjs",
    whattodo:[
    "a링크를 활용한 tab 변경 및 scroll효과",
    "데이터 추가,삭제 및 전체 ui 변경",
    "s3 활용한 영상 삽입 및 반응형 페이지 작업"
    ]
  },
  {
    title:"HEALIARY(ADMIN)",
    description:"암환자 대상의 1:1 맞춤 식단 앱용 어드민",
    projectDate:"2022.06~2022.11",
    tools:"javascript, react, redux-toolkit",
    whattodo:[
      "admin 전체 구조 작업,userrole 별 페이지 세분화",
      "로그인, 회원가입",
      "권한관리 - 관리자,회원,병원 등록 및 삭제",
      "개인 건강관리 상세 통계 그래프 조회(일별,주별,월별)",
      "컨텐츠 등록 및 서치 기능",
      "회원 목록 세분화 서칭-텍스트 및 조건부 검색(배열형)",
      "게시판 관리 - 공지글 작성, 답변작성 및 삭제, 신고게시글필터 및 댓글과 대댓글기능",
      "계정관리 - 회원별 필터링,서칭 및 출력,수정,삭제"
    ]
  },
]

export const AppProjectList = [
  {
    title:"O**(WebApp)",
    description:"특정 질병환자들을 위한 1:1 모니터링 및 다이어리 앱",
    projectDate:"2022.01~2022.06",
    tools:"javascript, reactjs, redux",
    whattodo:[
      "로그인,비밀번호찾기, 개인정보처리방침 작업",
      "정기 점검 페이지 입력폼 작업",  
      "정기 점검에 따른 콘텐츠 추천(알고리즘 분석 반영)",
      "다이어리 기록(날짜별 데이터 입력) 저장 및 수정,삭제",
      "다이어리 기록 월별 확인 및 그래프 출력",
      "커뮤니티 - 글 포스팅, 댓글입력 및 삭제, 게시글 신고, 작성자 차단",
      "내정보 변경 및 1:1문의"
    ]
  },
  {
    title:"HEALIARY(WebApp)",
    description:"암환자 대상의 1:1 맞춤 식단 앱용 어드민",
    projectDate:"2022.11~2023",
    tools:"javascript, react, redux-toolkit",
    whattodo:[
      "1차 개발 버그 수정",
      "2차 개발 테스트 진행 및 버그 수정"
    ]
  },
]

export const FrontSkillSetLists = [
  {
    title:"FrontEnd SkillSet",
    cont:[
      "-비동기 라이브러리 활용 실서버 연결 가능, api 사용가능 -axios, redux-thunk",
      "-상태관리 라이브러리 활용 가능- redux, redux-toolkit, contextapi",
      "-css 라이브러리 활용 가능- taindwindcss, bootstrap",
      "-공통 모듈 및 구조화 작업 가능- 공통작업 부문 최소화, 레이아웃 추출 및 컴포넌트화",
      "-옵션값에 따른 서칭 및 페이지네이션 작업 가능",
      "-formData, csv 파일 활용 경험 있음",
      "-Local Storage, Session Storage 사용 가능",
    ]
  },
  {
    title:"FrontEnd StudyNow",
    cont:[
      "-javascript 통독예정",
      "-next.js seo 최적화 학습예정",
      "-Flutter나 React native 중 하나 선택 후 학습 예정"      
    ]
  }
]
export const BackSkillSetLists = [
  {
    title:"BackEnd SkillSet",
    cont:[
      "-nest.js 기본 구조 셋팅,api 생성 가능",
      "-기본 CRUD 및 간단한 sql 쿼리문 조회, 수정, 등록, 삭제 가능",
      "-간단한 서치 및 조회 가능 - 페이지네이션+서치"
    ]
  },
  {
    title:"BackEnd StudyNow",
    cont:[
      "-node.js 통독 중",
      "-aws 기본 기능 학습 중",
      "-정보처리기사 실기 준비중",        
    ]
  }
]