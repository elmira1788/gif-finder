import TextList from './TextList'
import Error from './Error'
import { GiphyFetch } from '@giphy/js-fetch-api'
import {useState} from 'react'
import './GifMaker.css';


function GifMaker() {
  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const [err, setErr] = useState(false)
  
  const handleInput = (e) => {
    setText(e.target.value)
  }
  const giphy = new GiphyFetch("1FMtpVLnNTai96Ywi7u3011mcF65BAj2")
  
  const handleSubmit = (e) => {
    if(text.length === 0) {
      
      //set error state to true
      setErr(true)
      return
    }

    console.log(text)

    const apiCall = async () => {
      const res = await giphy.animate(text, {limit: 20})
      console.log(res)
      
      setResults(res.data)
    }
    
    apiCall()
    //change error state back to false
    setText('')
    setErr(false)

  }
  
  return (
    <div className="App">
      <h1>Animated Text Generator</h1>
      <h3>Type text into the form and hit submit</h3>
      <input className='input-field' value={text} onChange={handleInput} />
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
      <Error isError={err} text='need length longer than 0 for input'/>
      {results && <TextList gifs={results}  />}
    </div>
  );
}
export default GifMaker;