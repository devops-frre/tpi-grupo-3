import config from 'config'
import Knex from 'knex'
import { Model } from 'objection'


import { getKnexConfig } from './config'

export const bindDB = ()=>{

    const dbConfig: { [key: string]: string } = config.get('database')

    const environment: 'development' | 'staging' | 'production' = config.get('env')
    const knexConfig = getKnexConfig(dbConfig)
    const connectionConfig = knexConfig[environment]
    
    const Database = Knex(connectionConfig)
    
    
    
    Model.knex(Database)
    
    return { Database }

}



