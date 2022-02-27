const nextTranslate = require("next-translate");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  nextTranslate({
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
  })
);
