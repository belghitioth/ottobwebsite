module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)

    shipit.initConfig({
      default: {
        repositoryUrl: 'git@github.com:belghitioth/ottobwebsite.git',
        deployTo: '/var/apps/ottobwebsite',
        deleteOnRollback : false,
        keepReleases: 2
      },
      staging: {
        servers: 'ec2-user@ec2-35-180-140-182.eu-west-3.compute.amazonaws.com',
        key: '~/OthKey.pem',
      }
    });
  };
