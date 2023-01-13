import {Link, useParams} from "react-router-dom";

function Single(){
    const {name} = useParams();

    const profiles = [
        {name: "Ronaldinho",img: "https://futhead.cursecdn.com/static/img/21/players/icon-stories/246472.png", rating: 3},
        {name: "Zidane",img: "https://futhead.cursecdn.com/static/img/22/players/248450.png", rating: 3},
        {name: "Henry",img: "https://cdn.futbin.com/content/fifa22/img/players/p246489.png", rating: 1},
        {name: "Bergkamp",img: "https://eaassets-a.akamaihd.net/fifa/u/f/fm20/prod/s/static/players/players_20/p4000_PRIME.png?v=848rffjv3we", rating: 2},
        {name: "Muller",img: "https://eaassets-a.akamaihd.net/fifa/u/f/fm22/prod/s/static/players/players_23/p267897_BASEPLUS.png?v=848rffjv3we", rating: 1 },
        {name: "Pele",img: "https://futhead.cursecdn.com/static/img/21/players/icon-stories/246525.png", rating: 4},
    ]
    console.log(name)

    const itemIndex = profiles.findIndex((item)=>item.name === name);
    console.log(itemIndex)
    
    const pinnedItem = profiles[3];

    let result;
    if (itemIndex==-1){
        result = (
            <> 
                {profiles.map((item)=>
                
                    <Link to={"/single/" + item.name}>{item.name}</Link>
                )}
                <h1>Not Found</h1>
            </>
        )
    }
    else{
        result = (
            <div>
                <Link to="/single/Ronaldinho">Ronaldinho</Link>
                <h1>{profiles[itemIndex].name}</h1>
                <img src={profiles[itemIndex].img} />
                <h3>{profiles[itemIndex].rating}</h3>    
            </div>
        )
    }

    return(
        result
    )
}

export default Single;