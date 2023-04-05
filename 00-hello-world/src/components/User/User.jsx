import { useState } from 'react';
import './User.scss';

function User({src, name, verifiedIcon, username, isFollowing, verified}) {
    const [following, setFollowing] = useState(isFollowing ? 'Following' : 'Follow')

    function handleClick() {
        if(following === 'Unfollow') {
            setFollowing('Follow');
        } else {
            setFollowing('Following');
        }
    }
    

    return ( 
        <div className='User'>
            <img
                className={verified}
                src={src}
                alt={`$photo perfil ${name}`}
            />
            <div className='User-info'>
                <div className='User-info__user'>
                    <div>
                        <h4>{name}</h4>
                        {verifiedIcon && (<div>{verifiedIcon}</div>)}
                    </div>
                    <span>{`@${username}`}</span>
                </div>
                <button
                    onMouseEnter={() => {
                        if(following === 'Following') {
                            setFollowing('Unfollow');
                        }
                    }}
                    onMouseLeave={() => {
                        if(following === 'Unfollow') {
                            setFollowing('Following')
                        }
                    }}
                    onClick={handleClick}
                    className={following}
                >
                    {following}
                </button>
            </div>
        </div>
    );
}

export default User;