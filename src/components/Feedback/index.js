// Write your React code here.
import {Component} from 'react'
import ReactionStyle from '../ReactionStyle/index'
import './index.css'

class Feedback extends Component {
  state = {feed: ''}

  onFeedBack = value => {
    this.setState({feed: value})
  }

  render() {
    const {feed} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const reaction = feed === 'Happy'
    return (
      <div className="bg-cont">
        <div className="card">
          {reaction && (
            <>
              <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
              <h1 className="thank-you">Thank You</h1>
              <p className="support-feedback">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          )}
          {!reaction && (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="feed-emojis">
                {emojis.map(each => (
                  <ReactionStyle
                    onFeedBack={this.onFeedBack}
                    reactType={each}
                    key={each.id}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
