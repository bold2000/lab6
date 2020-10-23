function mendchilgee() 
{
    return <h1>hello ,world</h1>;
}
function Mendchilgee123(props){ console.log(props)
    return (
        <div>
        <h1>{ props.ner }</h1>
        <p>{props.nas}</p>
        <p>{props.surchbgaeseh ? "unen" : "cholo awsan"}</p>
        <p>{props.dunguud[0] }</p>
        <p>{props.dunguud[1] }</p>
        <p>{props.dunguud[2] }</p>

        {props.dunguud.map(
            (el, index ) =>
            <p key={index}>{el}</p>
        )
        }   
        <p>{props.myObj.mergejil}</p>
        <p>{props.myObj.index}</p>
        </div>   
    );  
}
ReactDOM.render(
    <Mendchilgee123 ner={"hello dorj"}
    nas={20}
    surchbgaeseh={true}
    dunguud={[80,"dalan es", true]}
    myObj={{mergejil: 'sw', index:'DS2015'}} />,
    document.getElementById('root')
);