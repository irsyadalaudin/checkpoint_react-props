import Profile from './Profile';    // import the Profile component

const profiles = [                  // create an array of objects that store data for each profile
    {
        fullName: 'Ujang Kusuma Wijaya Sembrani',
        profession: 'CEO Kusuma Jaya Tech',
        bio: 'Ujang Kusuma Wijaya Sembrani is the CEO of Kusuma Jaya Tech Company, a tech startup that provides innovative solutions to help businesses streamline their operations. With over 10 years of experience in the tech industry, Ujang Kusuma Wijaya Sembrani has a proven track record of leading teams and delivering successful projects. He is passionate about entrepreneurship and empowering others to achieve their goals. In his free time, Ujang Kusuma Wijaya Sembrani enjoys hiking and traveling with his family. ',
        image: 'https://picsum.photos/id/1/200/300',
    },
    {
        fullName: 'Asep Sudrajat',
        profession: 'Software Engineer',
        bio:'Asep Sudrajat is a passionate software engineer. He has a strong background in JavaScript, React, and Node.js, and is always eager to learn and apply new technologies to his work. In his free time, Asep Sudrajat enjoys playing guitar and hiking in the mountains.',
        image: 'https://picsum.photos/id/3/200/300',
    },
    {
        fullName: 'Fatimah Zahra',
        profession: 'Software Developer',
        bio: 'Fatimah Zahra is a passionate software developer. She has a strong background in web development, particularly in using the latest technologies like React and Angular to build complex and interactive user interfaces. Fatimah Zahra is always up for a challenge and enjoys working on projects that require innovative solutions.',
        image: 'https://picsum.photos/id/5/200/300',
    },
    {
        fullName: 'Muhammad Abdullah',
        profession: 'Front End Developer',
        bio: 'Muhammad Abdullah is a dedicated front end developer. He has a passion for creating clean and efficient code that meets the needs of clients and end-users. Muhammad Abdullah has worked on a variety of projects, from e-commerce websites to data-driven applications. In her free time, he enjoys hiking and exploring new places. He is always seeking opportunities to learn and grow in her career.',
        image: 'https://picsum.photos/id/7/200/300',
    },
    {
        fullName: 'Winda Viska',
        profession: 'Front End Developer',
        bio: 'Winda Viska is a front end developer who loves creating user-friendly and responsive websites. Shre have experience in HTML, CSS, JavaScript, and React, and She is always eager to learn new technologies and frameworks. She enjoy working with UI/UX designers to turn their sketches into functional and beautiful web pages. She also have strong communication and collaboration skills, and She can work well in a team or independently..',
        image: 'https://picsum.photos/id/6/200/300',
    },
    {
        fullName: 'Mahathir Huda Rashid',
        profession: 'Back End Developer',
        bio: 'Mahathir Huda Rashid is a dedicated is a dedicated back end developer, his passion for building complex systems and infrastructure fuels my work every day. With a keen eye for detail and a deep understanding of programming languages, He enjoy designing and implementing server-side applications that are robust, scalable, and efficient. ',
        image: 'https://picsum.photos/id/4/200/300',
    },
    {
        fullName: 'Rasyidi Suryana',
        profession: 'Back End Developer',
        bio: 'Rasyidi Suryana is a back end developer with over five years of experience in building scalable and secure web applications. He is proficient in Python, Django, Flask, SQL, and AWS. He has worked on projects ranging from e-commerce platforms to social media networks, delivering high-quality code and user-friendly features. He is passionate about learning new technologies and solving complex problems. ',
        image: 'https://picsum.photos/id/9/200/300',
    },
    {
        fullName: 'Siti Nurhaliza',
        profession: 'UI/UX designer',
        bio: 'is a talented UI/UX designer. She is passionate about creating stunning designs that not only look great but also function seamlessly. Siti Nurhaliza has a deep understanding of user behavior and leverages this knowledge to craft user-friendly interfaces that are easy to navigate.',
        image: 'https://picsum.photos/id/2/200/300',
    },
];

const Profiles = () => {                                                      // create a functional component called Profiles
    return (
        <div className='d-flex flex-row flex-wrap justify-content-center'>    {/* create a div element with classnames that display the profiles in a row, wrap them, and center them */}
            {profiles.map((profile) => (
                <Profile key = {profile.name} {...profile}>                   {/* render the Profile component and pass it data from the profiles array using spread operator */}
                    <img src = {profile.image} alt='gambar' />
                </Profile>
            ))}
        </div>
    )
}

export default Profiles;                                                      // This exports the Profiles component so it can be imported and used in other files