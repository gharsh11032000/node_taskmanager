const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendWelcomeEmail(email, name) {
  sgMail.send({
    to: email,
    from: "gharsh11032000@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Enjoy!`,
  });
}

function sendCancelationEmail(email, name) {
  sgMail.send({
    to: email,
    from: "gharsh11032000@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to you back sometime soon.`,
  });
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
