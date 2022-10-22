import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

function Widgets() {
  return (
    <div className="widgets" >
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="جستجوی افراد و پست " type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>پست های پربازدید</h2>

        <div className="last_post">
          <div className="header">
            <div className="profile-img">
              <img src={require("../../images/v4.jpg")} alt="" />
            </div>
          

            <div className="details">
              <h4>sdfsdfsdfsdfsdfsdfsv df jklj j jkjk jkj j kj k jjk h jkh  kjh </h4>

              <div className="username">
                <p>@username</p>
              </div>
            </div>
          </div>

          <div className="text">
            <p>sdfsdfsddfgd g d  dfg gd   gdf gdf g d df d fgd df fsdfsdfsdfsv df jklj j jkjk jkj j kj k jjk h jkh  kjh</p>
          </div>


          <div className="img">
            <img src={require("../../images/v4.jpg")} alt="" />
          </div>

          <div className="date">
            <p>9:58 AM</p>
            <p> 26/26/1400</p>
          </div>

          <hr />

          <div className="like-reply-share">
            <div className="like">
              <FavoriteIcon className="like-icon" />
              <h4>277 </h4>
            </div>
            <div className="reply">
              <ChatBubbleRoundedIcon className="reply-icon" />
              <h4>نظر </h4>
            </div>
            <div className="share">
              <ShareRoundedIcon className="share-icon" />
              <h4>اشتراک </h4>
            </div>

            
          </div>
          <div className="reply-btn">
            <button>دیدن 230 نظر</button>
          </div>
          
          
        </div>


        <div className="last_post">
          <div className="header">
            <div className="profile-img">
              <img src={require("../../images/v4.jpg")} alt="" />
            </div>
          

            <div className="details">
              <h4>sdfsdfsdfsdfsdfsdfsv df jklj j jkjk jkj j kj k jjk h jkh  kjh </h4>

              <div className="username">
                <p>@username</p>
              </div>
            </div>
          </div>

          <div className="text">
            <p>sdfsdfsddfgd g d  dfg gd   gdf gdf g d df d fgd df fsdfsdfsdfsv df jklj j jkjk jkj j kj k jjk h jkh  kjh</p>
          </div>


          <div className="img">
            <img src={require("../../images/v4.jpg")} alt="" />
          </div>

          <div className="date">
            <p>9:58 AM</p>
            <p> 26/26/1400</p>
          </div>

          <hr />

          <div className="like-reply-share">
            <div className="like">
              <FavoriteIcon className="like-icon" />
              <h4>277 </h4>
            </div>
            <div className="reply">
              <ChatBubbleRoundedIcon className="reply-icon" />
              <h4>نظر </h4>
            </div>
            <div className="share">
              <ShareRoundedIcon className="share-icon" />
              <h4>اشتراک </h4>
            </div>

            
          </div>
          <div className="reply-btn">
            <button>دیدن 230 نظر</button>
          </div>
          
          
        </div>



        <div className="last_post">
          <div className="header">
            <div className="profile-img">
              <img src={require("../../images/v4.jpg")} alt="" />
            </div>
          

            <div className="details">
              <h4>sdfsdfsdfsdfsdfsdfsv df jklj j jkjk jkj j kj k jjk h jkh  kjh </h4>

              <div className="username">
                <p>@username</p>
              </div>
            </div>
          </div>

          <div className="text">
            <p>sdfsdfsddfgd g d  dfg gd   gdf gdf g d df d fgd df fsdfsdfsdfsv df jklj j jkjk jkj j kj k jjk h jkh  kjh</p>
          </div>


          <div className="img">
            <img src={require("../../images/v4.jpg")} alt="" />
          </div>

          <div className="date">
            <p>9:58 AM</p>
            <p> 26/26/1400</p>
          </div>

          <hr />

          <div className="like-reply-share">
            <div className="like">
              <FavoriteIcon className="like-icon" />
              <h4>277 </h4>
            </div>
            <div className="reply">
              <ChatBubbleRoundedIcon className="reply-icon" />
              <h4>نظر </h4>
            </div>
            <div className="share">
              <ShareRoundedIcon className="share-icon" />
              <h4>اشتراک </h4>
            </div>

            
          </div>
          <div className="reply-btn">
            <button>دیدن 230 نظر</button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Widgets;
