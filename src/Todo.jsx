import React,{useState} from 'react';
import Todolist from './Todolist'

const Todo=()=>{

	const [inputlist,setinputlist]=useState();
	const [items,setitems]=useState([]);
	const itemchange=(event)=>{
		setinputlist(event.target.value);

	}

	const displayitem=()=>{
		setitems((olditem)=>{
			return[...olditem,inputlist];
		});
		setinputlist("");

	}
	const deleteitem=(id)=>{
		console.log('delted');
		setitems((olditem)=>{
			return olditem.filter((arrelem,index)=>{
				return index!==id;
			})
		})
	}

	return(<>
		<div class="todobackground">
		  <div class="todomaindiv">
		  <br/>
		     <h1 class="todoheading">TODO</h1>
		   
		     <input type="text" placeholder="task" class="todoinput" onChange={itemchange} value={inputlist}/>
		     <button class="todoaddbutton" onClick={displayitem}>+</button>

		     <ol class="todool">
		     {items.map((data,index)=>{
		     	return(<Todolist 
		     		text={data}
		     		key={index}
		     		id={index}
		     		onSelect={deleteitem}/>);
		     })}

		     </ol>
		  </div>
		  
		</div>



		</>);

}

export default Todo;