const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  async redirect() {
    return [
      {
        source: "/account",
        has: [
          {
            type: "cookie",
            key: "jwtToken",
            value: undefined,
          },
        ],
        permanent: false,
        destination: "/sign-in",
      },
    ];
  },
});
