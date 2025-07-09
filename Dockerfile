# Dockerfile
# 1단계: React 앱 빌드만 수행

FROM node:18-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# package.json 및 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 소스 복사 및 빌드
COPY . .
RUN npm run build

# 결과 확인용: 빌드 결과물을 그대로 유지
# 빌드 아티팩트는 /app/build 경로에 생성됨
