// const saveButtonChoreModal = document.getElementById('child-modal-id');
// console.log()
function saveModalChore (event){
  event.preventDefault();
  const name = document.getElementById('chore-description').value;
  const rate = document.getElementById('pay-rate').value;
  

  //console.log('name', name, 'rate', rate)
   fetch('/api/chore', {
      method: 'POST',
      body: JSON.stringify({ name, rate }),
      headers: { 'Content-Type': 'application/json' }
   }).then ((response)=> { 
     console.log("Reality Check No. 3")
    if (response.ok) {
      document.location.replace('/add_child')
    }
   }).catch((err) =>{
    console.log(err)
    // console.log(response)
   }
   )
}
// saveButtonChoreModal.addEventListener('click', function (){
//     console.log("hello ")
// } )

document.body.addEventListener('click', saveModalChore)