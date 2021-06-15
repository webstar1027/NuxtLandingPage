const env = process.env.NODE_ENVIROMENT

import prodConfig from './app-config/prodConfig.js'
import stageConfig from './app-config/stageConfig.js'
import devConfig from './app-config/devConfig.js'

function getConfig(){
    switch (env) {
        case 'production':
            return prodConfig
        case 'stageing':
            return stageConfig
        case 'development':
            return devConfig
        default:
            return stageConfig
    }
}
const config = getConfig()

export default config