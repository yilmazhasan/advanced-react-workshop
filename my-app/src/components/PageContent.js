import React from 'react';

// React is not defining strictly what should be passed as a prop. It may be whatever we want. It could even be another component:
// In React we have the handy children prop. That's how the parent reads/accesses its children. This API will make our Header agnostic and dependency-free:
// It now becomes easier to test because we may render the Header with an empty <div>. This will isolate the component and will let us focus on one piece of our application.
// Every React component receives props. As we mentioned already there is no any strict rule about what these props are. We may even pass other components.
export function PageContent(props) {
    return <div>
        {props.children}
    </div >;

}