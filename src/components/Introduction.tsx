import { FC } from 'react';

import prof_pic from '../assets/images/profile_picture.jpg';

interface Props {}

const Intro: FC<Props> = () => {
    return (
        <section className="intro_container">
            {/* Photo by <a href="https://unsplash.com/@degleex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Degleex</a> on <a href="https://unsplash.com/s/photos/background-forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

            <img src={prof_pic} alt="" className="profile_pic" />

            <p className="greetings">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                qui in aperiam voluptatibus, nobis quo voluptatem veritatis
                esse. Repudiandae, esse! Iusto laboriosam optio recusandae,
                soluta porro assumenda voluptatibus animi, in veritatis
                voluptatum minima ipsa natus ducimus neque doloremque saepe,
                placeat fuga dolor eaque? Aliquid commodi quisquam ea dolorum,
                iusto voluptatem.
            </p>

            <div className="known_tech"></div>
        </section>
    );
};

export default Intro;