### Install Apprise

`pip install apprise`


### Start changedetection.io

```
docker build -t rwc .
docker run -d --restart -p 5001:5001 rwc -v datastore-volume:/datastore

docker run -d --restart always -p "127.0.0.1:5001:5001" -v datastore-volume:/datastore --name changedetection.io dgtlmoon/changedetection.io
docker kill rwc
export BACKUP_PATH=~/changedetection.io/world-cup.zip
docker run -v rwc_rwc-data:/datastore -v $BACKUP_PATH:/backup.zip python:3.8-slim bash -c "apt-get update && apt-get install unzip -y; unzip -o /backup.zip -d /datastore"
```