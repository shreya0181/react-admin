import React from 'react';
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin';
const PostEdit =(props)=>{
     return (<Edit title= "Edit a post" {...props}>
    <SimpleForm>
        
        <TextInput disabled source='id' />
        <TextInput muultiline source='body' />
        <DateInput label ='Published' source="publishedAt"></DateInput>

    </SimpleForm>
</Edit>);
}

export default PostEdit;