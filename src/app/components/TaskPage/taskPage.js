import { useEffect,useState } from 'react';
import TaskForm from '../taskForm/TaskForm';
import TaskList from '../taskList/taskList';
import axios from 'axios'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const client = axios.create({
  baseURL:'http://127.0.0.1:8000',
  withCredentials:true
})


export default function TaskPage({}) {
  const [title,setTitle] = useState("")
  const [dueDate,setDueDate] = useState()
  const [description,setDescription] = useState("")
  const [isComplete,setIsComplete] = useState(false)  
  const [taskData, setTaskData] = useState()
  const [open, setOpen] = useState(false);

  //this is for editing modal
  const [editId, setEditId] = useState()
  const [editTitle,setEditTitle] = useState("")
  const [editDueDate,setEditDueDate] = useState()
  const [editDescription,setEditDescription] = useState("")
  const [editIsComplete,setEditIsComplete] = useState(false) 
  const [isEdit,setIsEdit] = useState(false) 

  const onOpenModal = (data) => {
    setEditId(data.id)
    setEditTitle(data.title)
    setEditDueDate(data.completedBy)
    setEditDescription(data.body)
    setEditIsComplete(data.isCompleted)
    setIsEdit(true)
    setOpen(true);
  }
  const onCloseModal = () => {
    setIsEdit(false);
    setOpen(false);
  }
  

    const sendData = async(e) => {
      e.preventDefault()
      try{    
          await client.post(
              'api/createTask',
              {
                  title:title,
                  completed_by: new Date(dueDate).toLocaleString("fr-CA").slice(0,10),
                  body: description,
                  is_completed:isComplete
              }
          )
          const response = await client.get('api/getTasks')
          setTaskData(response.data)
          setTitle('')
          setDueDate('')
          setDescription("")
          setIsComplete(false)
          
      }catch (error){
          console.log(error)
      }
    } 

    //grab the data initally
    useEffect(()=>{
      grabData()
    },[])

    const grabData = async() => {
      try{
        const response = await client.get('api/getTasks')
        setTaskData(response.data)
      }catch(error){
        console.log(error)
      }
    }

    const deleteTask = async(taskId) => {
      try{
        const response = await client.post(
          'api/deleteTask',{
            id:taskId
          }
        )
        const getDataResponse = await client.get('api/getTasks')
        setTaskData(getDataResponse.data)
        console.log(response.data)
      }catch (error) {
        console.log(error)
      }
    }

    const completeTask = async(taskId) => {
      try{
        await client.post(
          'api/completeTask',{
            id:taskId
          }
        )
        const getDataResponse = await client.get('api/getTasks')
        setTaskData(getDataResponse.data)
      }catch(error){
        console.log(error)
      }
    }

    const sendEditData = async(e) => {
      e.preventDefault()
      try{
        await client.post(
          'api/editTask',
          {
            id:editId,
            title:editTitle,
            completed_by: new Date(editDueDate).toLocaleString("fr-CA").slice(0,10),
            body: editDescription,
            is_completed:editIsComplete
          }
        )
        const response = await client.get('api/getTasks')
        setTaskData(response.data)
        onCloseModal()
      }catch (error){
        console.log(error)
      }
    }
    



    return (
    <div className='d-flex justify-content-evenly w-100'>
        <TaskForm 
        title={title} 
        setTitle={setTitle} 
        dueDate={dueDate} 
        setDueDate={setDueDate}
        description={description}
        setDescription={setDescription}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        sendData={sendData}
         />
        <TaskList taskData={taskData} deleteTask={deleteTask} completeTask={completeTask} onOpenModal={onOpenModal}/>
        <Modal open={open} onClose={onCloseModal} center>
          <TaskForm 
          title={editTitle} 
          setTitle={setEditTitle} 
          dueDate={editDueDate} 
          setDueDate={setEditDueDate}
          description={editDescription}
          setDescription={setEditDescription}
          isComplete={editIsComplete}
          setIsComplete={setEditIsComplete}
          sendData={sendEditData}
          isEdit={isEdit}
          />
        </Modal>
    </div>
  );
}
