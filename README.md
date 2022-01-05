# 색상조합 추천 서비스

- 선택된 색상의 그라데이션 조합 추천

## 팀 : 자스뿌스자

- 김초연 / 문정은 / 안호진 / 이춘구

## 1. 목표와 기능

### 1.1 목표

- [colorSpace](https://mycolor.space/) 클론

### 1.2 기능

- 화면 resize에 따라 상단 navigation 상태 변화(bar, button)
- 버튼 click시 자동 scroll
- scroll event에 따라 가려져 있던 요소 나타내기
- 사용자가 선택한 색상을 기반으로 어울리는 컬러셋을 추천
- 사용자가 선택한 색상 2, 3개를 기준으로 gradient를 생성
- 생성된 gradient의 css 코드 반환
- 생성된 gradient를 background에서 실시간 확인 가능

## 2. 개발 환경 및 배포 URL

### 2.1 git branch 전략

1. Upstream이 되는 Team Repo에서는 main, develop 2개의 branch를 사용
2. fork한 각자의 origin repo에서 develop branch를 fetch&merge로 동기화해가며 각자의 local git에서 feature branch를 분기 후 개발
3. 기능이 완료된 feature branch를 origin에 push 해주고 이후 Upstream으로 Pull Requests를 요청 후 Merge
4. 개발이 완료된 develop branch를 main branch에 Pull Request 함으로 Product Release

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
- 색상을 hex 코드로 text로 작성해서 넣을 수도 있고, colorpicker로 선택할 수도 있도록 구현
- main 화면에서 generate 버튼 눌렀을 때, 색상 추천 페이지 나오면서 스크롤 나오는 기능
- gradient 화면에서 원하는 색상과 진행 방향의 gradient 생성
- 생성된 gradient는 background에 실시간 반영
- 해당 gradient css 코드 반환
- css 코드 복사기능을 가진 버튼

## 7. 추가 기능

### 7.1 Pallete 페이지

### 7.2 Gradient 페이지

- 생성된 gradient의 CSS 코드를 복사할 수 있는 버튼 추가

## 8. 개발하며 느낀점

- 김초연 : 협업을 시작할 때는, 최대한 세부적인 사항들까지 정해 놓고 시작하는 것이 중요하다는 걸 깨달았습니다. 함께 git을 공부하고 branch를 써보면서, git branch 전략을 통한 협업을 많이 배울 수 있었습니다. 페어프로그래밍을 통해 실시간으로 의견을 나누면서 함께 코드를 작성하니, 실수나 오류의 빈도도 줄일 수 있었고, 전체적인 코드에 대한 이해도가 높아지는 효과가 있었습니다. 코딩 시간 외에 코드를 살펴보는 시간이나 회의 시간 또한 많이 줄일 수 있었습니다.

- 문정은 : 깃을 혼자 사용해보기만 해서 간단한 사용법만 알고 있었는데 협업을 해보면서 git graph가 꼬이는 경험도 해보고 시행착오를 겪으면서 그것을 해결해 나가는 과정중에 많은 것들을 배웠습니다. 혼자서 페이지를 구현하는 것이 아니기 때문에 서로 조율을 해가면서 맞춰나가야 하는 부분이 많았는데 이 과정을 통해서 팀원들간의 소통이 얼마나 중요한지 깨달았습니다. 각 페이지들의 기본 구조 같은것들은 처음부터 세세한 부분부터 기준을 맞추고 시작했더라면 더 효율적으로 시간을 쓸 수 있지 않았을까 하는 생각이 들었습니다.

- 이춘구: 협업을 시작하기 전에 사소해 보이는 것 하나도 맞춰놓지 않으면 나중에 대대적인 수정이 들어갈 수 있으므로 세부사항에 대한 협의가 잘 이루어져야 함을 깨달았습니다.  
  git을 이용한 협업으로 git 사용법과 브랜치 전략에 대해 공부할 수 있었습니다.  
  vscode의 liveshare 기능을 활용한 페어프로그래밍으로 코드의 오류를 미연에 바로잡을 수 있었고, 다른 사람이 보기에도 이해하기 쉬운 코드를 고민하며 작성할 수 있었습니다.

- 안호진: 기획 초기부터 세팅을 잘 하고 시작하는 것이 중요하다는 것을 깨달았습니다. 팀 단위 작업이 처음이다보니 막연한 조급함에 쫓겨 구체적인 코드 컨벤션, 역할 분배에 관한 이야기를 충분히 하지 못하고 시작했습니다. 팀장이라는 역할이 주어졌음에도 제대로 된 팀 빌딩 과정 없이 주먹 구구식으로 2주를 진행한 것 같아 반성의 마음도 듭니다.  
  어떤 핵심 기능의 구현보다는 git branch 전략, vscode liveshare 등 협업 경험을 중점에 둔 팀 프로젝트였습니다. 하지만 Team Repository에서 Issues와 Projects에서의 칸반 보드 등과 같은 유용한 도구를 사용하지 않고 구두로, 채팅으로만 상황을 공유하고 문제 해결에만 급급했던 것이 아쉽습니다.  
  또한, 기능 구현에 급급해 보기 좋은 코드를 작성하지 못한 것 같아 추후 리팩토링 과정을 가질 예정입니다.
