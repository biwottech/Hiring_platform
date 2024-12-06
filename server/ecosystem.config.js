module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: './', 
      script: 'npm',
      args: 'start',
      watch: ['server.js', 'routes', 'models', 'controllers',  'util', 'services'],
      ignore_watch: ['node_modules', '.next'],
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'frontend',
      cwd: '/opt/bitnami/projects/frontend', // Path to your API folder
      script: 'npm',
      args: 'start', // Replace with your Express.js entry file if different
      watch: ['pages', 'components', 'styles', 'lib'], // Adjust based on your API project structure
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'development',
      },
    }
  ]
}

// /opt/bitnami/projects/bot-builder$
