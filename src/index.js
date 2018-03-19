import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyDGCAA-xqGm59ckQPia3k7GCC6TdSW5A5Y";
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import MyHeader from './components/Header';
import _ from 'lodash';

class App extends Component { 
	constructor(props) {
		super(props);

		this.state = { 
			videos:[],
			selectedVideo: null
		 };

		 this.videoSearch('surfboards');
	}

	videoSearch(term){

		YTSearch({key:API_KEY, term:term}, (videos) => {
			this.setState({
				videos:videos,
				selectedVideo: videos[0]
			});
		});

	}

	render(){
		//call only couple seconds
		const videoSearch = _.debounce((term)=>{this.videoSearch(term) }, 300);

		return (
			<div> 
			<MyHeader/>
			<SearchBar onSearchTermChange={videoSearch}/>
			<VideoDetail  video={this.state.selectedVideo}/>
			<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo}) }	
			videos={this.state.videos}/>
		</div>
		);
	}
}


ReactDOM.render(<App/>, document.querySelector('.container'));