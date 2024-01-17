import { FileInputButton, FileCard } from "@files-ui/react";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const CreatePost = () => {
  const [postBodyTxt, setPostBodyTxt] = useState('');
  const uuid = uuidv4();
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
    try {
      await axios
        .put(`https://u8jih4ctnh.execute-api.us-east-1.amazonaws.com/createPost`, {
          postId: uuid,
          postBody: postBodyTxt,
          likes: [],
          comments: [],
          likeCount: 0,
          commentCount: 0,
          postComments: []
        })
        .then((response) => {
          // setTodosList(response.data.Items);
          console.log(response.data)
        });
    } catch (error) {
      console.log(error);
    }
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
            <FileInputButton onChange={updateFiles} value={files} />
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
            )}
          </div>
        </form>
      </div>
    </>
  );
};
