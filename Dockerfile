FROM node:alpine as builder

WORKDIR /apps

COPY package.json .
COPY tsconfig.json ./

RUN yarn install

COPY . .
RUN npm run build

FROM nginx 
COPY --from=builder /apps/build /usr/share/nginx/html