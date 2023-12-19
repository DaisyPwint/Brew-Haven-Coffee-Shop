import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Featured = () => {
    const {menu} = useSelector(state => state.menu);
    const featuredMenu = menu.slice(0,3);

  return (
    <div className="mt-8">
        <div className="flex justify-center items-center relative pb-3">
            <h1 className="text-gray-900 text-2xl">Featured Menu</h1>
            <div className="absolute w-28 h-1 bg-primary-200 bottom-1"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">      
            {
                featuredMenu.map((item) => (
                <Link to={`/menu/${item.id}`} key={item.id} className="border shadow-lg rounded-lg">
                    <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg cursor-pointer hover:scale-90 ease-in-out 
                    duration-300"/>
                    <div className='px-4 py-4'>
                        <h1 className="capitalize">{item.name}</h1>
                        <p className="text-xl mt-3 font-bold text-primary-200"><span className="text-sm">$</span>{item.price}</p>
                    </div>
                </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Featured