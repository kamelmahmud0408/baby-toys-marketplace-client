import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mt-10 p-5'>
                <h1 className='text-3xl font-bold text-orange-500'>Question No: 1</h1>
                <h3 className='text-xl font-semibold mt-2'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className='mt-5'>
                    An access token is a credential that represents the authorization granted to a client application to access specific resources on behalf of a user. It typically has a limited lifespan and is used to authenticate and authorize requests to protected endpoints. When a client makes a request, it includes the access token in the request headers, allowing the server to verify the token and grant or deny access accordingly. <br />

                    A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It is typically issued alongside the access token and stored securely by the client application. When the access token expires, the client sends the refresh token to the authentication server to obtain a new access token without requiring the user to reauthenticate. <br />

                    Both the access token and refresh token should be securely stored on the client-side. Best practices recommend storing them in a secure manner, such as using browser storage mechanisms like HTTP-only cookies or local storage. It's important to protect them against unauthorized access, as they can be used to gain access to restricted resources. Storing them securely helps mitigate the risk of token theft or misuse.
                </p>
                <hr className='mt-8' />
            </div>
            <div className='mt-10 p-10'>
                <h1 className='text-3xl font-bold text-orange-500'>Question No: 2</h1>
                <h3 className='text-xl font-semibold mt-2'>Compare SQL and NoSQL databases?</h3>
                <p className='mt-5'>
                    SQL databases, also known as relational databases, store data in tables with predefined schemas. They follow a structured format where data is organized into rows and columns. SQL databases use the SQL language for defining and manipulating data. They ensure data integrity through the use of constraints and support ACID (Atomicity, Consistency, Isolation, Durability) properties. SQL databases are suitable for structured and well-defined data, with relationships between tables. They excel in handling complex queries and transactions. Popular SQL databases include MySQL, PostgreSQL, and Oracle.
                    <br />
                    NoSQL databases, on the other hand, offer a more flexible and schema-less approach to data storage. They can handle unstructured, semi-structured, and rapidly changing data. NoSQL databases use various data models, such as key-value, document, column-family, or graph. They are designed for horizontal scalability and high-performance applications, prioritizing scalability and availability over strict data consistency. NoSQL databases are suitable for handling large amounts of data and work well in distributed environments. Popular NoSQL databases include MongoDB, Cassandra, and Redis.
                </p>
                <hr className='mt-8' />
            </div>
            <div className='mt-10 p-10'>
                <h1 className='text-3xl font-bold text-orange-500'>Question No: 3</h1>
                <h3 className='text-xl font-semibold mt-2'>What is express js? What is Nest JS?</h3>
                <p className='mt-5'>
                    Express.js:
                    Express.js is a minimalistic and flexible web application framework for Node.js. It provides a straightforward and unopinionated approach to building web servers and APIs. Express.js allows developers to handle HTTP requests, define routes, and implement middleware functions easily. It offers a simple and intuitive API for handling routing, middleware, and request/response handling. Express.js is known for its lightweight nature, allowing developers to have fine-grained control over their application's structure and functionality. It provides a solid foundation for building small to medium-sized applications quickly. Express.js is widely adopted and has a vast ecosystem of plugins and middleware available.
                    <br />
                    Nest.js:
                    Nest.js is a progressive, TypeScript-based framework for building scalable and maintainable server-side applications. It is built on top of Express.js, leveraging its capabilities while adding a higher level of structure and organization. Nest.js follows the architectural style of Angular, which is based on modules, controllers, services, and decorators. It provides a robust dependency injection system, allowing for better code organization and testability. Nest.js also offers features like declarative routing, middleware, and support for various transport layers (HTTP, WebSockets, GraphQL, etc.). It promotes the use of TypeScript, which adds static typing and enhanced tooling to improve development productivity and code maintainability. Nest.js is designed for building complex enterprise applications and APIs with a focus on scalability, modularity, and code reusability.
                </p>
                <hr className='mt-8' />
            </div>
            <div className='my-10 p-10'>
                <h1 className='text-3xl font-bold text-orange-500'>Question No: 4</h1>
                <h3 className='text-xl font-semibold mt-2'>What is MongoDB aggregate and how does it work?</h3>
                <p className='mt-5'>
                    In MongoDB, the aggregate function is a powerful tool for performing advanced data processing and analysis tasks. It allows you to perform complex operations on collections of documents, such as filtering, grouping, sorting, transforming, and computing aggregations.
                       <br />
                    The aggregate function operates on the data using a pipeline approach, where multiple stages are defined in a sequence to process the documents. Each stage performs a specific operation on the input documents and passes the transformed results to the next stage. The output of one stage becomes the input for the next stage, creating a data processing pipeline.
                    <br />
                    The aggregate pipeline consists of one or more stages, and each stage has a specific purpose. Some commonly used stages are: $match ,$group, $project ,$sort ,$limit, $unwind
                </p>
                <hr className='mt-8' />
            </div>

        </div>
    );
};

export default Blogs;