FROM node:11-slim

# Create app directory
WORKDIR /usr/src/app

RUN apt-get update -y && \
    apt-get install -y python3 \
                       wget \
                       unzip \
                       python3-requests

COPY . ./

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
