sudo yum update 
sudo yum install git -y
sudo yum install docker -y
sudo usermod -a -G docker ec2-user
id ec2-user
newgrp docker
sudo systemctl enable docker.service
sudo systemctl start docker.service
git clone https://github.com/eltonio450/changedetection.io
cd changedetection.io
git checkout -b prod
git pull origin prod
pip3 install apprise
bash run.sh

