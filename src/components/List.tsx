import { IMGHombre, IMGMujer, Sub } from "./types.d";


interface Props{
    subs: Array<Sub> 
}

const List = ({subs}: Props) => {
    const renderList = (): JSX.Element[] => { 
        const renderAvatar = (sub: Sub): string => {
          if (sub.sexo === "Hombre") {
              const randomIndex = Math.floor(Math.random() * Object.keys(IMGHombre).length) + 1;
              return (IMGHombre[randomIndex] as string); // Cast necesario porque TypeScript no sabe que es una URL
          } else {
              const randomIndex = Math.floor(Math.random() * Object.keys(IMGMujer).length) + 1;
              return (IMGMujer[randomIndex] as string); // Cast necesario porque TypeScript no sabe que es una URL
          }
        };
        return subs.map (sub => {
          return (
            <li key={sub.nick}>
              <img src={typeof sub.avatar === "number" ? renderAvatar(sub) : sub.avatar as string} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
              <p>{sub.sexo}</p>
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