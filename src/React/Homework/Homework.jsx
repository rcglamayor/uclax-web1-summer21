import React from 'react';
import styled from 'styled-components';
import Essay from './Essay.jsx';
import SunAndMoon from '../SunAndMoon/SunAndMoon.jsx';

const Homework = () => {

    return (
        <div>
            <SunAndMoon />
            <h2>Homework</h2>
            <Essay
                number={ 1 }
                question='What is the difference between Git, Github, and Heroku?'
            >
                My long winded answer 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut suscipit perferendis repellendus autem reiciendis nihil eius. Cum ullam eveniet illo ipsum perferendis numquam, omnis architecto consequuntur aspernatur repudiandae molestias quidem.
            </Essay>
            <Essay
                number={ 2 }
                question='What is the difference between HTML, CSS, and JS?'
            >
                My long winded answer 2. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus, laudantium nostrum, aliquam eaque recusandae aspernatur iure iusto veniam temporibus dignissimos provident fugiat quod nemo minus excepturi eum voluptatum! At.
            </Essay>
            <Essay
                number={ 3 }
                question='Next question'
            >
                My long winded answer 3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus, laudantium nostrum, aliquam eaque recusandae aspernatur iure iusto veniam temporibus dignissimos provident fugiat quod nemo minus excepturi eum voluptatum! At.
            </Essay>
            <Essay
                number={ 4 }
                question='What is the difference between Web Designer, Front End Developer and Back End Developer?'
            >
                My long winded answer 3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto delectus, laudantium nostrum, aliquam eaque recusandae aspernatur iure iusto veniam temporibus dignissimos provident fugiat quod nemo minus excepturi eum voluptatum! At.
            </Essay>
        </div>
    );
}

export default Homework;