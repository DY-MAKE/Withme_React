# Withme_React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn start`

프로젝트 실행

##### Default Port: `3000`

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Eslint 실행

### `yarn lint:fix`

Eslint 실행과 자동으로 수정 가능한 항목들을 수정

## Directory Structure

```bash
├── src
|  ├── components
|  |  └── Custom Components
|  ├── index.tsx
|  ├── pages
|  |  └── Routed Pages
|  ├── react-app-env.d.ts
|  ├── reportWebVitals.ts
|  └── setupTests.ts
├── craco.config.js
├── package.json
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```

## Commit Convention

프로젝트 커밋에 관련된 규칙

### Commit Message

커밋 메세지에 들어가야 하는 정보

* **CommitType**: 커밋 종류
* **title**: 커밋에 대한 간단한 요약
* **description**: 세부적인 수정 사항, '-' 을 줄 시작에 입력

#### Commit Type

* **feat (Feature)**: 새로운 기능 추가
* **fix**: 버그 수정
* **docs**: 문서 수정
* **style**: 코드 포매팅
* **ref (Refactor)**: 코드 리팩토링

#### Commit Example

```
feat: User 로그인 구현

- UserContext 추가
- Login API 추가
- Login 페이지 추가
```

```
fix: API 통신 이슈 해결

- 백엔드 Base URL이 잘못 세팅되어 있던 문제 해결
```
