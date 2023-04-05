

function Item({src, name, verified, username}) {
    return ( 
        <div>
            <img src={src} alt={`$photo perfil ${name}`} />
            <div>
                <div>
                    <h6>{name}</h6>
                    {verified && (<div>{verified}</div>)}
                </div>
                <p>{`@${username}`}</p>
            </div>
            <button>Follow</button>
        </div>
    );
}

export default Item;