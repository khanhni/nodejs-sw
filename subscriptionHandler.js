const subscriptions = {};
var crypto = require('crypto');
const webpush = require('web-push');

const vapidKeys = {
  privateKey: 'bdSiNzUhUP6piAxLH-tW88zfBlWWveIx0dAsDO66aVU',
  publicKey:
    'BIN2Jc5Vmkmy-S3AUrcMlpKxJpLeVRAfu9WBqUbJ70SJOCWGCGXKY-Xzyh7HDr6KbRDGYHjqZ06OcS3BjD7uAm8'
};

webpush.setVapidDetails('mailto:example@yourdomain.org', vapidKeys.publicKey, vapidKeys.privateKey);

function createHash(input) {
  const md5sum = crypto.createHash('md5');
  md5sum.update(Buffer.from(input));
  return md5sum.digest('hex');
}

function handlePushNotificationSubscription(req, res) {
  const subscriptionRequest = req.body.data
  console.log(JSON.parse(subscriptionRequest))
  const susbscriptionId = createHash(JSON.stringify(subscriptionRequest));
  subscriptions[susbscriptionId] = JSON.parse(subscriptionRequest);
  res.status(201).json({ id: susbscriptionId });
}

function sendPushNotification(req, res) {
  const subscriptionId = req.params.id;
  const pushSubscription = subscriptions[subscriptionId];
  var vapidPublicKey = 'BL9mTXkxuYardoFD2ZwnynR_XhLxgWyp_z2N1vaNDLTA-mwPXXMfHDfPVhuFuJp1KJn26obMnOW5EcNZ5WKRtoE'
var vapidPrivateKey = 'IoCJz6zW088NifYZLdlQcx0MzObEOQyE8czozgZa-X0';
  var options = {
  vapidDetails: {
    subject: 'mailto:khanhniiiasdsa07@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  },
  TTL: 60
};
  webpush
    .sendNotification(
      pushSubscription,
      JSON.stringify({
        title: 'New Product Available ',
        text: 'HEY! Take a look at this brand new t-shirt!',
        image: '/images/jason-leung-HM6TMmevbZQ-unsplash.jpg',
        tag: 'new-product',
        url: '/new-product-jason-leung-HM6TMmevbZQ-unsplash.html'
      }),
      options
    )
    .catch((err) => {
      console.log(err);
    });

  res.status(202).json({});
}

module.exports = { handlePushNotificationSubscription, sendPushNotification };
