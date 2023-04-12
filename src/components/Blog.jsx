import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <h1>Context Api: When your state needs to be accessed or set from many child components</h1>
            <br />
            <p>Custom Hooks: When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
            <br />
            <p>The useRef Hook can also be used to keep track of previous state values. This is because we are able to persist useRef values between renders.</p>
        </div>
    );
};

export default Blog;