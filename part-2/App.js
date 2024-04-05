import React from 'react';
import Tweet from './Tweet'

function App() {
    return (
      <div>
        <Tweet
          name='name1'
          username='username1'
          date='date1'
          message='msg1'
        />
        <Tweet
          name='name2'
          username='username2'
          date='date2'
          message='msg2'
        />
        <Tweet
          name='name3'
          username='username3'
          date='date3'
          message='msg3'
        />
      </div>
    );
  }

  export default App;