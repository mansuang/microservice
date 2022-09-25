#!/bin/bash

. .env
echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin

array=( client comments event-bus moderation posts query )
for i in "${array[@]}"
do
    docker build -f ${i}/Dockerfile -t mansuang/${i}:${1} ./${i} && \
    docker push mansuang/${i}:${1}
done
