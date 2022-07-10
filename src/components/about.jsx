import {useState} from 'react'

const About = ()=> {
    let [visible, setVisible] = useState(false)

    const changeVisibility = () => {
        setVisible(!visible);
        
        // if(visible){
        //     setVisible(false);

        // } else {
        //     setVisible(true);
        // }

    } 

    return (
        <div> 
            <h1>About me</h1>
            <h3>Ardany Mora</h3>

            
           { visible ? <h4>southpawprescision@gmail.com</h4> : 'Click to show email'}
            <button onClick={changeVisibility}>Show Email</button>

            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
        
    )
}

export default About;