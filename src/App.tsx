import {useEffect, useRef, useState} from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import {Sub} from './components/types.d';
import {getAllSubs} from './services/getAllSubs'


interface AppState{
  subs: Array<Sub>
  newSubsNumber: number
  SubsNumber: number
}

function App() {
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  const [SubsNumber, setSubsNumber] = useState<AppState["SubsNumber"]>(0)

  const [subs, setSubs] = useState<AppState["subs"]>([])
  useEffect(() => {
    getAllSubs().then(allSubs =>{
      setSubs(allSubs);
      setSubsNumber(allSubs.length)
      
    });
  }, [])

  const handleNewSub = (newSub: Sub): void =>{
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
    setSubsNumber(n => n + 1)
  }

  const handleDeleteSub = (nick: string) => {
};

  return (
    <div className="App" ref={divRef}>
      <h1>midu subs</h1>
      <List subs={subs} setSubs={setSubs} onDeleteSub={handleDeleteSub} updateSubsNumber={setSubsNumber}/>
      Total subs: {SubsNumber} <br/>
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} privacyPolicy={false}/>
    </div>
  );
}

export default App;
