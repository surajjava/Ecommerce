const history = require('connect-history-api-fallback');

module.exports = {
  server: {
    baseDir: ".", // index.html in root
    routes: {
      "/node_modules": "node_modules",
      "/hcl": "src" // map ALL /hcl/* to src/*
    }
  },
  // Rewrite ONLY clean app routes like /hcl/home/main (no extension)
  middleware: [
    history({
      index: '/index.html',
      rewrites: [
        { from: /^\/hcl\/[^/]+\/[^/.]+$/, to: '/index.html' } // exactly two segments after /hcl, second has no dot
      ]
    })
  ],
  files: ["index.html", "src/**/*.{html,js,css}"],
  port: 8081,
  open: true,
  notify: true,
  startPath: "/home/main"
};
