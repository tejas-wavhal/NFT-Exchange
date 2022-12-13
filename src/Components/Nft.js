import React, { useState, useEffect } from 'react'
import { SiBitcoinsv } from 'react-icons/si'

const Nft = (props) => {

  // FOR NFT 1
  const [price, setprice] = useState(10000)
  const [buyingPrice, setbuyingPrice] = useState(null)
  const [buyingPriceFinal, setbuyingPriceFinal] = useState(null)
  const [sellingPrice, setsellingPrice] = useState(null)
  const [profitOrLoss, setprofitOrLoss] = useState(null)
  useEffect(() => {
    let a = () => {
      if (props.increaseOrDecrease === 1) {
        setprice(price - props.num)
      }
      else if (props.increaseOrDecrease === 2) {
        setprice(price + props.num)
      }
    }
    a()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.increaseOrDecrease, props.num])
  let handleOnBuy = () => {
    let bitcoinWallet = props.bitcoin - price
    props.setbitcoin(bitcoinWallet)
    setbuyingPrice(price)
    setbuyingPriceFinal(price)
    setsellingPrice(true)
  }
  let handleOnSell = () => {
    let bitcoinWallet = props.bitcoin + price
    props.setbitcoin(bitcoinWallet)
    setsellingPrice(price)

    setprofitOrLoss(price - buyingPrice)
    setbuyingPrice(null)
  }


  // FOR NFT 2
  const [price2, setprice2] = useState(10000)
  const [buyingPrice2, setbuyingPrice2] = useState(null)
  const [buyingPriceFinal2, setbuyingPriceFinal2] = useState(null)
  const [sellingPrice2, setsellingPrice2] = useState(null)
  const [profitOrLoss2, setprofitOrLoss2] = useState(null)
  useEffect(() => {
    let a = () => {
      if (props.increaseOrDecrease2 === 1) {
        setprice2(price2 - props.num2)
      }
      else if (props.increaseOrDecrease2 === 2) {
        setprice2(price2 + props.num2)
      }
    }
    a()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.increaseOrDecrease2, props.num2])
  let handleOnBuy2 = () => {
    let bitcoinWallet = props.bitcoin - price2
    props.setbitcoin(bitcoinWallet)
    setbuyingPrice2(price2)
    setbuyingPriceFinal2(price2)
    setsellingPrice2(true)
  }
  let handleOnSell2 = () => {
    let bitcoinWallet = props.bitcoin + price2
    props.setbitcoin(bitcoinWallet)
    setsellingPrice2(price2)

    setprofitOrLoss2(price2 - buyingPrice2)
    setbuyingPrice2(null)
  }


  // FOR NFT 3
  const [price3, setprice3] = useState(10000)
  const [buyingPrice3, setbuyingPrice3] = useState(null)
  const [buyingPriceFinal3, setbuyingPriceFinal3] = useState(null)
  const [sellingPrice3, setsellingPrice3] = useState(null)
  const [profitOrLoss3, setprofitOrLoss3] = useState(null)
  useEffect(() => {
    let a = () => {
      if (props.increaseOrDecrease3 === 1) {
        setprice3(price3 - props.num3)
      }
      else if (props.increaseOrDecrease3 === 2) {
        setprice3(price3 + props.num3)
      }
    }
    a()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.increaseOrDecrease3, props.num3])
  let handleOnBuy3 = () => {
    let bitcoinWallet = props.bitcoin - price3
    props.setbitcoin(bitcoinWallet)
    setbuyingPrice3(price3)
    setbuyingPriceFinal3(price3)
    setsellingPrice3(true)
  }
  let handleOnSell3 = () => {
    let bitcoinWallet = props.bitcoin + price3
    props.setbitcoin(bitcoinWallet)
    setsellingPrice3(price3)

    setprofitOrLoss3(price3 - buyingPrice3)
    setbuyingPrice3(null)
  }

  // FOR NFT 4
  const [price4, setprice4] = useState(10000)
  const [buyingPrice4, setbuyingPrice4] = useState(null)
  const [buyingPriceFinal4, setbuyingPriceFinal4] = useState(null)
  const [sellingPrice4, setsellingPrice4] = useState(null)
  const [profitOrLoss4, setprofitOrLoss4] = useState(null)
  useEffect(() => {
    let a = () => {
      if (props.increaseOrDecrease4 === 1) {
        setprice4(price4 - props.num4)
      }
      else if (props.increaseOrDecrease4 === 2) {
        setprice4(price4 + props.num4)
      }
    }
    a()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.increaseOrDecrease4, props.num4])
  let handleOnBuy4 = () => {
    let bitcoinWallet = props.bitcoin - price4
    props.setbitcoin(bitcoinWallet)
    setbuyingPrice4(price4)
    setbuyingPriceFinal4(price4)
    setsellingPrice4(true)
  }
  let handleOnSell4 = () => {
    let bitcoinWallet = props.bitcoin + price4
    props.setbitcoin(bitcoinWallet)
    setsellingPrice4(price4)

    setprofitOrLoss4(price4 - buyingPrice4)
    setbuyingPrice4(null)
  }

  // FOR NFT 5
  const [price5, setprice5] = useState(10000)
  const [buyingPrice5, setbuyingPrice5] = useState(null)
  const [buyingPriceFinal5, setbuyingPriceFinal5] = useState(null)
  const [sellingPrice5, setsellingPrice5] = useState(null)
  const [profitOrLoss5, setprofitOrLoss5] = useState(null)
  useEffect(() => {
    let a = () => {
      if (props.increaseOrDecrease5 === 1) {
        setprice5(price5 - props.num5)
      }
      else if (props.increaseOrDecrease5 === 2) {
        setprice5(price5 + props.num5)
      }
    }
    a()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.increaseOrDecrease5, props.num5])
  let handleOnBuy5 = () => {
    let bitcoinWallet = props.bitcoin - price5
    props.setbitcoin(bitcoinWallet)
    setbuyingPrice5(price5)
    setbuyingPriceFinal5(price5)
    setsellingPrice5(true)
  }
  let handleOnSell5 = () => {
    let bitcoinWallet = props.bitcoin + price5
    props.setbitcoin(bitcoinWallet)
    setsellingPrice5(price5)

    setprofitOrLoss5(price5 - buyingPrice5)
    setbuyingPrice5(null)
  }

  // FOR NFT 6
  const [price6, setprice6] = useState(10000)
  const [buyingPrice6, setbuyingPrice6] = useState(null)
  const [buyingPriceFinal6, setbuyingPriceFinal6] = useState(null)
  const [sellingPrice6, setsellingPrice6] = useState(null)
  const [profitOrLoss6, setprofitOrLoss6] = useState(null)
  useEffect(() => {
    let a = () => {
      if (props.increaseOrDecrease6 === 1) {
        setprice6(price6 - props.num6)
      }
      else if (props.increaseOrDecrease6 === 2) {
        setprice6(price6 + props.num6)
      }
    }
    a()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.increaseOrDecrease6, props.num6])
  let handleOnBuy6 = () => {
    let bitcoinWallet = props.bitcoin - price6
    props.setbitcoin(bitcoinWallet)
    setbuyingPrice6(price6)
    setbuyingPriceFinal6(price6)
    setsellingPrice6(true)
  }
  let handleOnSell6 = () => {
    let bitcoinWallet = props.bitcoin + price6
    props.setbitcoin(bitcoinWallet)
    setsellingPrice6(price6)

    setprofitOrLoss6(price6 - buyingPrice6)
    setbuyingPrice6(null)
  }

  return (
    <>
      <h1 className='text-center my-2' style={{ fontFamily: "'Poppins', sans-serif", fontSize: '25px',fontWeight:'bold' }}>YOU HAVE {props.bitcoin} BITCOIN <SiBitcoinsv style={{ color: 'orange', position: 'relative', top: '-2px' }} /> </h1>
      <div className='row row-cols-1 row-cols-md-3 g-4 mb-4' >

        <div className="col">
          <div className="card" >
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/c236ce90-0bd8-4c8c-a42b-65600b34cfdd/original.png?d=sm-cover" className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Spooky Monkey</h4>
              <h5>Price: {price} <SiBitcoinsv style={{ color: 'orange', position: 'relative', top: '-2px' }} /></h5>
              {sellingPrice && <>
                <h6>Buying price: {buyingPriceFinal}</h6>
                <h6>Selling Price:{sellingPrice}</h6>
                <h6 style={{ color: `${profitOrLoss >= 0 ? 'green' : 'red'}` }}>Your Profit / Loss: {profitOrLoss} <SiBitcoinsv style={{ position: 'relative', top: '-2px' }} /></h6>


              </>}
              <button type="button" className="btn btn-success btn-sm mx-2" onClick={handleOnBuy} disabled={buyingPrice ? true : false}>Buy NFT</button>
              <button type="button" className="btn btn-danger btn-sm mx-2" onClick={handleOnSell} disabled={!buyingPrice ? true : false}>Sell NFT</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" >
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/08cfde53-2f93-447e-aef1-d3b378e8a4ff/original.png?d=sm-cover" className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Party Wiz</h4>
              <h5>Price: {price2} <SiBitcoinsv style={{ color: 'orange', position: 'relative', top: '-2px' }} /></h5>
              {sellingPrice2 && <>
                <h6>Buying price: {buyingPriceFinal2}</h6>
                <h6>Selling Price:{sellingPrice2}</h6>
                <h6 style={{ color: `${profitOrLoss2 >= 0 ? 'green' : 'red'}` }}>Your Profit / Loss: {profitOrLoss2} <SiBitcoinsv style={{ position: 'relative', top: '-2px' }}/> </h6>

              </>}
              <button type="button" className="btn btn-success btn-sm mx-2" onClick={handleOnBuy2} disabled={buyingPrice2 ? true : false}>Buy NFT</button>
              <button type="button" className="btn btn-danger btn-sm mx-2" onClick={handleOnSell2} disabled={!buyingPrice2 ? true : false}>Sell NFT</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" >
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/0ed212bc-5c1e-4b19-b6f1-be9982a98338/original.png?d=sm-cover" className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Mind Glitch</h4>
              <h5>Price: {price3} <SiBitcoinsv style={{ color: 'orange', position: 'relative', top: '-2px' }} /></h5>
              {sellingPrice3 && <>
                <h6>Buying price: {buyingPriceFinal3}</h6>
                <h6>Selling Price:{sellingPrice3}</h6>
                <h6 style={{ color: `${profitOrLoss3 >= 0 ? 'green' : 'red'}` }}>Your Profit / Loss: {profitOrLoss3} <SiBitcoinsv style={{ position: 'relative', top: '-2px' }}/> </h6>

              </>}
              <button type="button" className="btn btn-success btn-sm mx-2" onClick={handleOnBuy3} disabled={buyingPrice3 ? true : false}>Buy NFT</button>
              <button type="button" className="btn btn-danger btn-sm mx-2" onClick={handleOnSell3} disabled={!buyingPrice3 ? true : false}>Sell NFT</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" >
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/4f69eb3a-da6b-4b6f-977d-cb2c0818d498/original.png?d=sm-cover" className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Devil Foxy</h4>
              <h5>Price: {price4} <SiBitcoinsv style={{ color: 'orange', position: 'relative', top: '-2px' }} /></h5>
              {sellingPrice4 && <>
                <h6>Buying price: {buyingPriceFinal4}</h6>
                <h6>Selling Price:{sellingPrice4}</h6>
                <h6 style={{ color: `${profitOrLoss4 >= 0 ? 'green' : 'red'}` }}>Your Profit / Loss: {profitOrLoss4} <SiBitcoinsv style={{ position: 'relative', top: '-2px' }}/> </h6>

              </>}
              <button type="button" className="btn btn-success btn-sm mx-2" onClick={handleOnBuy4} disabled={buyingPrice4 ? true : false}>Buy NFT</button>
              <button type="button" className="btn btn-danger btn-sm mx-2" onClick={handleOnSell4} disabled={!buyingPrice4 ? true : false}>Sell NFT</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" >
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/c5aef1c6-8419-4105-a0b6-ef12a265290c/original.png?d=sm-cover" className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Icie Fire</h4>
              <h5>Price: {price5} <SiBitcoinsv style={{ color: 'orange', position: 'relative', top: '-2px' }} /></h5>
              {sellingPrice5 && <>
                <h6>Buying price: {buyingPriceFinal5}</h6>
                <h6>Selling Price:{sellingPrice5}</h6>
                <h6 style={{ color: `${profitOrLoss5 >= 0 ? 'green' : 'red'}` }}>Your Profit / Loss: {profitOrLoss5} <SiBitcoinsv style={{ position: 'relative', top: '-2px' }}/> </h6>

              </>}
              <button type="button" className="btn btn-success btn-sm mx-2" onClick={handleOnBuy5} disabled={buyingPrice5 ? true : false}>Buy NFT</button>
              <button type="button" className="btn btn-danger btn-sm mx-2" onClick={handleOnSell5} disabled={!buyingPrice5 ? true : false}>Sell NFT</button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card" >
            <img src="https://d2vi0z68k5oxnr.cloudfront.net/71ff7a0c-bb3d-42a6-ba04-460ea03d44e7/original.png?d=sm-cover" className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Foodie bunny</h4>
              <h5>Price: {price6} <SiBitcoinsv style={{ color: 'orange', position: 'relative', top: '-2px' }} /></h5>
              {sellingPrice6 && <>
                <h6>Buying price: {buyingPriceFinal6}</h6>
                <h6>Selling Price:{sellingPrice6}</h6>
                <h6 style={{ color: `${profitOrLoss6 >= 0 ? 'green' : 'red'}` }}>Your Profit / Loss: {profitOrLoss6} <SiBitcoinsv style={{ position: 'relative', top: '-2px' }}/> </h6>

              </>}
              <button type="button" className="btn btn-success btn-sm mx-2" onClick={handleOnBuy6} disabled={buyingPrice6 ? true : false}>Buy NFT</button>
              <button type="button" className="btn btn-danger btn-sm mx-2" onClick={handleOnSell6} disabled={!buyingPrice6 ? true : false}>Sell NFT</button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Nft