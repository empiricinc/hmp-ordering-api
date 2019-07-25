export NODE_ENV=production
cd /home/ubuntu/hmp-ordering-api
pm2 start /dist/server/index.js --name="hmp"
