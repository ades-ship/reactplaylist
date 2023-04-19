import { useState } from "react";

const Home = () => {
    const [blogs,setBlogs]=useState([{
        title:"my new website",body:'lorem ipsum',author:'adesh',id:1},
        { title: 'Welcome party!', body: 'developers...', author: 'adesh', id: 2 },
    { title: 'Web dev top tips', body: 'get yours apple mac book pro...', author: 'adesh', id: 3 }
    ])
    return ( 
        <div className="home">
          {blogs.map(blog=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author }</p>
            </div>
          ))}
        </div>
     );
}
 
export default Home;