import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import SearchBar from './components/search_bar.js'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
const API_KEY='AIzaSyB1wQnBkfHLwIhShejwas1RQyOi5aX2dDA'




class App extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            videos:[],
        selectedVideo: null};

            this.videoSearch('fortnite')
           
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos)=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0] 
               });
            });
    }

render(){
    return (<div>
        <SearchBar onSearchtermchange={term=>this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
         onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
         videos={this.state.videos}/>
    </div>)
}
}

const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(<App/>);