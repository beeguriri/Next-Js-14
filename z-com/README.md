# About
- [Next + React Query로 SNS 서비스 만들기](https://inf.run/CkkYA)
- NextJs + TypeScript 를 사용하여 x.com을 클론코딩 합니다!
- 사용 도구
  - Node 18.19.1
  - Next 14.1.0

## 🎁 시작하기
```shell
$ npx create-next-app@latest

√ What is your project named? ... z-com
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes

$ yarn dev
# 또는 
$ npm run dev
```
- 혹시 node version 문제로 실행이 안된다면?
```shell
# 노드 버전 확인
$ node -v

# nvm 설치
# https://github.com/coreybutler/nvm-windows/releases

# nvm 에서 설치 가능한 노드 버전 확인
$ nvm list available

# 필요한 버전 설치
$ nvm install 18.19.1

# 사용가능한 버전 확인
$ nvm list

# 필요에 따라 버전 변경하여 사용
$ nvm use 18.19.1

# 혹시 yarn 설치 안되어있다면
$ npm install -g yarn
```

## 🎁 
### 0. 뭐가 다른데? 
- Next?
    - 리액트 위에서 돌아가는 프레임워크
    - 리액트는 뷰(화면) 외에 라이브러리로 해결 하던 것들을
    - 넥스트는 라우팅, 캐싱, 스타일링, 최적화, 배포 (+서버 기능) 까지 수행
- `App Router` / Pages Router
    - 디렉토리 기능 변경
    - 레이아웃 기능 추가
    - 편리한 페이지별 권한 체크 (미들웨어 사용)
- React 18 - 서버 컴포넌트 활용
    - 서버에서 랜더링하므로 클라이언트의 부담이 줄어드는 만큼 서버의 부담이 늘어
    - 서버의 부하를 줄이기 위해 캐싱을 적극적으로 사용함

### 1. 클론 코딩 시작!
- 