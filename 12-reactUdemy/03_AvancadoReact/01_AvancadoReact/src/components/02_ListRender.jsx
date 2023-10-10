import React, {useState} from 'react';

const ListRender = () => {
  
    const [list] = useState(["Elbert", "Jean", "Santos"]);
  
    const [users] = useState ([
        {id: 1, name:'Everton', idade:29},
        {id: 2, name:'Douglas', idade:30},
        {id: 3, name:'Beirinha', idade:58},
    ])

    return (
    <div>
        <ul>
            {list.map((item,i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
      <ul>
        {users.map((users) => (
            <li key={users.id}>Meu nome é {users.name} e tenho {users.idade} anos</li>
        ))}
      </ul>

    </div>
  )
}

export default ListRender;
