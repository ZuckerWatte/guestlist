FROM node:14

COPY ./ app
WORKDIR "/app"
RUN npm ci

CMD ["npm", "start"]

#EXPOSE 3000
