const tokenAddress = '0xe56D2A5503baEcd99B8E7011aE23b6DbfFb6763d';
const tokenSymbol = 'Oppol';
const tokenDecimals = 18;
const tokenImage = 'https://cdn-icons-png.flaticon.com/512/107/107580.png';

async function addTokenFunction() {

try {
  
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals, 
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Oppol Coin has not been added');
  }
} catch (error) {
  console.log(error);
}
}