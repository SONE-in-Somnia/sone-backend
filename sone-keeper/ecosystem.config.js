module.exports = {
    apps: [
      {
        name: "keeper.playsone.xyz",
        script: "npm",
        args: "start",
        cwd: "./",
        watch: true,
        ignore_watch: ["node_modules", ".next/cache"],
      },
    ],
  };
  