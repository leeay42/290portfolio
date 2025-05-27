import React from "react";
import { HiOutlineHome, HiOutlineComputerDesktop } from "react-icons/hi2";

function HomePage() {
    return (
        <>
            <h2><i><HiOutlineHome/></i> Ah Young Lee's Web Dev Portfolio <i><HiOutlineComputerDesktop/></i></h2>
            <article id="">
                <p>At the moment, my career goals are still a little unclear.  My background 
                    is in biology and next-generation sequencing, which produces large 
                    amounts of data that need to be analyzed.  I started my foray into 
                    computer science with the vague notion of getting more into bioinformatics, 
                    but as I continue with the Oregon State post-baccalaureate program, 
                    I’m reconsidering my options.  I wish to explore more about software 
                    engineering before firmly committing to a path, but I think I would 
                    like to have a backend focus.</p>

                <p>This website is a full-stack MERN application implemented with 
                    REST API and capable of all CRUD operations.  A MERN app is created 
                    using multiple technologies such as MongoDB, Express.js, and Node.js 
                    for the backend and React App for the frontend or User Interface (UI).</p>
                <ul>
                    <li>MongoDB is a cross-platform document-oriented NoSQL database 
                        management program.  It uses the binary form of JSON (BSON) to store 
                        documents internally and shows the documents in JSON format.  
                        The MongoDB server can be created on the Atlas Cloud Cluster or 
                        on the local hard drive.  A JavaScript library called Mongoose is 
                        used to simplify how the developer interacts with the MongoDB database 
                        by creating a connection between the collection of documents in MongoDB 
                        and the objects in a Node app.</li>
                    <li>Express.js is a popular, open-source backend Node.js web application 
                        framework. Express provides an Application Programming Interface by 
                        enabling the usage of HTTP methods such as GET, POST, PUT, and DELETE and 
                        including middleware modules for additional response and request activities.  
                        Additionally, Express also allows the developer to define the ports and 
                        application routes through HTTP methods and resource addresses (URLs).  
                        Then, static files can be used to create templates for dynamic applications 
                        that respond to user data.</li>
                    <li>Node.js is a cross-platform, open-source server environment that is written 
                        in JavaScript and has access to a library of numerous JavaScript modules.  
                        It is used for creating networking and server-side applications.  
                        A package manager for Node, npm, is a repository of open-source packages 
                        available to Node.js that also installs and manages the usage of the mentioned 
                        packages.</li>
                    <li>React is a frontend, open-source JavaScript framework for building interactive 
                        UIs.  React applications are built with components, which are reusable units of 
                        functions or data written using JSX.  Component trees are generated from these 
                        components and mapped to a DOM tree, or a hierarchical representation of an XML 
                        document.  In React applications, components are modified, and then the framework 
                        will update the DOM for minimal browser rendering.  </li>
                </ul>
                
            </article>
        </>
    );
}

export default HomePage;
