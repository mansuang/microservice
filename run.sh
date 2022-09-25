#!/bin/bash

array=( client comments event-bus moderation posts query )
for i in "${array[@]}"
do
	docker rm $(docker stop $(docker ps -a -q --filter ancestor=mansuang/${i}:${1} --format="{{.ID}}"))
done
