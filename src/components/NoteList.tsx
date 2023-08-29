import * as React from 'react';
import {Note} from '../models/node.model'
import Notes from './Notes'
interface INotesListProps {
    notes:Note[],
    setNotes:React.Dispatch<React.SetStateAction<[Note]>>
    
}

const NoteList: React.FC<INotesListProps> = ({notes}) => {
    const handleDelete=(id:string)=>{
        console.log("The note to be deleted",id)
    }
    const renderNotes=()=>{
        return notes.map(note=>(
         <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        ))
    }
  return <>
  <h2 className='mt-3'>Notes</h2>
  <div>{ renderNotes() }</div></>
};

export default NoteList;
