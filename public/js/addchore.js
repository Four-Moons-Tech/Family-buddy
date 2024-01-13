// const saveButtonChoreModal = document.getElementById('child-modal-id');
// console.log(saveButtonChoreModal)
// console.log()

function handleModal(btn) {
  // look for <form> inside of button's grandparent
  const form = btn.parentElement.parentElement.querySelector(':scope form')
  saveModalChore(
    form.name.value,
    form.rate.value,
    btn.dataset.childid
  )
}

function saveModalChore (name, rate, child_id){
  // event.preventDefault();
  // const name = document.getElementById('chore-description').value;
  // const rate = document.getElementById('pay-rate').value;
  

  //console.log('name', name, 'rate', rate)
   fetch('/api/chore', {
      method: 'POST',
      body: JSON.stringify({ name, rate, child_id }),
      headers: { 'Content-Type': 'application/json' }
   }).then ((response)=> { 
     console.log("Reality Check No. 3")
    if (response.ok) {
      document.location.replace('/add_child')
    }
   }).catch((err) =>{
    console.log(err)
   }
   )
}
// Commended out for future development
// function updateChore(input, choreId) {
//   const status = input.checked ? true : false
//   const child_id = input.dataset.childid
//   fetch(`/api/chore/${choreId}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({status, child_id})
//   })
//   .then((response)=>{
//     if (response.ok) {
//       document.location.replace('/add_child')
//     }
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }