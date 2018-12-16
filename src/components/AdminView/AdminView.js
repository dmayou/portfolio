import React from 'react';
import ProjectForm from '../ProjectForm/ProjectForm';
import AdminProjectList from '../AdminProjectList/AdminProjectList';

function AdminView(props) {
    return (
        <div>
            <ProjectForm />
            <AdminProjectList />
        </div>
    );
}

export default AdminView;