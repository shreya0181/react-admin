import React from 'react';
import {List, Datagrid, TextField,  EditButton,DeleteButton, EmailField} from "react-admin";
const UserList =(props)=>{
    return (<List {...props}>
 
 <Datagrid>
     <TextField source='id' />
     <TextField source='name' />
     <EmailField source='email' />

  
     <EditButton basePath="/users"></EditButton>
    <DeleteButton  basePath="/users"></DeleteButton>
 </Datagrid>
    </List>)
}

export default UserList;