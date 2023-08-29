import React,{useState} from 'react';
import {Note} from './models/node.model'
import './App.css';
import { stringify } from 'querystring';
import Header from './components/Header';
import {Container,Row,Col} from 'react-bootstrap'
import NoteList from './components/NoteList';

function App() {
 const[notes,setNotes]=useState<[Note]>([{
id:(new Date).toString(),
title:"Meetings",
text:"Schdule meeting",
color:"#dfdfdf",
date:(new Date).toString()

 }]);
  return (
    <>
    <Header/>
    <Container className='mt-5'>
      <Row>
        <Col>
        <NoteList notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
