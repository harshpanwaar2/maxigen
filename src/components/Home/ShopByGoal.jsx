import React from 'react';
import './ShopByGoal.css';
import shopbygoalImg from '../../assets/hero/homeshopbygoal.jpg'
import performanceImg from '../../assets/hero/performance.jpeg'
import fatImg from '../../assets/hero/fatLoss.webp'
import muscleImg from '../../assets/hero/muscleGain.webp'

const goalsData = [
    {
        id: 1,
        title: 'Muscle Gain',
        tagline: 'Build, Recover, and Grow',
        imageUrl: muscleImg,
        link: '/shop/muscle-gain'
    },
    {
        id: 2,
        title: 'Fat Loss & Ripped',
        tagline: 'Burn Fat and Define Muscle',
        imageUrl: fatImg,
        link: '/shop/fat-loss'
    },
    {
        id: 3,
        title: 'Performance & Strength',
        tagline: 'Boost Power and Endurance',
        imageUrl: performanceImg,
        link: '/shop/performance'
    },
    {
        id: 4,
        title: 'Health & Wellness',
        tagline: 'Support Your Body Daily',
        imageUrl: shopbygoalImg,
        link: '/shop/wellness'
    }
];

const ShopByGoal = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                Achieve Your Goal
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-12">
                What are you striving for? We have a solution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {goalsData.map((goal) => (
                    // The "group" class is key for the hover effects on child elements
                    <a key={goal.id} href={goal.link} className="group relative h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <img 
                            src={goal.imageUrl} 
                            alt={goal.title} 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-400" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/75 to-black/10"></div>
                        
                        <div className="relative z-10 p-6 flex flex-col justify-end h-full text-left">
                            <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                                {goal.title}
                            </h3>
                            <p className="text-white/90 mt-1">
                                {goal.tagline}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ShopByGoal;