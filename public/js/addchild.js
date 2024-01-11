
const saveButtonOnModal = document.getElementById('save-button');

function saveModalChild(event) {
  event.preventDefault();
  const name = document.getElementById('child-name').value;
  const age = document.getElementById('child-age').value;
  const goal = document.getElementById('child-goal').value;
  const description = document.getElementById('message-text').value;

   fetch('/api/child', {
      method: 'POST',
      body: JSON.stringify({ name, age, goal, description }),
      headers: { 'Content-Type': 'application/json' }
   }).then ((response)=> {
    if (response.ok) {
      document.location.replace('/add_child')
    }
   }).catch((err) =>{
    console.log(err)
   }
   )
}
saveButtonOnModal.addEventListener('click',saveModalChild )
