#####################################################3
# Beginner level Dockerfile
#####################################################3
# FROM node:latest

# WORKDIR /app

# COPY  package.json package-lock.json / 

# RUN npm install 

# COPY . ./

# RUN npm run build

# EXPOSE 3000

# ENTRYPOINT ["npm"]
# CMD ["start"]
#####################################################################################################
                                                #Multistage DockerFile
#####################################################################################################   
# Stage 1: Build environment
FROM node:latest AS build
WORKDIR /app
RUN npm install
COPY . ./
RUN npm run build
# Stage 2: Production environment
FROM node:latest
WORKDIR /app
COPY --from=build /app /app
RUN mkdir /.npm && chown -R 1006500000:0 /.npm
RUN chgrp -R 0 /app && chmod -R g=u /app
USER 1006500000
EXPOSE 3000
CMD ["npm", "start"]
