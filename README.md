# NexaCode_Soft_Solution


sudo apt-get update -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo apt install npm -y
sudo apt install nginx -y


git clone <YOUR-GIT-Repo>

cd <project-folder>
npm install

npm run build
sudo mkdir /var/www/
sudo cp -R build/ /var/www/




cd /etc/nginx/sites-enabled/
sudo rm -rf default

sudo vim /etc/nginx/sites-available/nginx_frontend

server {
  listen 80 default_server;
  server_name https://nexacodesoftsolution.com;

  location / {
      autoindex on;
      root /var/www/build;
      try_files $uri /index.html;
    }
}

To save this.
enter Esc then write : wq and then enter


sudo ln -s /etc/nginx/sites-available/<nginx-file-name> /etc/nginx/sites-enabled/















