/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const env = require('dotenv')

env.config()

const config = require('config')

const { getKnexConfig } = require('./src/setup/Database/config')

const dbConfig = config.get('database')

module.exports = () => getKnexConfig(dbConfig)
