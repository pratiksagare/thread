export const Post = (props) => {
    return (
        <div className="mt-2">
            <div className="flex items-center text-slate-300 justify-between">
                <div className="flex items-center ">
                    {/* <div className="w-[28px] h-[28px] bg-slate-300 rounded-full hover:cursor-pointer"></div> */}
                    <img className='w-[28px] h-[28px] bg-slate-300 rounded-full hover:cursor-pointer' src={props.userProfilePic} alt="profile_pic"/>
                    {/* <span className="text-slate-300 ml-2 text-[14px] hover:cursor-pointer">John Doe</span> */}
                    <span className="text-slate-300 ml-2 text-[14px] hover:cursor-pointer">{props.userName}</span>
                </div>

                <div className="flex justify-items-end hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-slate-300 ml-auto" viewBox="0 0 24 24"><path d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" fill="currentColor"></path></svg>
                </div>
            </div>

            <div className="w-full h-[300px] bg-slate-300 my-2"></div>
            <div className="flex items-center px-1 py-1 text-slate-300 gap-2">

               

                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" fill="currentColor"></path></svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z" fill="currentColor"></path></svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.3078L20.3214 11L15 6.69224V10H13C10.5795 10 8.41011 11.0749 6.94312 12.7735C8.20873 12.2714 9.58041 12 11 12Z" fill="currentColor"></path></svg>
                
                <span className="text-[12px]">Liked By 100K</span>
            </div>
            <div className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, unde!
            </div>
            <div className="flex flex-col">
                <span className="text-[11px]">
                    Lorem, ipsum dolor.
                </span>
                <span className="text-[11px]">
                    Lorem, ipsum.
                </span>
            </div>
            <div className="">
               
                <textarea id="message" rows="2" className="outline-none resize-none border-none block  w-full text-sm  bg-[#1e1e1e] text-white rounded-lg " placeholder="Write Comment here..."></textarea>
            </div>
        </div>
    )
}