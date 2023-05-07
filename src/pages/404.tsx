import {Link} from "react-router-dom";


export default function Error404() {
    return (
        <div className="font-Exo2 select-none font-bold text-white w-full flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-primaryBlue px-2 rounded rotate-12 absolute">
                Page Not Found
            </div>
            <Link to={""}>
                <button className="bg-primaryBlue text-center">
                    Go to Home page
                </button>
            </Link>
        </div>
    )
}