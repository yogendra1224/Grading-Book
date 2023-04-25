import React from 'react';
import { FaUniversity, FaChalkboardTeacher, FaLaptopCode, FaClock, FaUsers, FaBook } from 'react-icons/fa';

const Home = () => {
    return ( 
        <div>
            
            <h1 className='heading'><FaBook /> Grading Digital Book</h1>
            <div className='list'>
                <ul className='firstul'>
                    <li className='firstlist'><FaUniversity /><span><b>College</b> : Lovely Professional University</span></li>
                    <li className='firstlist'><FaChalkboardTeacher /><span><b>Professor's Name</b> : Mir Junaid Rasool</span></li>
                    <li className='firstlist'><FaLaptopCode /><span><b>Department</b> : Computer Science</span></li>
                </ul>
                <ul className='secondul'>
                    <li id='listtwo1'><FaClock /> <span><b>Semister</b> : 8th</span></li>
                    <li id='listtwo2'><FaUsers /> <span><b>Section</b> : K19FE</span></li>
                    <li id='listtwo3'><FaUsers /> <span><b>Group</b> : 1</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Home
