export NODE_ENV=production
cd /home/ubuntu/hmp-ordering-api/dist/server
pm2 start index.js --name="hmp"
