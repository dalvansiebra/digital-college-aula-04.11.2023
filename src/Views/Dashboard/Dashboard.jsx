import "../Dashboard/Dashboard.css"
import { useEffect } from "react";

export default function Dashboard(){
    
    // const [languages, setLanguages] = useEffect([])

    // function getProgrammingLanguage(){
    //     fetch('http://localhost:3000/programming_language')
    //     .then((response) => response.json())
    //     .then((response) => {
    //     console.log(response)
    //     })
    // }

    // useEffect(() => {
    //     console.log('executado')
    // })

    return(
    <>
    <div className="dashboard">
        <form action="">
            <h1>Adicione uma Linguagem/Skill</h1>
            <label htmlFor="">Linguagem</label>
            <input type="text" />
            <label htmlFor="">Porcentagem</label>
            <input type="number" />
            <button type="submit">Enviar</button>
        </form>
    </div>
    </>
    );
}