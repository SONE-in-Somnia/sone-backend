module.exports = {
    apps: [
      {
        name: "api.playsone.xyz",
        script: "npm",
        args: "start",
        cwd: "./",
        watch: true,
        ignore_watch: ["node_modules", ".next/cache"],
      },
    ],
  };
  