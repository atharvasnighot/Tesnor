import { AiFillContacts, AiFillHome, AiFillInfoCircle, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <>
      <nav className="p-4 bg-transparent items-center">
        <nav className="p-4 bg-rgba(0, 0, 255, 0.2) items-center">
          <div className="container mx-auto items-center">
            <div className="flex justify-between items-center">
              <a href="/" className="text-black text-2xl font-bold"> FoodBridge</a>
              <div>
                <ul className="flex space-x-6">
                  <li><a href="/" className="text-black flex items-center"> <AiOutlineSearch />{"  "}Search</a></li>
                  <li><a href="/" className="text-black flex items-center"><AiFillHome /> Home</a></li>
                  <li><a href="/" className="text-black flex items-center"><AiFillHome /> Profile</a></li>
                  <li><a href="/" className="text-black flex items-center"><AiFillInfoCircle /> About</a></li>
                  <li><a href="/" className="text-black flex items-center"><AiFillContacts /> Contact</a></li>
                  <Link to='/3'>
                    <li><button className="text-zinc-1800 bg-white p-2 rounded-md">Login</button></li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav >
      </nav>
    </>
  )
}
