export NODE_ENV=production
cd /home/ubuntu/hmp-ordering-api
pm2 start app.js --name="hmp"
