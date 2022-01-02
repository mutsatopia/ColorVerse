# 색상조합 추천 서비스
- 선택된 색상의 그라데이션 조합 추천

## 팀 : 자스뿌스자
- 김초연 / 문정은 / 안호진 / 이춘구


## 1. 목표와 기능
### 1.1 목표
- [colorSpace](https://mycolor.space/) 클론
### 1.2 기능
- 사용자가 선택한 색상을 기반으로 어울리는 컬러셋을 추천
- 사용자가 선택한 색상 2, 3개를 기준으로 gradient를 생성

## 2. 개발 환경 및 배포 URL
- 추천 그라데이션 확인
- 추천 그라데이션 CSS 코드 반환
- 다양한 방향의 그라데이션 생성

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
### 6.1 Pallete 페이지
### 6.2 Gradient 페이지
- `<input type="color"/>`과 `<input type="text"/>`를 겹쳐놓음으로 클릭하는 위치에 따라 색상을 선택하거나 직접 HEX 코드 입력이 가능
- `<input type="color"/>`에서 선택한 색상값에 따라 input의 배경색과 내부의 글자색 변경
- `<input type="text"/>`에 HEX코드를 입력하면 정규표현식으로 검증하여 유효한 HEX 코드일 시 input의 배경색과 내부의 글자색 변경, 유효하지 않을 시 기본 배경색과 글자색으로 변경
- generate 버튼 클릭 시 선택한 orientaion과 색상을 조합하여 CSS Code에 조합된 gradient 코드를 표시하고 페이지의 배경색을 생성된 gradient로 변경

## 7. 추가 기능
### 7.1 Pallete 페이지
### 7.2 Gradient 페이지
- 생성된 gradient의 CSS 코드를 복사할 수 있는 버튼 추가

## 8. 개발하며 느낀점
- 이춘구: 협업을 시작하기 전에 사소해 보이는 것 하나도 맞춰놓지 않으면 나중에 대대적인 수정이 들어갈 수 있으므로 세부사항에 대한 협의가 잘 이루어져야 함을 깨달았다.  
git을 이용한 협업으로 git 사용법과 브랜치 전략에 대해 공부할 수 있었다.  
vscode의 liveshare 기능을 활용한 페어프로그래밍으로 코드의 오류를 미연에 바로잡을 수 있었고, 다른 사람이 보기에도 이해하기 쉬운 코드를 고민하며 작성할 수 있었다.