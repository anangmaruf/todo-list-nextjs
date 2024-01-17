import React, {useCallback, useState} from "react";
import {FaAngleDown} from "react-icons/fa6";

export interface IListTask {
    id?: String
    title: String,
    description: String
}

const ListItem: React.FC<IListTask> = ({ id, title, description }) => {
    const [showDescTask, setDescTask] = useState(false);
    const toggleDescription = useCallback(() => {
        setDescTask((current) => !current)
    }, [])
    return (
        <div
            className="relative group p-3 border-2 h-fit hover:border-blue-950 hover:bg-blue-950 rounded-md transition ease-in duration-200 cursor-pointer">
            <div className="flex items-center justify-between"
                 onClick={toggleDescription}>
                <h3 className="font-bold text-xl group-hover:text-white ">{title}</h3>
                <FaAngleDown size={20}
                             className={`text-black group-hover:text-white transition ease-out duration-500 ${showDescTask ? 'rotate-180' : 'rotate-0'}`}/>
            </div>
            <p className={`group-hover:text-white pt-3 transition ease-in duration-500 ${showDescTask ? 'block' : 'hidden'}`}>Lorem
                {description}</p>
        </div>
    )
}

export default ListItem