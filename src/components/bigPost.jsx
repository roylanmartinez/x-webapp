import React, { Component, useState } from 'react';
import datos_test from "./datos";

class BigPost extends Component {
    state = { 
        //  full data of the object passed through the id
        dato: datos_test.filter(
            item => item.id === parseInt(window.location.href.split('/')[window.location.href.split('/').length-1])
            )[0],
        text: `As a resource devoted to the principldfg dfge that every patriot has a God-given right to defend country, family and oneself with firearms, we also believe that without access to ammunition, there would be no reason to own guns, thus our mission, selling high-quality ammunition at affordable prices, is our priority.`,
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
                    className="editProfileHeaderImage ml-2 mt-2"
                    src={require("../assets/images/profileImage.jpeg").default}
                    alt="Avatar"
                    ></img>
                    <div className="rightBigPost0Tittle">
                        <h5 className="rightBigPost0TittleGiant">Roylan Martinez</h5>
                        <small className="rightBigPost0TittleSmall">3h • <i className="fas fa-globe-americas"></i> </small>
                    </div>
                    
                </div>

                
                
                <p className="rightBigPost1">
                    {
                        (this.state.text.length >= 400 && this.state.readMore === false) ? 
                        (this.state.text.slice(400, 10)) : this.state.text
                    }
                    
                    <span
                    onClick={()=> this.setState({readMore: true})} 
                    // style={{display: (this.state.readMore) ? "block" : "none"}}
                    className={"rightBigPost_comment_readMore" + (this.state.readMore ? "_true" : "_false")}>
                    ...read more
                    </span>
                    
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
                <Comment></Comment>
                
            </div>
                
            <i
        
        onClick={this.props.onClose}
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

  const Comment = () => {
    const [readMore, setReadMore] = useState(false);
    const [text, setText] = useState("In today’s divisive political climate, few issues are as contentious as those relating to Second Amendment rights. Convoluted legislation and state-specific legal differences make the topic of gun possession a hot button for folks on both ends of the barrel.");
    // const [text, setText] = useState("ssjf");

    return (
        <React.Fragment>
            <div className="rightBigPost_comment">
            <img
            className="editProfileHeaderImage_small ml-2 mr-1 mt-2"
            src={require("../assets/images/profileImage2.jpeg").default}
            alt="Avatar"
            ></img>
            <div className="rightBigPost_comment_right">
                <b className="rightBigPost_comment_title">Queralt Vargas</b>
                <small> @roylanmartinez12</small>
                <p className="rightBigPost_comment_text">
                    {(text.length >= 200 && readMore === false) ? text.slice(0, 200) : text}
                <span
                onClick={()=> setReadMore(true)} 
                // style={{display: (readMore === false) ? "block" : "none"}}
                className={"rightBigPost_comment_readMore" + (readMore ? "_true" : "_false")}>
                ...read more
                </span>
                </p>
            </div>
            
        </div>
        <div className="rightBigPost_comment_bottom">
            <small>
                <span className="rightBigPost_comment_bottom_text">Like</span> 
                <span> • </span> 
                <span className="rightBigPost_comment_bottom_text">123 likes</span>
            </small>
            <small>
                <span className="rightBigPost_comment_bottom_text">Reply</span> 
                <span>  • </span> 
                <span className="rightBigPost_comment_bottom_text">2 replies</span>
            </small>
            <small className="rightBigPost_comment_bottom_text_report">
                •••
            </small>
            {/* <div></div> */}
        </div>
        </React.Fragment>
        

    );
};

const ReplyComment = () => {
    const [readMore, setReadMore] = useState(false);
    const [text, setText] = useState("adf asdfasdfbasdjf bhasdjf haskdjfhasjkldfhasjkd hksjdhf kasjdhfjkashd fkjasdhfkajsdhf A asdFa sdfasdf asdfa sdfasd fasdas dfasd fasdfsasdf asdf asdfas dfasdasdf asdf asdf asdf asdf sadfasdf asdf asdfasdfbasdjf bhasdjf haskdjfhasjkldfhasjkd hksjdhf kasjdhfjkashd fkjasdhfkajsdhf sdFa sdfasdf asdfa sdfasd fasdas dfasd fasdfsasdf asdf asdfas dfasdasdf asdf asdf asdf asdf sadfasdf asdf asdfasdfbasdjf bhasdjf haskdjfhasjkldfhasjkd hksjdhf kasjdhfjkashd fkjasdhfkajsdhf  fasd fasdf asdfas dff");
    // const [text, setText] = useState("ssjf");

    return (
        <React.Fragment>
            <div className="rightBigPost_comment">
            <img
            className="editProfileHeaderImage_small ml-2 mr-1 mt-2"
            src={require("../assets/images/profileImage2.jpeg").default}
            alt="Avatar"
            ></img>
            <div className="rightBigPost_comment_right">
                <b className="rightBigPost_comment_title">Queralt Vargas</b>
                <p className="rightBigPost_comment_text">
                    {(text.length >= 200 && readMore === false) ? text.slice(0, 200) : text}
                <span
                onClick={()=> setReadMore(true)} 
                // style={{display: (readMore === false) ? "block" : "none"}}
                className={"rightBigPost_comment_readMore" + (readMore ? "_true" : "_false")}>
                ...read more
                </span>
                </p>
            </div>
            
        </div>
        <div className="rightBigPost_comment_bottom">
            <small>
                <span className="rightBigPost_comment_bottom_text">Like</span> 
                <span> • </span> 
                <span className="rightBigPost_comment_bottom_text">123 likes</span>
            </small>
            <small>
                <span className="rightBigPost_comment_bottom_text">Reply</span> 
                <span>  • </span> 
                <span className="rightBigPost_comment_bottom_text">2 replies</span>
            </small>
            <small className="rightBigPost_comment_bottom_text_report">
                •••
            </small>
            {/* <div></div> */}
        </div>
        </React.Fragment>
        

    );
};

      

    
 
export default BigPost;