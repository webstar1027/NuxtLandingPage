export default function(context){
    console.log('test')
    return {
        httpEndpoint: 'https://apps.crewnew.com/v1/graphql',
        httpLinkOptions: {
            headers:{
                'x-hasura-admin-secret': 'Zd3L3tExefP5AUyP'
            }
        }
    }
}