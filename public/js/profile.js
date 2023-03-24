const newFormHandler = async (event) => {
    event.preventDefault();
  
    const recipeName = document.querySelector('#recipe-name').value.trim();
    const have_Ing = document.querySelector('#have-ingredients').value.trim();
    const donthave_Ing = document.querySelector('#dont-have-ingredietns').value.trim();
    const description = document.querySelector('#recipe-desc').value.trim();
  
    if (name && needed_funding && description) { //If there are ingredients that were searched 
      //format ingredients commas no spaces string
      const response = await fetch(`/api/projects`, { 
        method: 'POST',
        body: JSON.stringify({ recipeName, have_Ing, donthave_Ing, description }), 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  