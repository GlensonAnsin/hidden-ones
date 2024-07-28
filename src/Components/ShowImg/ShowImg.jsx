import './ShowImg.css'
import xBtn from '../../assets/x-button.png'

const ShowImg = ({imgLink, display, setDisplay}) => {
    return (
        <div className={!display ? "view-image none" : "view-image"}>
            <div className="x-show-container">
                <div className="x-button-container">
                    <img onClick={() => setDisplay(!display)} src={xBtn} alt="icon" />
                </div>
                <div className="show-image-container">
                    <img src={imgLink} alt="picture" />
                </div>
            </div>
        </div>
    )
}

export default ShowImg
