FROM node:18-bullseye
WORKDIR /usr/src/app
COPY package*.json ./
RUN rm -rf node_modules package-lock.json && npm install --legacy-peer-deps --production
COPY . .
ENV NODE_OPTIONS="--max_old_space_size=4096"
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
