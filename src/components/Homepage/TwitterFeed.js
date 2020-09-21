import React, { useEffect } from "react";
import "./Homepage.scss";
import Fade from "react-reveal/Fade";

const styles = `
<style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Slab:wght@100;400;700&display=swap');

    .timeline-Header {
        display: none;
    }

    span {
        font-family: 'Roboto Slab', sans-serif !important;
    }

    .timeline-Tweet-text {
        font-size: 16px !important;
        line-height: 21px !important;
        font-weight: 400 !important;
        margin-top: 10px;
    }

    .timeline-Tweet {
        max-width: 350px;
        width: 350px;
        border: 1px solid #EDEDED;
        margin-right: 30px;
        border-radius: 5px;
    }

    .timeline-TweetList {
        display: flex;
        justify-content: space-between;
        overflow-x: scroll;
    }

    .timeline-Body {
        border: none !important;
    }

    .timeline-Footer {
        display: none;
    }

    .timeline-Tweet-media {
        display: none;
    }

    .customisable-border {
        border: none !important;
    }
</style>`;

const injectCss = () => {
    let timelineFrame = document.getElementById("twitter-widget-0");

    if (timelineFrame) {
        let doc = timelineFrame.contentDocument;
        // first, generate our <link> element
        // let link = doc.createElement("link");
        // link.href = "/TwitterFeed.css";
        // link.rel = "stylesheet";
        // link.type = "text/css";
        
        // // now, we insert the new <link> element into the iframe
        // let head = doc.getElementsByTagName("head")[0];
        // head.appendChild(link);
         doc.head.innerHTML += styles;
    } else {
        requestAnimationFrame(injectCss);
    }
};

function TwitterFeed() {

    // we inject css into the twitter iframe once it loads
    useEffect( () => {
        requestAnimationFrame(injectCss);
    }, []);

    return (
      <div className="twitter-feed">
        <Fade bottom>
          <h3 className="section-title">Latest Tweets</h3>
        </Fade>
        <div className="feed-wrapper">
            <Fade bottom>
                <a className="twitter-timeline" href="https://twitter.com/texasHACS?ref_src=twsrc%5Etfw">Tweets by texasHACS</a> 
                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
            </Fade>
        </div>
      </div>
    );
}

export default TwitterFeed;