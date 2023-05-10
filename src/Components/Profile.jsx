// This is a functional component named Profile that takes in destructured props (fullName, bio, profession, children)
const Profile = ( {fullName, bio, profession, children} ) => {
    return (

        // This is the JSX that will be rendered when the component is called
            <div className='d-flex justify-content-center text-center bg-success-subtle rounded my-3 mx-3' style={{width: '45%'}}>    {/* This div uses bootstrap classes to center the content horizontally and vertically, set the background color, and round the corners, and set the style width 45% */}
                <div className='p-3'>        {/* This div uses bootstrap classes to set the padding-3 */}
                    {children}               {/* This is where any child components will be rendered, if any are passed down */}
                    <h1>{fullName}</h1>      {/* This will render the full name of the profile */}
                    <h4>{profession}</h4>    {/* This will render the profession of the profile */}
                    <p>{bio}</p>             {/* This will render the bio of the profile */}
                    <button>call</button>    {/* This is a button that could be used to call the profile */}
                </div>
            </div>
    );
};

export default Profile;                      // This exports the Profile component so it can be imported and used in other files