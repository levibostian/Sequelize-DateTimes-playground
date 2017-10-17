FROM node:8.6.0-alpine

EXPOSE 5000

RUN apk add --update tzdata
ENV TZ=America/New_York

RUN mkdir -p /home/app/
ENV HOME=/home/app/
WORKDIR $HOME

CMD ["ls", "/home/app"]
