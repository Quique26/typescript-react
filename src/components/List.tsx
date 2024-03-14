import { Sub } from "./types.d";


interface Props{
    subs: Array<Sub>;
    setSubs: React.Dispatch<React.SetStateAction<Sub[]>>
    onDeleteSub: (nick: string) => void
    updateSubsNumber: React.Dispatch<React.SetStateAction<number>>; // Agrega la función de actualización de SubsNumber

}

const List = ({subs, setSubs, onDeleteSub, updateSubsNumber }: Props) => {
  const handleDeleteSub = (nick: string) => {
    setSubs(subs => subs.filter(sub => sub.nick !== nick));
    updateSubsNumber(SubsNumber => SubsNumber - 1); // Llama a la función de actualización de SubsNumber
  };
  
    const renderList = (): JSX.Element[] => { 
        return subs.map (sub => {
          return (
            <li key={sub.nick}>
              <h3 onClick={() => handleDeleteSub(sub.nick)}>X</h3>
              <img src= {sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
              <p>{sub.sex}</p>
            </li>
          );
        });
    };

    return (
        <ul>
          {renderList()}
        </ul>
    )
}

export default List