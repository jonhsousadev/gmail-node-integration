require("dotenv").config();

const auth = {
  type: "OAuth2",
  user: "jonhnbsousa@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: "Jonh Sousa <jonhnbsousa@gmail.com>",
  to: "jonhnbsousa@gmail.com",
  subject: "Gmail Node Integration",
};

module.exports = {
  auth,
  mailoptions,
};