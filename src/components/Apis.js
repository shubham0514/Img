
import React ,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const Apis = () =>{
const [posts, setPosts] = useState([]);
const [showLoad,setShowLoad ] = useState(false);
console.log(posts);
console.log(showLoad);

useEffect(()=>{
    const search = async() =>{
 const {data}= await axios.get('https://jsonplaceholder.typicode.com/photos')
     console.log(setPosts(data));
};
search();
 setShowLoad(true);

 const timeoutId = setTimeout(() =>{
        setShowLoad(false);

    },4000);

},[]);
 
const renderedResults = posts.map(post => {
    return(
   <div key={post.id} className='ui two column centered grid'>
      
       <div className='column'>
        <div className='four column centered row'>
            <a className='image' href={post.url}>
        <img src = {post.url} 
        style={{alignItems:'center',width:'600px',height:'600px'}} />
        </a>
        <div className='content'>
            <a className='header' href={post.url}>Id :{post.id}</a>
            <h5>Album Id :{post.albumId}</h5>
            <div className='meta'>
               <a href={post.url} >{post.title}</a>
            </div>
        </div>
        </div>
       </div>
   </div>
   );
})

return (
    <div>
      <h1> {showLoad ? 'Loading Data...': renderedResults}</h1>

    </div>
    );
};
export default Apis;