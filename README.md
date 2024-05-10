# 유용한 사이트 모음
## 색깔 이름 찾기 사이트
[링크](https://www.color-name.com/)

# 프로젝트 시작 세팅
1. 원하는 workspace file 생성
2. open
#### 3. Terminal
npm create vite@latest ./ 
npm i vite-plugin-svgr vite-tsconfig-paths @emotion/styled @emotion/react
(Options)
npm i react-router-dom
npm i react-redux @reduxjs/toolkit
npm i react-responsive

# 프로젝트 구조 안내
이 문서는 프로젝트의 주요 디렉토리 및 파일 구조에 대한 개요를 제공합니다. 각 섹션에서는 프로젝트의 핵심 요소와 그 용도에 대해 설명합니다.

## 1. 폴더 구조
📦src
프로젝트의 주요 소스 코드를 포함합니다.

📂assets
이미지, 아이콘, 그리고 기타 정적 자산을 포함합니다.

📂icons: SVG 아이콘 파일
📂imgs: 이미지 파일
📂components
재사용 가능한 React 컴포넌트들을 포함합니다.

📂actions: 특정 동작을 수행하는 컴포넌트 (예: Auth, ScrollTop)
📂global: 전역적으로 사용되는 UI 컴포넌트들 (버튼, 입력 필드, 모달 등)
📂layouts: 페이지 레이아웃을 정의하는 컴포넌트들
📂providers: 컨텍스트 또는 Redux 프로바이더와 같은 전역 상태 관리 컴포넌트
📂utils: UI 구성에 사용되는 유틸리티 컴포넌트들
📂datas
임시 데이터 파일 또는 목업 데이터를 포함합니다.

📂hooks
커스텀 React 훅을 포함합니다.

📂networks
네트워크 요청과 관련된 설정 파일들을 포함합니다. (예: Axios 설정, API 연결)

📂pages
각 페이지 컴포넌트를 포함합니다. 각 폴더는 특정 기능 또는 페이지 유형을 나타냅니다.

📂routes
라우팅과 관련된 구성 요소를 포함합니다.

📂styles
전역 스타일, 초기화 스타일, 테마 설정 등을 포함합니다.

📂utils
전역적으로 사용되는 유틸리티 함수들을 포함합니다.

📜App.jsx
애플리케이션의 루트 컴포넌트.

📜index.jsx
애플리케이션의 진입점. React DOM을 렌더링합니다.

📜reportWebVitals.js
웹 애플리케이션의 성능 측정을 위한 스크립트.

## 2. 추가 안내
이 프로젝트는 Styled Components와 Redux를 사용하여 스타일과 상태 관리를 합니다.
각 컴포넌트와 유틸리티 함수는 충분한 주석을 포함하고 있으므로, 코드를 살펴보며 기능을 이해하는 데 도움이 됩니다.
프로젝트의 확장성과 유지보수를 위해 모듈화와 재사용 가능한 컴포넌트 설계에 중점을 두었습니다.

## 3. 기여 가이드
새로운 기능을 추가하거나 기존 코드를 수정할 때는 해당 변경 사항을 문서화하고, 적절한 단위 테스트를 포함하는 것이 좋습니다.
코드 리뷰 프로세스를 통해 팀원들과 코드 품질을 유지하고 개선할 수 있습니다.