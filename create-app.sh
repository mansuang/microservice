#!/bin/bash

array=( client comments event-bus moderation posts query )
for i in "${array[@]}"
do
	kubectl apply -f k8s/${i}.yaml
done
