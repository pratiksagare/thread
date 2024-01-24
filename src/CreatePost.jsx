import { FileInputButton, FileCard } from "@files-ui/react";
import { PostDataContext } from "./Contexts/PostDataContext";
import axios from "axios";
import { useState,useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { currentUsername } from "./Components/PostComponent";
export const CreatePost = () => {
  const PostContext = useContext(PostDataContext);
  const [postBodyTxt, setPostBodyTxt] = useState('');
  // const uuid = uuidv4();
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (postBodyTxt.trim() !== '') {
      try {
        await axios
          .put(`https://u8jih4ctnh.execute-api.us-east-1.amazonaws.com/createPost`, {
            author: currentUsername,
            postId: uuidv4(),
            postBody: postBodyTxt,
            likes: [],
            comments: [],
            likeCount: 0,
            commentCount: 0
          })
          .then((response) => {
            // setTodosList(response.data.Items);
            // console.log(response.data)
            PostContext.setPostData(response.data.Items);
          });
      } catch (error) {
        console.log(error);
      }
    }
    // else {
    //   statusCode = 400;
    // }
  }

  return (
    <>
      <div className="mt-2">
        <form onSubmit={handleCreatePost}>
          <textarea
            id="message"
            rows="3"
            // name="postBodyTxt"
            onChange={e => setPostBodyTxt(e.target.value)}
            className="outline-none resize-none border-none block p-2.5 w-full text-sm  bg-[#1e1e1e] text-white rounded-lg "
            placeholder="Write your thoughts here..."
          ></textarea>

          <div className="flex items-center">
            <button className="bg-sky-600 text-white px-4 py-1 my-2 hover:cursor-pointer font-semibold mr-3" type="submit">
              Post
            </button>
            {/* <FileInputButton onChange={updateFiles} value={files} />
            {files.length > 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "5px",
                  minWidth: "50%",
                }}
              >
                {files.map((file) => (
                  <FileCard
                    key={file.id}
                    {...file}
                    onDelete={removeFile}
                    info
                    preview
                  />
                ))}
              </div>
            )} */}
            <input type="file" />
            {/* <button type="file">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M9.82843 5L7.82843 7H4V19H20V7H16.1716L14.1716 5H9.82843ZM9 3H15L17 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7L9 3ZM12 18C8.96243 18 6.5 15.5376 6.5 12.5C6.5 9.46243 8.96243 7 12 7C15.0376 7 17.5 9.46243 17.5 12.5C17.5 15.5376 15.0376 18 12 18ZM12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z"></path></svg>
            </button> */}
          </div>
        </form>
      </div>
    </>
  );
};
