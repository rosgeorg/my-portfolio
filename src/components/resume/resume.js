import React, { Component } from 'react'

export default class resume extends Component {
    render() {
        return (
            <section id="resume">
                {/* Education
----------------------------------------------- */}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Dev.F</h3>
                                <p className="info">
                                    Web Development White, Red, and Black Belt / Master in Coding <span>•</span>{" "}
                                    <em className="date">January 2020 - January 2021</em>
                                </p>
                                <div className='newspaper'>
                                    · HTML <br />
                                    · CSS <br />
                                    · Bootstrap <br />
                                    · Programming Fundamentals <br />
                                    · Data structures <br />
                                    · Basic Algorithmics <br />
                                    · ECMAscript 6 <br />
                                    · OOP <br />
                                    · Advanced Javascript <br />
                                    · Server-Side Programming <br />
                                    · Introduction to Databases <br />
                                    · Client-Side Programming <br />
                                    · MongoDB <br />
                                    · REST API <br />
                                    · Javascript Frameworks <br />
                                    · File Structure <br />
                                    · Deployment <br />
                                    · Design Thinking <br />
                                    · Figma <br />
                                    · Atomic Design <br />
                                </div>
                                <br />
                            </div>
                        </div>
                        {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Instituto Tecnológico de Durango</h3>
                                <p className="info">
                                    B.S. Degree in Electronic Engineering <span>•</span>{" "}
                                    <em className="date">2010 - 2015</em>
                                </p>
                                <p>
                                    Embedded Software, Microcontrollers, Microprocessors, Robotics and
                                    Home Automation
                                </p>
                            </div>
                        </div>
                        {/* item end */}
                    </div>
                    {/* main-col end */}
                </div>
                {/* End Education */}
                {/* Work
----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Encora Inc.</h3>
                                <p className="info">
                                    Frontend Developer <span>•</span>
                                    <em className="date">October 2021 - Present</em>
                                </p>
                                <ul className="a">
                                    <li>Developed responsive and efficient web applications using ReactJS, Next.js, TypeScript, and Redux
                                        (RTK).</li>
                                    <li>Helped reach 80% test coverage with Jest, Vitest, and RTL.</li>
                                    <li>Integrated REST APIs and third-party tools, such as payment or analytics platforms.</li>
                                    <li>Managed CI/CD pipelines using Azure DevOps.</li>
                                    <li>Participated in code reviews, debugging, and continuous improvement.</li>
                                </ul>
                            </div>
                        </div>
                        {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Mariachi IO</h3>
                                <p className="info">
                                    React Developer <span>•</span>
                                    <em className="date">October 2020 - October 2021</em>
                                </p>
                                <ul className="a">
                                    <li>Contributed to a B2B e-commerce platform and back-office system with an agile team.</li>
                                    <li>Collaborated with UI/UX designers on iterative improvements.</li>
                                    <li>Performed manual testing, bug fixes, and component optimizations.</li>
                                </ul>
                            </div>
                        </div>
                        {/* item end */}
                    </div>
                    {/* main-col end */}
                </div>
                {/* End Work */}
                {/* Skills
----------------------------------------------- */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                <li>
                                    <span className="bar-expand html5" />
                                    <em>HTML</em>
                                </li>
                                <li>
                                    <span className="bar-expand css" />
                                    <em>CSS</em>
                                </li>
                                <li>
                                    <span className="bar-expand javascript" />
                                    <em>Javascript</em>
                                </li>
                                <li>
                                    <span className="bar-expand react" />
                                    <em>ReactJS</em>
                                </li>
                                <li>
                                    <span className="bar-expand nextjs" />
                                    <em>NextJS</em>
                                </li>
                                <li>
                                    <span className="bar-expand typescript" />
                                    <em>Typescript</em>
                                </li>
                                <li>
                                    <span className="bar-expand tailwind" />
                                    <em>Tailwind</em>
                                </li>
                                <li>
                                    <span className="bar-expand node" />
                                    <em>NodeJS</em>
                                </li>
                                <li>
                                    <span className="bar-expand wordpress" />
                                    <em>Wordpress</em>
                                </li>
                                <li>
                                    <span className="bar-expand php" />
                                    <em>PHP</em>
                                </li>
                            </ul>
                        </div>
                        {/* end skill-bars */}
                    </div>
                    {/* main-col end */}
                </div>
                {/* End skills */}
            </section>

        )
    }
}