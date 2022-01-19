import { useParams } from 'react-router-dom';

const Str = (props) => {
    const { string } = useParams();
    console.log(string);
    return isNaN(string) ? <h2>The word is {string}</h2> : <h2>The number is {string}</h2>
};

export default Str;