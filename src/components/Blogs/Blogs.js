import React from 'react';

const Blogs = () => {
    return (
        <div className='my-12 md:w-3/5 w-4/5 mx-auto'>
            <div className='mt-10'>
                <h2 className='text-2xl font-semibold'>What is difference between JavaScript and Nodejs?</h2>
                <h6 className='text-sm text-gray-500 font-semibold my-1'>Post by Admin, 07 may</h6>
                <p className='md:w-11/12 text-[16px] mt-4'>
                    <strong>JavaScript: </strong> JavaScript is high-level scripting language. Which can only run in the web browser through browser engine. Like- V8 (which used in chrome web browser) and its generally used for client side or front end website interaction. Its a very strong language normally used for a web application.
                    <br />
                    <strong>Nodejs: </strong> Nodejs is an interpreter or run time environment for JavaScript. With Nodejs we can run JavaScript in the server or develop the server using Nodejs. And Nodejs use V8 engine for parses and runs the code in the server. 
                </p>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl font-semibold'>When should use nodejs and when should use mongodb?</h2>
                <h6 className='text-sm text-gray-500 font-semibold my-1'>Post by Admin, 07 may</h6>
                <p className='md:w-11/12 text-[16px] mt-4'>
                    Nodejs is a JavaScript run time engine or environment which used to create a server, whereas mongodb is a noSql database engine which used for get, store, update, delete data into database. 
                    <br />
                    <br />
                    <strong>Nodejs: </strong> When we need to create a server or send and receive user request and response to the database then we should use nodejs.
                    <br />
                    <strong>Mongodb: </strong> We know that, Mongodb is a database. When we need to get, store, delete and update user information or data then we should use mongodb. 
                </p>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl font-semibold'>What are differences between SQL and NoSQL database?</h2>
                <h6 className='text-sm text-gray-500 font-semibold my-1'>Post by Admin, 07 may</h6>
                <p className='md:w-11/12 text-[16px] mt-4'>
                    Database is a storage, where user can store their data. 
                    Generally, Two kinds of database are most popular. Sql (Relational database) and NoSql (Non-relational databse) here simply describe about those.
                    <br />
                    <br />
                    <strong>SQL: </strong> Sql databases is Relational table-based database. And its defines and manipulates the data on structured query lanuage way. Most of the case its a vertically scalable database where developer can increase the things like- RAM, CPU, or SSD.
                    <br />
                    <strong>NoSQL: </strong> NoSql database is non-relational database. Where data can store either key-value paris, document based or wide-colum based. And database has dynamic schema for unstructured data. Its a horizontally scalable. That means, developer can handle more traffic by sharding or adding more servers in NoSql database.
                </p>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl font-semibold'>What is the purpose of jwt and how does it work?</h2>
                <h6 className='text-sm text-gray-500 font-semibold my-1'>Post by Admin, 07 may</h6>
                <p className='md:w-11/12 text-[16px] mt-4'>
                    JWT or JSON Web token is an open standard for securely transmitting information between two parties the client and server.
                    <br />
                    <br />
                    <strong>Purpose of JWT: </strong> The purpose of using JWT is not to hide data but to ensure the authenticity of the data when it transmit between two parties. Its encoded but not encrypted.
                    <br />
                    <strong>How does its work: </strong> When a user logs into a site with a username and password. the server confirm his identity and sends back an access token that containing a refernce to his identity. Then client includes this access with every requst to the server. And the server can further use the identity asserted by the validated token to implement more permissions.
                </p>
            </div>
        </div>
    );
};

export default Blogs;