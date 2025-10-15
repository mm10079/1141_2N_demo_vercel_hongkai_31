import { useState, useEffect } from 'react';

// import blogData_31 from '../assets/data/blogData.json';
import Blog_31 from '../components/blog_31';

const api_url = 'http://localhost:5000/api/blog_31';

const BlogNodePage_31 = () => {
  const [name, setName] = useState('黃泓凱');
  const [id, setId] = useState(214417031);
  const [blogs_31, setBlogs_31] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs', data);
      setBlogs_31(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogFromNodeServer();
  }, []);

  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            blogs from Node -- {name}, {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_31.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
              <Blog_31
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogNodePage_31;
