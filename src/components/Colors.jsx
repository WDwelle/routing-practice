import { useParams } from 'react-router-dom';

const Colors = (props) => {
    const { string } = useParams();
    const { color1 } = useParams();
    const { color2 } = useParams();
    console.log(string);
    return (
        isNaN(string) ? 
        <h2 style={{color : color1, backgroundColor : color2}}>The word is {string}</h2> : 
        <h2 style={{color : color1, backgroundColor : color2}}>The number is {string}</h2>
    )};

export default Colors;