# 색상조합 추천 서비스
- 선택된 색상의 그라데이션 조합 추천

## 팀 : 자스뿌스자
- 김초연 / 문정은 / 안호진 / 이춘구


## 1. 목표와 기능
- 사용자가 선택한 색상을 기반으로 색상 조합 추천 (→ 이거는 구현을 안 하는 건가요?!)
- 사용자가 선택한 색상과 방향의 gradient 생성
- 생성된 gradient의 css 코드 반환
- 생성된 gradient를 background에서 실시간 확인 가능
- 

## 2. 개발 환경 및 배포 URL

## 3. 프로젝트 구조와 개발 일정
  ### 3.1 프로젝트 구조
  ```
  .
  ├─ index.html
  ├─ .gitignore
  ├─ README.md
  ├─ src
  │  ├─ style
  │  │  ├─ default.css
  │  │  ├─ reset.css
  │  │  ├─ font.css   
  │  │  └─ style.css
  │  ├─ pages
  │  │  ├─ gradient2.html
  │  │  └─ gradient3.html
  │  └─ js
  │     └─ index.js   
  ├─ public
  │  └─ fonts
  │     ├─ GmarketSansBold.otf
  │     ├─ GmarketSansLight.otf
  │     └─ GmarketSansMedium.otf
  └─ modules  
     ├─ module_nav.css
     ├─ module_nav.html
     └─ module_nav.js

  ```
  ### 3.2 개발일정
  - 기간 : 2021.12.16(목) ~ 2021.01.02(일)


## 4. 역할분담
- 기획 : 김초연 / 문정은 / 안호진 / 이춘구
- main palette page : 문정은 / 안호진
- gradient page : 김초연 / 이춘구

## 5. UI


## 6. 메인 기능
- 색상을 hex 코드로 text로 작성해서 넣을 수도 있고, colorpicker로 선택할 수도 있도록 구현
- main 화면에서 generate 버튼 눌렀을 때, 색상 추천 페이지 나오면서 스크롤 나오는 기능
- gradient 화면에서 원하는 색상과 진행 방향의 gradient 생성
- 생성된 gradient는 background에 실시간 반영
- 해당 gradient css 코드 반환
- css 코드 복사기능을 가진 버튼

## 7. 추가 기능


## 8. 개발하며 느낀점
- 김초연 : 협업을 시작할 때는, 최대한 세부적인 사항들까지 정해 놓고 시작하는 것이 중요하다는 걸 깨달았습니다. 함께 git을 공부하고 branch를 써보면서, git branch 전략을 통한 협업을 많이 배울 수 있었습니다. 페어프로그래밍을 통해 실시간으로 의견을 나누면서 함께 코드를 작성하니, 실수나 오류의 빈도도 줄일 수 있었고, 전체적인 코드에 대한 이해도가 높아지는 효과가 있었습니다. 코딩 시간 외에 코드를 살펴보는 시간이나 회의 시간 또한 많이 줄일 수 있었습니다. 