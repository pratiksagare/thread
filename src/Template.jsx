import { CreatePost } from "./CreatePost";
import { Navbar } from "./Navbar";
import { Post } from "./Post";
import { Suggestion } from "./Suggestion";

export const Template = () => {
    return (
        <div className="flex items-center justify-center bg-[#1e1e1e]">
            <div className="flex container  justify-center">
                <div className="hidden md:block  4xl:border-[#ff0000] bg-[#1e1e1e] md:w-1/4 h-screen text-white">

                    <Navbar />

                </div>
                <div className=" w-full overflow-y-auto webkit-scrollbar:hidden max-w-[425px] md:max-w-[500px]  4xl:border-[#00ff00] h-screen  px-1 py-1 text-white bg-[#1e1e1e]">                    <CreatePost />

                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className=" hidden lg:block 4xl:border-[#0000ff] bg-[#1e1e1e] h-screen md:w-1/4">
                    <Suggestion/>
                </div>
            </div>
        </div>
    );
}