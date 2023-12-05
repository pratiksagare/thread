import thumbnail from '../src/assets/images/thumbanail.png'
import google from '../src/assets/images/google.png'
export const Login = () => {
    return <div className='w-screen h-screen bg-[#101010] relative'>
        <div className='flex justify-center'>
            <img src={thumbnail} className='-z-1 bg-contain absolute min-w-full h-fit bg-center hidden sm:block overflow-hidden' alt='thumbnail' />
        </div>
        <div className='flex bg-[#101010] w-screen h-screen items-center justify-center mx-auto my-auto'>
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
            
        </div>
        <div className='flex bg-[#101010] justify-center items-center relative sm:-mt-10 whitespace-nowrap z-0'>
                    <ul className='flex flex-row list-none text-sm text-gray-500 gap-3 sm:gap-8'>
                        <li>2024</li>
                        <li>Threads Terms</li>
                        <li>Privacy Policy</li>
                        <li>Cookies Policy</li>
                        <li>Report a problem</li>
                    </ul>
            </div>
    </div>
}