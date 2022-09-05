// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlogDetails} = props

  const {title, description, publishedDate} = eachBlogDetails

  return (
    <>
      <li className="blog-item-container">
        <div className="title-and-date-container">
          <h1 className="title">{title}</h1>
          <p className="published-date">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </li>
      <hr className="hr" />
    </>
  )
}

export default BlogItem
