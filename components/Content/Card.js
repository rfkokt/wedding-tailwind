import profile from '../../assets/blank-profile.png'

export default function Card({name, desc, src, work}) {
    return (
        <div className={"rounded-xl justify-center boxShadow group"}>
            <div
                className="left-side w-full h-full border-2 rounded-lg transition-all duration-500 transform">
                <p className={"px-7 py-3 italic text-center"}>
                    {`"`}{desc}{`"`}
                </p>
                <div className={"flex px-7 mb-5 items-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"/>
                    </svg>
                    <div className={"py-3"}>
                        <h1 className={"text-xl font-medium"}>
                            {name}
                        </h1>
                        <p className={"text-md text-blackContent opacity-75 font-light"}>
                            {work}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}