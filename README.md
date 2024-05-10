# 유용한 사이트 모음

이 프로젝트는 VSCode, Emotion의 Styled Components를 기반으로 제작되었습니다.
Hook, Redux, Redux-Toolkit 모두를 사용한 예시 코드들을 포함하며, 기본적으로 Hook만을 사용해 상태 관리를 합니다.
프로젝트의 확장성과 유지보수, 무엇보다 빠르고 편한 UI 구현을 위해 모듈화와 재사용 가능한 컴포넌트 설계에 중점을 두었습니다.

또한, 빠르고 편한 구현에 초점에 맞춰 빠른 개발을 위해 유용한 사이트 정보들도 포함합니다.

## 색깔 이름 찾기 사이트

[링크](https://www.color-name.com/)

# 프로젝트 시작 세팅

1. 원하는 workspace file 생성
2. open
3. Terminal 이동
4. npm 설치
5. TypeScript + SWC 선택
6. 필수 npm 추가 설치
    <details>
    <summary>빠른 설치</summary>

    ```
    (Essential)
    npm create vite@latest ./
    npm i vite-plugin-svgr vite-tsconfig-paths @emotion/styled @emotion/react
    (Option)
    npm i react-router-dom
    npm i react-redux @reduxjs/toolkit
    npm i react-responsive
    (ETC)
    뭔가 npm이 말썽을 부리는 것 같다면
    npm cache clean --force 실행 후
    npm install
    설치 에러 발생 시, --force 붙여서 재설치
    ```

    </details>
7. 기본 설정 파일 수정
  1. vite.config.ts
  2. tsconfig.json
  3. tsconfig.node.json
  4. .eslinttrc.cjs
  5. vite-env.d.ts
8. ctrl + shift + p ⇒ restart ts server
9. 폴더 구조에 맞게 폴더, 파일 삭제 및 생성
10. init 코드 설정
11. 이후 자유롭게 커스텀

# 프로젝트 구조 안내
이 문서는 프로젝트의 주요 디렉토리 및 파일 구조에 대한 개요를 제공합니다.
각 섹션에서는 프로젝트의 핵심 요소와 그 용도에 대해 설명합니다.

## 폴더 구조
📦src : 주요 소스 코드를 포함
┣ 📂assets : 이미지, 아이콘, 그리고 기타 정적 에셋을 모음
┃ ┣ 📂icons
┃ ┗ 📂imgs
┣ 📂components : 주요 공용 컴포넌트 모음
┃ ┣ 📂actions : HOC나 return 없이 액션 수행을 하기위한 컴포넌트들 포함
┃ ┣ 📂global : 공용 일반 컴포넌트들 포함
┃ ┃ ┣ 📂Btns
┃ ┃ ┣ 📂Carousels
┃ ┃ ┣ 📂Etcs
┃ ┃ ┣ 📂Footer
┃ ┃ ┣ 📂Header
┃ ┃ ┣ 📂Inputs
┃ ┃ ┣ 📂Loadings
┃ ┃ ┣ 📂Modals
┃ ┃ ┃ ┣ 📂widgets : Modal 관련 컴포넌트 포함
┃ ┃ ┃ ┃ ┗ 📜ModalWrapper.jsx
┃ ┃ ┃ ┗ 📜RootModals.jsx : 상태 관리 라이브러리 없이, Hook만을 사용하는 경우 내부 switch를 통해 Modal 반환
┃ ┃ ┣ 📂Selectors
┃ ┃ ┣ 📂Tabs
┃ ┃ ┣ 📂Toasts
┃ ┃ ┃ ┣ 📂widgets : Toast 관련 컴포넌트 포함
┃ ┃ ┃ ┃ ┗ 📜ToastWrapper.jsx
┃ ┃ ┃ ┗ 📜RootToast.jsx : 상태 관리 라이브러리 없이, Hook만을 사용하는 경우 내부 switch를 통해 Toast 반환
┃ ┃ ┗ 📂Tooltips
┃ ┣ 📂layouts : 주요 공통 레이아웃 포함
┃ ┣ 📂providers : Hook 용 provider 포함
┃ ┗ 📂utils : Flutter를 모방한 보일러플레이트 컴포넌트 포함
┣ 📂hooks : Hook 모음
┣ 📂networks : Axios, SWR 등 네트워크 관련 파일 모음
┣ 📂pages : 페이지 모음
┣ 📂styles : 전체적인 스타일을 설정하기 위한 파일 모음
┃ ┣ 📂global : 컬러, 폰트, 스크린 등 기본적인 공유 테마 파일 모음
┃ ┗ 📂init : reset, initCSS 등 시작 시 전체적으로 적용시킬 테마 파일 모음
┣ 📂utils : 애니메이션 키 프레임, 유틸 함수 등의 모음
┃ ┣ 📂animations : 애니메이션 키 프레임 코드 포함
┣ 📜App.jsx
┣ 📜index.jsx
```