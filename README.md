# 프론트엔드 지원자
김성재

# 프로젝트 구동 방법

1. yarn install 
2. cd ./assignment-elpark
3. yarn dev

* yarn이 설치되어 있지 않은 경우
0. 확인하는 방법
- yarn -v, version 정보가 나오면 yarn이 설치되어 있는 것 입니다.
- yarn이 설치 안되어있다면 터미널에서 1번 실행합니다.(npm install -g yarn)

1. npm install -g yarn
2. yarn을 설치 하였다면, 프로젝트 구동 방법 1번부터 재 실행합니다.


# 사용 가능한 프로젝트 페이지
### '/' , '/chart'
<img width="2021" alt="chartPage" src="https://user-images.githubusercontent.com/103394638/231200152-36b440fe-ae62-4f16-9082-bccfba76b902.png">
홈페이지
JSON 데이터에서 불러온 음악 리스트들을 확인 가능하며, 검색 기능과 정렬 기능을 수행합니다. 

### '/Detail/:id
<img width="2020" alt="DetailPage" src="https://user-images.githubusercontent.com/103394638/231200246-f80148a9-ed34-404c-a336-20fc09cc57fe.png">

디테일페이지
선택된 음악에 관한 디테일 페이지로 상세 정보를 제공합니다.

# 프로젝트 시연 영상

- [시연영상] 'https://www.youtube.com/watch?v=zwhS4TLSiQw'

# 프로젝트 설명
## 프로젝트 폴더 트리
```
├── public
│   ├── data
│   │   └── MockData-chart.json   ( 제공받은 URL을 통해 얻은 데이터를 Mockdata-chart.json 으로 저장 )
│   ├── fonts           ( Pretendard font를 저장 )
│   │   ├── Pretendard-Black.subset.woff2
│   │   ├── Pretendard-Bold.subset.woff2
│   │   ├── Pretendard-ExtraBold.subset.woff2
│   │   ├── Pretendard-ExtraLight.subset.woff2
│   │   ├── Pretendard-Light.subset.woff2
│   │   ├── Pretendard-Medium.subset.woff2
│   │   ├── Pretendard-Regular.subset.woff2
│   │   ├── Pretendard-SemiBold.subset.woff2
│   │   └── Pretendard-Thin.subset.woff2
│   └── vite.svg
├── src
│   ├── Router.jsx      ( react-router를 통한 url 경로를 관리하는 컴포넌트 )
│   ├── assets
│   │   ├── images
│   │   └── react.svg
│   ├── components
│   ├── index.css
│   ├── main.jsx
│   └── pages 
│       ├── Chart       
│       │   ├── components
│       │   │   ├── ChartPage.jsx  
│       │   │   ├── Menu.jsx      ( El Music Logo 및 Menu UI를 담당하는 컴포넌트 )
│       │   │   └── Search.jsx    ( 검색기능, 정렬기능, MusicList 데이터를 불러오는 컴포넌트 )
│       │   └── index.jsx
│       └── Detail
│           ├── components
│           │   └── DetailPage.jsx ( 선택된 Music 데이터를 상세히 보여주는 컴포넌트 )
│           └── index.jsx
├── tailwind.config.js
├── vite.config.js
└── yarn.lock
```

## 프로젝트 구현 설명

1. URL을 통해 받은 JSON 데이터는 Public 폴더 내 Data폴더 안 MockData로 관리하였습니다.
2. Router.jsx 파일은 React-Router를 통해 Url을 관리하였습니다.
3. ChartPage컴포넌트는 페이지 컴포넌트로, 하위 컴포넌트 Menu, Search 컴포넌트를 렌더링합니다.

- 외부 데이터를 가져올 때 axios 라이브러리를 이용하였습니다.

- 외부 데이터(JSON 데이터)를 가져올 때 React Hook 중 useEffect를 사용하였고, 의존성 배열을 추가하여 컴포넌트가 마운트될 경우에 한 번만 가져올 수 있도록 하였습니다.

- Search컴포넌트 24번-30번 code는 JSON 데이터의 'releaseDate'값을 수정하고자 구현한 코드입니다.
  - releaseDate값을 split메서드를 이용해 T 문자열을 기준으로 분리하였습니다.
  - 다시 split메서드를 이용해 - 문자열을 기준으로 분리하였습니다.
  - slice메서드를 이용해 분리 된 값 중 1 번째 인덱스값부터 끝 인덱스값까지 가져왔습니다.
  - join메서드를 통해서 선택 된 값들을 문자열로 연결시켰습니다.
  - 이를 통해서 '2023-04-07T00:00:00-07:00'와 같은 값을 '04.07'과 같은 형식으로 변환했습니다.
  - 그리고 스프레드 문법을 통해 releaseDate 속성 값을 변경한 값으로 재 정의하였습니다.

- JSON 데이터는 React Hook 중 useState를 통해 Search 컴포넌트 내 데이터를 관리하였습니다.

- 검색기능
  - 검색 기능은 input 요소에 입력된 검색어와 JSON데이터의 'im:name' 값과 비교하여, 검색어가 포함된 데이터만 필터링될 수 있도록 구현하였습니다. 이때, 검색어와 데이터 모두 소문자로 변환하여 구현했습니다.

- 정렬기능
  - 정렬 기능은 useEffect를 사용 sortOption 상태 값이 변경될 때마다 데이터를 정렬 할 수 있도록 구현했습니다.

- 이동기능
  - Link 컴포넌트를 사용하여 각각의 음악을 선택할 경우에 상세 페이지로 이동할 수 있도록 id값을 전달하도록 구현하였습니다.

4. DetailPage컴포넌트는 페이지 컴포넌트로, ChartPage > Search 컴포넌트에서 선택된 음악에 대한 상세정보를 렌더링합니다.

- useParams Hook을 사용해서 URL에서 동적으로 전달된 id값을 가져와 데이터를 필터링할 수 있도록 구현했습니다.

5. TailwindCSS를 통해서 반응형 웹을 구현 하였습니다.

- 반복적으로 사용하는 tailwindcss 묶음은 index.css에서 @layer를 통해 관리하여 가독성을 높이고자 했습니다.


### 프로젝트 설치 라이브러리
TailwindCSS, react-router-dom, axios

