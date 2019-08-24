import React from 'react'

class Quotes extends React.Component {
	render() {
		return(
		<div className="centered">
         <div id="quote-box">
           <blockquote className="blockquote text-right">
             <i className="fas fa-quote-right"></i><p className="mb-0" id="text">{this.props.quote}</p>
             <footer className="blockquote-footer"><cite title="Source Title" id="author">{this.props.author}</cite></footer>
           </blockquote>
           <div className="buttons">
             <a className="btn btn-info" href="https://twitter.com/intent/tweet" id="tweet-quote" title="Tweet this quote!" target="_blank">
               <i className="fa fa-twitter"></i>
             </a>
             <a className="btn btn-info" href="https://www.tumblr.com/tagged/create-posts" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
               <i className="fa fa-tumblr"></i>
             </a>
             <button 
               type="button" 
               className="btn btn-info" 
               id="new-quote"
               onClick={this.props.fetchData}>New quote</button>
           </div>
         </div> 
       </div>
			)
	}
}
 
export default Quotes