import React from 'react'
import './App.css'
import qrcode from 'qrcode'
export default function App() {

  const [qr, setQr] = React.useState()
  const [url, setUrl] = React.useState('')

  const GenerateQRCode = () => {
    if (!url) return
    qrcode.toDataURL(url, { width: 256 }, (err, url) => {
      if (err) return
      setQr(url)
    })
  }
  return (
    
    <div className="app">
			<h1>QR Generator</h1>
			<input id='inp'
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button id='btn' onClick={GenerateQRCode}>Generate</button>
			<div></div>
      {qr && <>
				<img id='qrimg' src={qr} />
				<div></div><a href={qr} id='down' download="qrcode.png">Download</a>
			</>}
		</div>
  )
}
