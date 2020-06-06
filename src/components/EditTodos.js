import React,{Fragment,useState} from "react"


const EditTodos = ({todo})=>{
    const [description,setDescription]= useState(todo.description);


    const updateDescription = async (e) =>{
        e.preventDefault();
        try{
           const body = {description};
           const response= await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
               method:"PUT",
               headers:{"Content-Type":"application/json"},
               body:JSON.stringify(body)
           })
           window.location="/"
        }catch(err){
        console.log(err.message)
        }
    }
    
    return <Fragment>
            <button type="button" className="btn btn-warning btn-block" data-toggle="modal" data-target={`#id${todo.todo_id}`}> 
                Edit
            </button>
            <div className="modal fade " tabIndex="-1" id={`id${todo.todo_id}`} role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document" >
                <div className="modal-content" >
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>setDescription(todo.description)}><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">Edit Todo</h4>			
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success" type="button" data-dismiss="modal" onClick={e=>updateDescription(e)}> Save changes</button>  
                        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>Close</button> 
                    </div>
                </div>    
            </div>
            </div>
          </Fragment>
}

export default EditTodos;