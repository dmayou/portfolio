import React from 'react';
import ProjectForm from '../ProjectForm/ProjectForm';
import AdminProjectList from '../AdminProjectList/AdminProjectList';
import TagForm from '../TagForm/TagForm';

function AdminView(props) {
    return (
        <div>
            <ProjectForm />
            <AdminProjectList />
            <br/>
            <TagForm />
        </div>
    );
}

export default AdminView;