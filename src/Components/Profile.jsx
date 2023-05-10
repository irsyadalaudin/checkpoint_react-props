const Profile = ( {fullName, bio, profession, children} ) => {
    return (
            <div className='d-flex justify-content-center text-center bg-success-subtle rounded my-3 mx-3' style={{width: '45%'}}>
                <div className='p-3'>
                    {children}
                    <h1>{fullName}</h1>
                    <h4>{profession}</h4>
                    <p>{bio}</p>
                    <button>call</button>
                </div>
            </div>
    );
};

export default Profile;