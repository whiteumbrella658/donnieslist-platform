module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'super secret passphrase',
  // Database connection information
  // database: 'mongodb://db/donnyslist',
  // database: 'mongodb://127.0.0.1:27017/donnyslist',
  // Setting port for server
  port: 3000,
  // Configuring Mailgun API for sending transactional email
  mailgun_priv_key: 'mailgun private key here',
  // Configuring Mailgun domain for sending transactional email
  mailgun_domain: 'mailgun domain here',
  // Mailchimp API key
  mailchimpApiKey: 'mailchimp api key here',
  // SendGrid API key
  sendgridApiKey: 'sendgrid api key here',

  // Stripe API key
  //stripeApiKey: '',

  stripeApiKey: '',
  stripePaymentAdminPercentage: 10,  //percentage amount goes to admin for each transaction
  stripePaymentCurrencyCode: 'usd',

  // necessary in order to run tests in parallel of the main app
  test_port: 3001,
  test_db: 'mern-starter-test',
  test_env: 'test',

  // website_url: 'https://www.donnieslist.com',
  // website_url: 'http://192.168.1.64:5000',

  website_url: 'http://localhost:5000',

  //tokbox or opentok api details, trial period  
  /*opentok_apiKey : "",
  opentok_apiSecret : "",*/

  //tokbox or opentok api details : live 
  //updated on 23 april 2018 by mohit
  opentok_apiKey : "",
  opentok_apiSecret : "",  

  //facebook login authentication
  facebookAuthClientID      : "",
  facebookAuthClientSecret  : "",
  facebookAuthCallbackURL   : "https://www.donnieslist.com/api/auth/facebook/callback", 

  //twitter login authentication
  twitterAuthConsumerKey    : "",
  twitterAuthConsumerSecret : "",
  twitterAuthCallbackURL    : "http://donnieslist.com/api/auth/twitter/callback",
  
  //gmail credentials for sending email : nodemailer
  gmailEmail : "",
  gmailPassword : ""

};
