import { FileInputButton, FileCard } from "@files-ui/react";
import { useState } from "react";
export const CreatePost = () => {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    //do something with the files
    setFiles(incommingFiles);
    //even your own upload implementation
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <>
      <div className="mt-2">
        <textarea
          id="message"
          rows="3"
          className="outline-none resize-none border-none block p-2.5 w-full text-sm  bg-[#1e1e1e] text-white rounded-lg "
          placeholder="Write your thoughts here..."
        ></textarea>

        <div className="flex items-center">
          <button className="bg-sky-600 text-white px-4 py-1 my-2 hover:cursor-pointer font-semibold">
            Post
          </button>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-camera ml-5  hover:cursor-pointer text-sky-600"
            viewBox="0 0 16 16"
          >
            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
          </svg> */}
          {/* <FileInputButton onChange={updateFiles} value={files} /> */}
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
      </div>
    </>
  );
};
