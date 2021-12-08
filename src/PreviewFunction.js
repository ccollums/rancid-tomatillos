import Preview from './Preview.js'
import { useParams } from 'react-router-dom'

const PreviewFunction = ({videos, backToMain, playTrailer}) => {

    const urlID = useParams().movieId
    console.log(urlID)
    console.log(backToMain)

        return (
            <Preview
            videos = {videos}
            backToMain={backToMain}
            playTrailer= {playTrailer}
            urlId = {urlID}
            />
        )
      }

export default PreviewFunction; 
