import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
        <CheckCircleIcon className="h-5 w-5 text-green-500"/>
        <p className='ml-2'>{feature}</p>
        </div>
    );
};

export default Feature;