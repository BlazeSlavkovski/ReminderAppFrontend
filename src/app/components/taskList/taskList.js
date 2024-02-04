import TaskComponent from '../TaskComponent/TaskComponent';

export default function TaskList({taskData,deleteTask,completeTask,onOpenModal}) {

    const today = new Date().getTime();
    const upcomingDeadline = 302400000
    //console.log(today)
    const completedTasks = taskData?.data.filter(task => task.isCompleted === true )


    const upcomingTasks = taskData?.data.filter(task => {
       return ((new Date(task.completedBy).getTime() - today <= upcomingDeadline) &&  task.isCompleted != true)
    })


    const regularTasks = taskData?.data.filter(task => {
      return ((new Date(task.completedBy).getTime() - today > upcomingDeadline) &&  task.isCompleted != true )
   })
    return (
    <div>
        <h3 className="mb-3">Upcoming Tasks</h3>
        {upcomingTasks?.map((task) => {
          
          return(
            <TaskComponent data={task} key={task.id} deleteTask={deleteTask}  completeTask={completeTask} onOpenModal={onOpenModal}/>
          )
        })}

        <h3 className="mb-3">Tasks</h3>
        {regularTasks?.map((task) => {
          
          return(
            <TaskComponent data={task} key={task.id} deleteTask={deleteTask}  completeTask={completeTask} onOpenModal={onOpenModal}/>
          )
        })}
        <h3 className="mb-3">Completed Tasks</h3>
        {completedTasks?.map((task) => {
          
          return(
            <TaskComponent data={task} key={task.id} deleteTask={deleteTask} />
          )
        })}
        
    </div>
  );
}
