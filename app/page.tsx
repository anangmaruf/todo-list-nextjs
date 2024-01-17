"use client"
import { FaAngleDown } from "react-icons/fa6";
import {useCallback, useState} from "react";
export default function Home() {

    const [tasks, setTasks] = useState([])
    const [showDescTask, setDescTask] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const toggleDescription = useCallback(() => {
        setDescTask((current) => !current)
    }, [])

    const submitTask = useCallback(() => {
        let date = new Date();
        let task: object = {
            id: date.toISOString(),
            title,
            description
        }
        tasks.push(task)
        setTitle("");
        setDescription("");
    }, [title, description])

  return (
      <main className="flex min-h-screen flex-col items-center p-24 ">
          <div className="max-w-5xl w-full pb-5">
              <div className="">
                  <div className="relative pb-2">
                      <label htmlFor="title" className="text-black text-sm font-bold pb-2">Task Title</label>
                      <input type="text" name="title"
                             onChange={(ev) => {
                                 setTitle(ev.target.value);
                             }}
                             value={title}
                             className="w-full border-2 border-blue-900 text-black focus:border-blue-400 p-2 rounded-md"/>
                  </div>
                  <div className="relative pb-2">
                      <label htmlFor="description" className="text-black text-sm font-bold pb-2">Task Description</label>
                      <textarea name="description"
                                onChange={(ev) => {
                                    setDescription(ev.target.value);
                                }}
                                value={description}
                                className="w-full border-2 border-blue-900 text-black focus:border-blue-500 p-2 rounded-md"></textarea>
                  </div>
                  <div className="relative flex justify-center">
                      <button
                          onClick={submitTask}
                          className="text-white bg-blue-950 rounded py-2 px-3 hover:bg-blue-500 transition m-auto">Create
                          Task
                      </button>
                  </div>
              </div>
              <div className="pt-5">
                  <div className="text-left pt-2">
                      <h2 className="text-black text-2xl">List Task</h2>
                      <div className="relative w-full">
                          <div className="bg-white border-blue-900 pt-2">
                              {
                                  tasks.map((task) => (
                                      <div
                                          key={task.id}
                                          className="relative group p-3 border-2 h-fit hover:border-blue-950 hover:bg-blue-950 rounded-md transition ease-in duration-200 cursor-pointer">
                                          <div className="flex items-center justify-between"
                                               onClick={toggleDescription}>
                                              <h3 className="font-bold text-xl group-hover:text-white ">{task.title}</h3>
                                              <FaAngleDown size={20}
                                                           className={`text-black group-hover:text-white transition ease-out duration-500 ${showDescTask ? 'rotate-180' : 'rotate-0'}`}/>
                                          </div>
                                          <p className={`group-hover:text-white pt-3 transition ease-in duration-500 ${showDescTask ? 'block' : 'hidden'}`}>Lorem
                                              {task.description}</p>
                                      </div>
                                  ))

                              }
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </main>
  )
}
