const Note= ({note, deleteNote})=>{
  const priorityColor = {
    "High":"red",
    "Medium": "orange",
    "Low": "green"
  }
  return(
    <div style= {{
      borderLeftColor: priorityColor[note.priority]}}
      className="p-4 bg-white rounded-lg shadown-md border-l-4"
    >
      <h3 className='text-lg font-bold'>{note.title}</h3>
      <p className='text-sm text-gray-600'>
        <strong>Category:</strong> {note.category}
      </p>
      <p className='text-sm text-gray-600'>
        <strong>Priority:</strong> {note.priority}
      </p>
      <p className='mt-2'>
        {note.description}
      </p>
      
      <button onClick={()=>deleteNote(note.id)} className='mt-3 text-red-500 cursor-pointer transition hover:text-red-700'>🗑Delete 
      </button>
    </div>
  )};

export default Note;
