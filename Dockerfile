FROM node:boron

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
COPY . /usr/src/app

RUN rm -rf /usr/src/app/node_modules
RUN npm install
RUN npm run build

EXPOSE 6006
CMD ["npm", "run", "storybook"]
