import NowPlaying from "@/comps/NowPlaying";
import Home from "..";
import Header from '../../comps/Header';
import { albums } from "@/data/albums";

export const getPaths = async () =>{
    const paths = albums.map(album =>{
        return {
            params: {id: albums.id}
        }
    })
}

 const AlbumNumbered = () => {
    return ( 
        
            <NowPlaying />
        
     );
}
 
export default AlbumNumbered;

