import React, { Component } from 'react';
import datos_test from "./datos";

class BigPost extends Component {
    state = { 
        //  full data of the object passed through the id
        dato: datos_test.filter(
            item => item.id === parseInt(window.location.href.split('/')[window.location.href.split('/').length-1])
            )[0],
        text: `Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit
                    . Phasellus imperdiet, null
                    a et dictum interdum, nisi 
                    lorem egestas vitae scel
                    erisque enim ligula venenatis dolor. 
                    Maecenas nisl est, ultrices nec congue 
                    eget, auctor vitae massa. Fusce luctus v
                    estibulum augue ut aliquet. Nunc sagitti
                    s dictum nisi, sed ullamcorper ipsum dig
                    nissim ac. In at libero sed nunc venenat
                    is imperdiet sed ornare turpis. Donec vi
                    tae dui eget tellus gravida venenatis. 
                    Integer fringilla congue eros non fermen
                    tum. Sed dapibus pulvinar nibh tempor por
                    ta.`,
        readMore: false,
        }
    
    handleRight = () => {
        let currentUrl = window.location.href.split('/');
        if (parseInt(currentUrl[currentUrl.length-1]) === datos_test.length){
            
            // currentUrl[currentUrl.length-1] = 1;
            this.props.thisPropsHistory.push(1);
            // console.log(currentUrl.join("/"));
        }
        else {
            // currentUrl[currentUrl.length-1] = parseInt(currentUrl[currentUrl.length-1]) + 1;
            this.props.thisPropsHistoryPush("/profile/usertest/bigpost/2");
            // console.log(currentUrl.slice(3).join("/"));
        }
        
    } 
    
    render() {   
        return ( 
            
        <div onClick={this.props.onClickBackground} className="BigPostBackground">
            
            <div className="leftBigPost"> 
                <div className="photoBigPost">
                    <img
                        className="photoBigPostBlur"
                        
                        src={require(`../assets/images/test${this.state.dato.image}.jpg`).default}
                        alt={"test1.jpg"}
                    ></img>
                    
                    <img 
                        className="photoBigPost"
                        src={require(`../assets/images/test${this.state.dato.image}.jpg`).default}
                        alt={"test1.jpg"}
                    ></img>
                    <div className="photoBigPostInfo">
                        <div className="photoBigPostInfo-ArrowLeft">
                            <i className="fas fa-chevron-left fa-chevron-leftBigPost"></i>
                        </div>
                        <div onClick={this.handleRight} className="photoBigPostInfo-ArrowRight">
                            <i className="fas fa-chevron-right fa-chevron-rightBigPost"></i>
                        </div>

                        <div className="photoBigPostInfoBottom"></div>
                    </div>
                </div>
            </div>
            <div className="rightBigPost"> 
                <div className="rightBigPost0"> 
                    <img
                    onClick={this.props.onBlur}
                    className="editProfileHeaderImage ml-2 mt-2"
                    src={require("../assets/images/profileImage.jpeg").default}
                    alt="Avatar"
                    ></img>
                    <div className="rightBigPost0Tittle">
                        <h5 className="rightBigPost0TittleGiant">Roylan Martinez</h5>
                        <small className="rightBigPost0TittleSmall">3h • <i className="fas fa-globe-americas"></i> </small>
                    </div>
                    
                </div>
                <p className="rightBigPost1">{(this.state.text.length >= 50 && this.state.readMore === false) ? 
                    <p>{this.state.text.slice(0, 400)}
                    <b onClick={()=> this.setState({readMore: true})} className="rightBigPost1_readmore">...read more</b>
                    </p>   
                : 
                    this.state.text}
                </p>
                <div className="rightBigPost2">
                     <div className="rightBigPost2_pointHolder">
                         {punctuation2(2.5, 'photoRP3Info_points_')}
                        <h6 className="rightBigPost2_numberLikes">
                            23 likes
                        </h6>
                     </div>
                     
                     <h6 className="rightBigPost2_numberComments">
                         2 comments
                     </h6>
                    
                    
                </div>
                <div className="rightBigPost3">
                    <h6 className="rightBigPost3_buttons">Like</h6>
                    <h6 className="rightBigPost3_buttons">Comment</h6>
                    <h6 className="rightBigPost3_buttons">Favorite</h6>
                </div>
                
            </div>
                
            <i
          onClick={this.props.onBlur}
          className="fas fa-times closeLayerEditProfile"
        ></i>
        </div> );
        
    }
}


const punctuation2 = (number, custom_classname = 'photoRP3Info_points_') => {
    // let classname = 'photoRP3Info_points_';
    // This function returns an array with false, true and null given a punctuation
    // example 2.2 = [true, true, false, false, false]
    const round_punctuation = () => {
        // is the number decimal?
        if (String(number).includes('.')) {

            const decimal = String(number).split("."); 

            if (2 < String(decimal[1] * 10)[0]  && String(decimal[1] * 10)[0] < 8) {
                return Number(`${decimal[0]}.5`)
            }
            else {
                // Round number to nearest integer
                return Math.round(number)
            }
        }
        else {
            return number
        }

    }

    const cleaned_number = round_punctuation(number);
    let p = ['False', 'False', 'False', 'False', 'False'];
    // console.log(cleaned_number)

    if (String(cleaned_number).includes('.') === false) {
        // if number is an integer
        for (let i = 0; i< cleaned_number; i++){
            p[i] = 'True'
        }
    }
    else {
        // if number has a half point
        const arrayed_number = String(cleaned_number).split('.');
        for (let i = 0; i< arrayed_number[0]; i++){
            p[i] = 'True'
        }
        p[Number(arrayed_number[0])] = 'Null';
    }

    return (
        <React.Fragment>
            <div className={custom_classname + p[0]}/>
            <div className={custom_classname + p[1]}/>
            <div className={custom_classname + p[2]}/>
            <div className={custom_classname + p[3]}/>
            <div className={custom_classname + p[4]}/>
        </React.Fragment>
    )

  }

      

    
 
export default BigPost;