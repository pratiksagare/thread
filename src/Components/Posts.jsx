import { PostDataContext } from "../Contexts/PostDataContext";
import { PostComponent } from './PostComponent';
import { useContext, useEffect, useState } from "react";
import { CreatePost } from "../CreatePost";
import axios from "axios";
export const Posts = () => {
    const PostContext = useContext(PostDataContext);
    // console.log("PostContext",PostContext);
    const [postData, setPostData] = useState([]);

    // const contextValue = {
    //     postData,
    //     setPostData,
    // };

    useEffect(() => {
        const getPostData = async () => {
            try {
                const response = await axios.get('/PostData.json');
                setPostData(response.data);
                // setPost(PostData);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getPostData();
    }, []);
    return (
        < div className="w-full overflow-y-scroll   max-w-[425px] md:max-w-[500px]  4xl:border-[#00ff00] h-screen  px-1 py-1 text-white bg-[#1e1e1e] webkit-scrollbar:w-0">
            <CreatePost />
            <PostDataContext.Provider value={{ postData, setPostData }}>
                {
                    postData && postData.map((item) => {
                        return (
                            <PostComponent postId={item.postId} userProfilePic={item.userProfilePic} userName={item.userName} postBody={item.postBody} postPhotos={item.postPhotos} likeCount={item.likeCount} commentCount={item.commentCount} key={item.postId} />
                        );
                    })
                }
            </PostDataContext.Provider>

        </div>
    );
}