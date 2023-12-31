# ToDoListApp

할 일 목록을 작성하고 관리할 수 있는 To-Do List 웹 어플리케이션 프로젝트

# 사용한 기술 스택

-   FrontEnd  
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/zustand-FFCA28?style=for-the-badge&logo=zustand&logoColor=white">
    <img src="https://img.shields.io/badge/Axios-DD0031?style=for-the-badge&logo=axios&logoColor=white">
    <br>
    <br>
-   BackEnd  
     <img src="https://img.shields.io/badge/nestjs-000000?style=for-the-badge&logo=nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/typeorm-23213E?style=for-the-badge&logo=typeorm&logoColor=white">
    <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
    <img src="https://img.shields.io/badge/jwt-7952B3?style=for-the-badge&logo=JWT&logoColor=white">
    <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">

# 실행 방법

## server

server 폴더는 서버 동작을 위한 코드가 작성되어 있는 폴더입니다.

server 폴더 내부로 이동한 후, `npm install` 명령어로 필요한 라이브러리를 설치한 후,
`npm run start:dev` 를 입력하면 서버를 동작시킬 수 있습니다.

## todolist

todolist 폴더는 동적인 웹 페이지를 렌더링해주기 위한 FrontEnd 코드가 작성되어 있는 폴더입니다.

todolist 폴더 내부로 이동한 후 `npm install` 명령어로 필요한 라이브러리를 설치한 후,
`npm run start`를 입력하면 페이지가 렌더링됩니다.

# 기능 설명

로그인 하기 이전에, 계정이 없는 경우 회원가입 페이지로 이동하여 회원 가입할 수 있습니다.
![register](https://github.com/cgg7777/ToDoListApp/assets/51906365/4033d142-ad4d-43a2-ac32-376a98133bc0)

회원 가입 이후, 가입에 성공한 계정으로 로그인을 진행합니다.
![login](https://github.com/cgg7777/ToDoListApp/assets/51906365/9a9baa07-a754-4b18-af0b-8798397cbdb0)

로그인 이후 계획을 관리할 수 있습니다.
메인 화면은 하루 단위의 계획을 관리하는 페이지로, 당일 해결하지 못한 계획은 다음 날로 옮겨집니다.
![dailyPlan](https://github.com/cgg7777/ToDoListApp/assets/51906365/3f6d696c-b897-4fd0-9edc-e0ef3f5425f4)

달력 페이지는 월별, 주별 계획 현황을 확인할 수 있습니다.
달력 페이지에서의 계획 추가는 시작날짜와 마감 날짜를 설정할 수 있습니다.
![Calendar](https://github.com/cgg7777/ToDoListApp/assets/51906365/595398a3-b3ef-415f-9a8b-68b77026fdf8)

추가할 기능을 계속해서 고민하고 있으며, 디자인, 기능적 측면에서 지속적으로 개선할 예정입니다.
