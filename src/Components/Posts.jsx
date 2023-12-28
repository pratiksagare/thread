import { PostDataContext } from "../Contexts/PostDataContext";
import {PostComponent} from './PostComponent';
import { useContext } from "react";
export const Posts=()=>{
    const PostContext = useContext(PostDataContext);
    // console.log("PostContext",PostContext);
    return(<>
    {
        PostContext.postData && PostContext.postData.map((item)=>{
            return (
            <PostComponent postId={item.postId} userProfilePic={item.userProfilePic} userName={item.userName} postBody={item.postBody} postPhotos={item.postPhotos} likeCount={item.likeCount} commentCount={item.commentCount}  key={item.postId}/>
            );
        })
    }

    </>);
}