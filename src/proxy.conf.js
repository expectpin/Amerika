

const PROXY_CONFIG = [
  {
    context: [
      "/api",
      "/swagger",
      "/connect",
      "/auth",
      "/.well-known"
    ],
    target: "http://localhost:3000",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
