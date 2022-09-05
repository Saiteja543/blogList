// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogDetails} = props

  return (
    <ul className="blog-list-container">
      {blogDetails.map(eachBlog => (
        <BlogItem key={eachBlog.id} eachBlogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
