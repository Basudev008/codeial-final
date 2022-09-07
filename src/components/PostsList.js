import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <Link to={`/user/${post.user._id}`}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="user-pic"
                  />
                </Link>
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/03/56/32/78/1000_F_356327877_cNUv8LDs4Qqqj3u1Tk6DejpGn1CK3dzW.jpg"
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://stock.adobe.com/images/typing-in-a-chat-bubble-icon-comment-sign-symbol/304486491"
                    alt="comments-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start typing a comment" />
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">22</span>
                  </div>

                  <div className="post-comment-content">Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
