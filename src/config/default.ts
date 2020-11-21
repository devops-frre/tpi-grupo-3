export default {
  port: process.env.PORT ?? 8000,
  env: process.env.NODE_ENV ?? 'development',
  serverAddress: process.env.SERVER_ADDRESS,
  webAddress: process.env.WEB_ADDRESS,
  jwtSecret: process.env.JWT_SECRET,
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucketName: process.env.AWS_BUCKET_NAME,
  },
  mailer: {
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    from: process.env.MAILGUN_FROM_MAIL,
  },
  fdl: {
    apiKey: process.env.FDL_API_KEY,
    prefix: process.env.FDL_PREFIX,
    androidPackageName: process.env.ANDROID_PACKAGE_NAME,
    iosBundleId: process.env.IOS_BUNDLE_ID,
    iosUrlScheme: process.env.IOS_BUNDLE_ID,
    iosStoreId: process.env.IOS_STORE_ID,
    otherPlatformsLink: process.env.FDL_OTHER_PLATFORMS_LINK,
  },
  database: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
}
