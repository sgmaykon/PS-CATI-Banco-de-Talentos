import Header from '../components/Home/Header';
import TaskCard from '../components/Home/Cards/TaskCard';
import ToDoList from '../components/Home/Cards/ToDoList';
import { useState, useEffect } from 'react';
import { getLists, createList, updateList, deleteList } from '../api/Lists/ListServices';
import { getTasks, createTask, updateTask, deleteTask, getFiles,  } from '../api/Tasks/TaskServices';
import NewTaskButton from '../components/Home/buttons/NewTaskButton';
import ListTitle from '../components/Home/buttons/ListTitle';
import OpenTask from '../components/Home/Cards/OpenTask';
import MobileNavbar from '../components/Home/mobileNavbar';


export default function Home() {
  const [lists, setLists] = useState();
  const [tasks, setTasks] = useState();
  const [files, setFiles] = useState();
  const mockFile = [{id: "1", name: "mockFile", url: "https://www.google.com"}];
  const date = new Date().toISOString();
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);
  const [selectedTask, setSelectedTask] = useState(false);

  // Fetch lists and tasks on component mount
  useEffect(() => {
    getLists().then((response) => {
      console.log('Lists Response:', response);
      setLists(response);
    });
    getTasks().then((response) => {
      console.log('Tasks Response:', response);
      setTasks(response);
    });
  }, []);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update list title
  const updateListTitle = (id, newTitle) => {
    updateList(id, { title: newTitle }).then((response) => {
      setLists((prevLists) =>
        prevLists.map((list) =>
          list.id === id ? { ...list, title: newTitle } : list
        )
      );
    });
  };

  // Add a new list
  const addList = (title) => {
    createList(title).then((response) => {
      console.log('List created:', response);
      setLists((prevLists) => [...prevLists, response]);
    });
  };

  const delList = (listId) => {
    deleteList(listId).then((response) => {
      console.log('List deleted:', response);
      setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
    });
  };

  const addTask = (listId) => {
    const newTask = {
      title: 'Task Title' ,
      description: 'Task Description',
      finishAt: new Date(Date.now() + 86400000).toISOString(),
      priority: '0',
      listId: listId,
    };
    createTask(newTask).then((response) => {
      if(response.isFinished === undefined){
        response.isFinished = false;
      }
      setTasks((prevTasks) => [...prevTasks, response]);
      setSelectedTask(response);
    });
    
  };
  const handleTaskUpdate = (updatedTask) => {
    if (!updatedTask) {
      setSelectedTask(null);
      return;
    }

    updateTask(updatedTask.id, updatedTask).then((response) => {
      console.log("Task updated:", response);
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t))
      );
    });
  };



  const handleTaskDelete= (taskId) => { 
    deleteTask(taskId).then((response) => {
      console.log('Task deleted:', response);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    });
  };

  // Open a task in a detailed view
  const spawnOpenTask = async (task) => {
    if (selectedTask && selectedTask.id === task.id) {
      setSelectedTask(null);
      setIsClosing(true);
    } else {
      const response = await getFiles(task.id); 
      console.log("Files:", response);
      setFiles(response.length === 0 ? mockFile : response);
  
      setSelectedTask(task); 
    }
  };

  useEffect(() => {
    console.log('Selected Task:', selectedTask);
  }, [selectedTask]);
  

  return (
    <>
      <div className="overflow-y-hidden ">
      <div className={`fixed max-w-[430px]  h-full sm:top-0 z-20 md:right-0 transition-transform duration-500 ${selectedTask ? 'translate-x-0 ' : isClosing ? 'translate-x-full' : 'transition-opacity opacity-0'}  `} >
          {selectedTask && (
              <div className={`transition-transform duration-300 `}>
              <OpenTask
                key={selectedTask.id}
                task={selectedTask}
                files ={files}
                onTaskUpdate={handleTaskUpdate}
                onTaskDelete={handleTaskDelete}
                prompt
              />
            </div>
          )}
        </div>
        {!isMobile && <Header />}
     
        <div className=" w-fit md:max-w-none sm:min-w-[470px] ">
          <div className="flex flex-row w-full sm:min-w-[470px] snap-x p-3 gap-4 md:justify-start justify-center mt-2 sm:mt-40 md:ml-8 md:flex-nowrap">
            {lists &&
              lists.map((list,index) => (
                <div className={`snap-start min-w-[300px] flex-shrink-0 ${index === 0 ? "ml-3" : ""}`}>
                <ToDoList
                  className=""
                  key={list.id}
                  title={list.title}
                  updateTitle={(newTitle) => updateListTitle(list.id, newTitle)}
                  deleteList={delList}
                  listId={list.id}
                >
                  {tasks &&
                    tasks
                      .filter((task) => task.listId === list.id)
                      .map((task) => (
                        <div
                          className=""
                          key={task.id}
                        >
                          <TaskCard
                            className=""
                            key={task.id}
                            listId={task.listId}
                            title={task.title}
                            text={task.description}
                            date={task.finishAt}
                            Priority={task.priority}
                            isFinished={task.isFinished}
                            isMobile={isMobile}
                            openTask={() => spawnOpenTask(task)}
                          />
                        </div>
                      ))}
  
             
                  <div
                    onClick={() => {
                      addTask(list.id);
                    }}
                    className="flex"
                  >
                    <NewTaskButton />
                  </div>
                </ToDoList>
                </div>
              ))}
  
           
            <div className="w-fit flex flex-col h-fit flex-shrink-0 snap-center">
              <ListTitle
                type="NewList"
                title="New List"
                updateTitle={addList}
              />
            </div>
          </div>
          <MobileNavbar />
        </div>
      </div>
    </>
  );
}