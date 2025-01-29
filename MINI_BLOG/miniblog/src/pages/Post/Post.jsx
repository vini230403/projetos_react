import styles from "./Post.module.css"

// hooks
import { useParams } from "react-router-dom"
import { useFetch_Document } from "../../hooks/useFetch_Document"

const Post = () => {
    const {id} = useParams()
    const {document: post, loading} = useFetch_Document("posts", id)

  return (
    <div className={styles.post_container}>
       {loading && <p>Carregando post...</p>} 
       {post && (
        <>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>{post.body}</p>
            <h3>Este post trata sobre:</h3>
            <div className={styles.tags}>
            {post.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
            </div>
        </>
       )} 
    </div>
  )
}

export default Post