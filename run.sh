bash cron.sh
echo "~/changedetection.io/world-cup-$1/:/world-cup"
docker build -t rwc .
docker run -d --name selenium --restart unless-stopped -p 4444:4444 --shm-size="2g" seleniarm/standalone-chromium:4.0.0-20211213
docker run -v datastore-volume:/datastore -v ~/changedetection.io/world-cup-$1/:/world-cup python:3.8-slim bash -c "cp world-cup/* -d /datastore"
docker run -d --restart always --link selenium -p "5001:5001" -e WEBDRIVER_URL="http://selenium:4444/wd/hub" -v datastore-volume:/datastore --name rwc rwc 