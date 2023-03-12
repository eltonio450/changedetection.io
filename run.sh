docker build -t rwc .
docker run -v datastore-volume:/datastore -v ~/changedetection.io/world-cup/:/world-cup python:3.8-slim bash -c "cp world-cup/* -d /datastore"
docker run -d --restart always -p "5001:5001" -v datastore-volume:/datastore --name rwc rwc 
open "http://127.0.0.1:5001"