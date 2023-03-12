docker build -t rwc .
docker run -d --restart always -p "127.0.0.1:5001:5001" -v datastore-volume:/datastore --name rwc rwc 
docker kill rwc
export BACKUP_PATH=~/changedetection.io/world-cup.zip
docker run -v datastore-volume:/datastore -v $BACKUP_PATH:/backup.zip python:3.8-slim bash -c "apt-get update && apt-get install unzip -y; unzip -o -j /backup.zip -d /datastore"
docker restart rwc
open "127.0.0.1:5001"