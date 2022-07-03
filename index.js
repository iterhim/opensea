const sdk = require('api')('@opensea/v1.0#7dtmkl3ojw4vb');
let a

const start = async () => {

    await sdk['retrieving-assets-rinkeby']({order_direction: 'desc', offset: '0', limit: '5', include_orders: 'false'})
        .then(res => a = res.assets)
        .catch(err => console.error('err'));

    await a.forEach(nft=>{
        console.log('creator')
        console.log(nft.creator)
        console.log('owner')
        console.log(nft.owner)
    })
}
start()