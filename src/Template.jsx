import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Suggestion } from "./Suggestion";
import { Notifications } from "./Components/Notifications";
import { Messages } from "./Components/Messages";
import { Settings } from "./Components/Settings";
import { Posts } from "./Components/Posts";
import { Search } from "./Components/Search";
import { Profile } from "./Components/Profile";

export const Template = () => {

  return (
    <Router>
      <div className="flex items-center justify-center bg-[#1e1e1e]">
        <div className="flex container  justify-center">
          <div className="hidden md:block  4xl:border-[#ff0000] bg-[#1e1e1e] md:w-1/4 h-screen text-white">
            <Navbar />
          </div>
          <div className=" w-full overflow-y-scroll   max-w-[425px] md:max-w-[500px]  4xl:border-[#00ff00] h-screen  px-1 py-1 text-white bg-[#1e1e1e] webkit-scrollbar:w-0">
            <Routes>
              <Route path="/" exact element={<Posts />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/Messages" element={<Messages />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </div>
          <div className=" hidden lg:block 4xl:border-[#0000ff] bg-[#1e1e1e] h-screen md:w-1/4">
            <Suggestion />
          </div>
        </div>
      </div>
    </Router >
  );
}