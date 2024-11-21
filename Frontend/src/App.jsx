import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import './styles/styles.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects on mount
    const fetchProjects = async () => {
      const token = localStorage.getItem('token');
    console.log('Token before API call:', token);  // Log the token to verify it exists
    
      try {
        const { data } = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects', error);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <AddProjectForm onAddProject={handleAddProject} />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProjectList projects={projects} />
        )}
      </div>
    </div>
  );
}

export default App;
