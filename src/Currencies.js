import './Currencies.css';

export function Currencies(coin){
    console.log(coin);
    let url = coin.coin.symbol.toLowerCase();
    url = "https://assets.coincap.io/assets/icons/"+url+"@2x.png";
    console.log(url);
    return(
        <div className="coin">
            <span>{coin.coin.rank}</span>
            <div className='Name'>
                <img src={url} alt=""/>
                <span>{coin.coin.name}</span>
            </div>
            <span>{coin.coin.priceUsd}</span>
            <span>{coin.coin.marketCapUsd}</span>
            <span>{coin.coin.vwap24Hr}</span>
            <span>{coin.coin.supply}</span>
            <span>{coin.coin.volumeUsd24Hr}</span>
            {coin.coin.changePercent24Hr > 0 ?<span className='change'>{coin.coin.changePercent24Hr}</span>:<span className='changeRed'>{coin.coin.changePercent24Hr}</span>}
        </div>
    )
}