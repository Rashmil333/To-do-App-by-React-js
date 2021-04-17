import React from 'react';

const Todolist= (props) =>{
	return(<li class="todoli"><button class="crossbutton" onClick={()=>{props.onSelect(props.id)}}><i class="fa fa-times"></i></button>{props.text}</li>);
}

export default Todolist;