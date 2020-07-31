FROM node:14

COPY ./ app
WORKDIR "/app"
RUN npm ci --verbose
RUN npm install serve -g -silent
RUN npm run build

CMD ["sh", "-c", "serve -l tcp://0.0.0.0:${PORT} -s /app/build"]

#CMD ["npm", "start"]

#EXPOSE 3000
