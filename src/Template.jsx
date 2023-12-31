import { useState,useEffect } from "react";
import { CreatePost } from "./CreatePost";
import { Navbar } from "./Navbar";
// import { Post } from "./Post";
import { Suggestion } from "./Suggestion";
import axios from "axios";
import { PostDataContext } from "./Contexts/PostDataContext";
import { Posts } from "./Components/Posts";
// import PostData from "../public/PostData.json";

export const Template = () => {
  const [postData, setPostData] = useState([]);

  const contextValue = {
    postData,
    setPostData,
  };

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
    <div className="flex items-center justify-center bg-[#1e1e1e]">
      <div className="flex container  justify-center">
        <div className="hidden md:block  4xl:border-[#ff0000] bg-[#1e1e1e] md:w-1/4 h-screen text-white">

          <Navbar />

        </div>
        <div className=" w-full overflow-y-scroll   max-w-[425px] md:max-w-[500px]  4xl:border-[#00ff00] h-screen  px-1 py-1 text-white bg-[#1e1e1e] webkit-scrollbar:w-0">
          <CreatePost />
          <PostDataContext.Provider value={{ postData, setPostData}}>
            <Posts />
          </PostDataContext.Provider>
        </div>
        <div className=" hidden lg:block 4xl:border-[#0000ff] bg-[#1e1e1e] h-screen md:w-1/4">
          <Suggestion />
        </div>
      </div>
    </div>
  );
}