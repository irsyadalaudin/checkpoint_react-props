import './App.css';                              // This imports the CSS file for the App component.
import 'bootstrap/dist/css/bootstrap.min.css';
import Profiles from './Components/Profiles';    // This imports the Profiles component from the Profiles.js file located in the Components folder.

const App = () => {                              // This declares a new functional component called App.
	return (                                     // This is the JSX that the App component will render.              
        <>
            <Profiles />                         {/* The Profiles component that will be displayed on the page. */}
        </>
    );
};

export default App;                              // This exports the App component so it can be imported and used in other parts of the application.