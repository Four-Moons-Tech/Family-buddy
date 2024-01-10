const saveButtonChoreModal = document.getElementsByClassName('child-modal');

function saveModalChore(event) {
  event.preventDefault();
  const name = document.getElementById('chore-description').value;
  const rate = document.getElementById('pay-rate').value;
  

   fetch('/api/chore', {
      method: 'POST',
      body: JSON.stringify({ name, rate }),
      headers: { 'Content-Type': 'application/json' }
   }).then ((response)=> {
    if (response.ok) {
      document.location.reload('/add_child')
    }
   }).catch((err) =>{
    console.log(err)
   }
   )
}
saveButtonChoreModal.addEventListener('click',saveModalChore )