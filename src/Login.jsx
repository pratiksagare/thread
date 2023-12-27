import thumbnail from '../src/assets/images/thumbanail.png'
import google from '../src/assets/images/google.png'
export const Login = () => {
    return <div className='w-screen h-screen bg-[#101010] relative flex justify-center'>
        <div className='flex justify-center items-center fixed'>
            <img src={thumbnail} className='-z-1 bg-contain  min-w-full h-fit bg-center hidden sm:block overflow-hidden' alt='thumbnail' />
            <svg aria-label="Threads" className="flex justify-center items-center x1ypdohk block sm:hidden" fill="#ffffff" height="12%" role="img" viewBox="0 0 192 192" width="12%" xmlns="http://www.w3.org/2000/svg"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>
        </div>
        <div className='flex bg-[#101010] max-[320px]:items-center max-[320px]:justify-center  w-screen h-full items-center justify-center mx-auto my-auto'>
            <div className='flex flex-col justify-center items-center z-20'>
                <span className='text-base text-white font-semibold shadow-xs'>Log in with your Instagram account</span>
                <input className=' w-80 h-[3.2rem] sm:w-[21rem] xs:w-full bg-[#1e1e1e] rounded-lg px-6 py-6 mt-4 text-white placeholder:font-light  focus:outline-none focus:drop-shadow-xl' type='text' placeholder='Username, phone or email' />
                <input className=' w-80 h-[3.2rem] sm:w-[21rem] bg-[#1e1e1e] rounded-lg px-6 py-6 mt-2 text-white placeholder:font-light  focus:outline-none focus:drop-shadow-xl' type='password' placeholder='Password' />
                <button className='w-80 h-[3.2rem] sm:w-[21rem] bg-white mt-2 rounded-lg text-slate-500'>Log in</button>
                <div className='flex flex-row justify-center items-center '>
                    <hr className='h-[0.5px] bg-gray-500 border-0 w-32' />
                    <span className='py-10 text-gray-500 mb-[4.5px] mx-2'>or</span>
                    <hr className='h-[0.5px] bg-gray-500 border-0 w-32' />
                </div>

                <button className='w-80 py-4 sm:w-[21rem] px-5 border-[0.25px] border-gray-500 rounded-lg'>
                    <div className='flex flex-row items-center justify-around'>
                        <img src={google} className='w-10 h-10' />
                        <span className='text-base text-white font-semibold'>Continue with Google</span>
                        <span className='text-base text-white font-semibold'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg></span>
                    </div>
                </button>
            </div>
            <div className='flex bg-[#101010] justify-center items-center absolute bottom-3  whitespace-nowrap z-2'>
                    <ul className='flex flex-row list-none text-xs xs:text-xs text-gray-500 gap-2 sm:gap-8'>
                        <li>2024</li>
                        <li>Threads Terms</li>
                        <li>Privacy Policy</li>
                        <li>Cookies Policy</li>
                        <li>Report a problem</li>
                    </ul>
            </div>
            
        </div>
        
    </div>
}