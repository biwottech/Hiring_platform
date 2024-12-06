module.exports = {
  apps: [
    {
      name: "server",
      cwd: "./",
      script: "npm",
      args: "start",
      watch: [
        "server.js",
        "routes",
        "models",
        "controllers",
        "util",
        "services",
      ],
      ignore_watch: ["node_modules", ".next"],
      env: {
        NODE_ENV: "development",
      },
    }
  ],
};