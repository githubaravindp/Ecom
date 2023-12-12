import './about.css'
import CardContext from '../../context/cardContext'


const About=()=>{
    return <div className="about">
        <h1>This is About</h1>
        
        <CardContext.provider>
            <card heading="heading"/>
        </CardContext.provider>
    </div>
}