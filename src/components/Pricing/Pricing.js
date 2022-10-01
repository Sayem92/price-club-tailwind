import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {

    const pricingOptions = [
        {id: 1, name: 'Free', price: 0 ,features: [
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Will never use feature',
            'Great feature',
            'Loving feature'
        ] },
        {id: 2, name: 'Medium', price: 9.99, features: [
            'Everything on medium',
            'Extra feature',
            'Unnecessary feature',
            'Will never use feature',
            'Great feature',
            'Loving feature'
        ] },
        {id: 3, name: 'Premium', price: 19.99 ,features: [
            'Everything on premium',
            'Extra feature',
            'Unnecessary feature',
            'Will never use feature',
            'Great feature',
            'Loving feature'
        ] },
    ];

    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of the Town</h1>
            <div className='grid md:grid-cols-3 gap-4 mt-4'>
            {
                pricingOptions.map(option => <PriceOption
                    key={option.id}
                    option={option}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default Pricing;