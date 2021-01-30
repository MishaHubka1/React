import s from './Post.module.css';

const Post = (props) => {
  return (
          
     <div className={s.item}> 
         <img src='https://media-cdn.tripadvisor.com/media/photo-s/10/a6/23/4b/as-imagens-por-foto-ja.jpg'/>
       { props.massage }
       <div>
        <span>Like</span> {props.likesCount}
        </div>
    </div>
       
  )
}

export default Post;