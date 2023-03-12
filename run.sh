docker build -t rwc .
docker run -d --restart always -p "127.0.0.1:5001:5001" -v datastore-volume:/datastore --name rwc rwc 
docker kill rwc
export BACKUP_PATH=~/changedetection.io/world-cup/
docker run -v datastore-volume:/datastore -v $BACKUP_PATH:/world-cup python:3.8-slim bash -c "cp world-cup/* -d /datastore"
docker restart rwc
open "http://127.0.0.1:5001"