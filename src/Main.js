import './Main.css';
import App from './App';
import { ImmutableX, Config } from '@imtbl/core-sdk';

function Main() {
  const config = Config.SANDBOX; // Or PRODUCTION
  const client = new ImmutableX(config);
  return (
    address ? 
    (
      <App/>
    )
    :
    (
      <div className="Main">
        <div>
          <em className="nes-text is-success">Treasure Hunt</em> is a <br/>location-based NFT game.<br/>
          To start, connect your MetaMask wallet<br/><br/>
        </div>
        <div>
          <button className="nes-btn is-primary" onClick={() => connectWallet('injected')}>Connect</button>
          <button className="nes-btn is-error">Help</button>
        </div>
      </div>
    )
  );
}

export default Main;