module.exports = {
  apps : [
  {
    name: 'node-red',
    script: '/home/knthinh//.nvm/versions/node/v11.14.0/bin/node-red',
    args: '--userDir node-red/',
    instances: 1,
    autorestart: true,
    watch: false
  },
  {
    name: 'zookeeper',
    script: '/home/knthinh/tools/kafka/kafka_2.12-2.2.0/bin/zookeeper-server-start.sh',
    args: '/home/knthinh/tools/kafka/kafka_2.12-2.2.0/config/zookeeper.properties',
    instances: 1,
    autorestart: true,
    watch: false
  },
  {
    name: 'kafka server',
    script: '/home/knthinh/tools/kafka/kafka_2.12-2.2.0/bin/kafka-server-start.sh',
    args: '/home/knthinh/tools/kafka/kafka_2.12-2.2.0/config/server.properties',
    instances: 1,
    autorestart: true,
    watch: false
  },
],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
