import Preview from './Preview.js'
import { useParams } from 'react-router-dom'

const PreviewFunction = ({videos, backToMain, playTrailer}) => {

  const urlID = useParams().movieId

    return (
      <Preview
        // videos = {videos}
        backToMain={backToMain}
        playTrailer= {playTrailer}
        urlId = {urlID}
        // key = {Date.now()}
      />
  )
}

export default PreviewFunction; 
