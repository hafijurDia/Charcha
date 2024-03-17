import './about.css'
import awardimg from '../../images/twilltape.jpg' 
const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={require('../../images/underconstruction.gif')} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title"> About Charcha</h1>
          <p className="a-subtitle"> this  is the subtitle</p>
          <p className="a-desc"> description of Charcha
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deleniti? Fugiat maxime optio, inventore hic aperiam eaque aliquam accusantium labore?
          </p>
        <div className="a-award">
         <img src={awardimg} alt="" className="a-award-img" />
         <div className="a-award-text">
          <h4 className="a-award-title"> acclaimed by xyz for zxcv</h4>
          <p className="a-award-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nemo odio neque? Eius maxime, recusandae nostrum dicta totam, deleniti nemo inventore temporibus soluta, quas possimus?
          </p>
         </div>
        </div>
        </div>


    </div>
  )
}

export default About