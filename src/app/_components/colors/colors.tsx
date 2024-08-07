'use client';

import { colord } from 'colord';
import { tailwindColors } from '../../../../tailwind.config';

const getTextColor = (backgroundColor: string): string =>
    colord(backgroundColor).isDark() ? '#dddddd' : '#333333';

const ColorBox: React.FC<{ name: string; color: string }> = ({ name, color }) => (
    <div
        className='flex h-60 w-96 flex-col items-center justify-center text-center uppercase'
        style={{
            backgroundColor: color,
            color: getTextColor(color),
        }}
    >
        <span>{name}</span>
        <span>{color}</span>
    </div>
);

export const Colors: React.FC = () => {
    return (
        <div className='flex flex-wrap justify-center' dir='ltr' lang='en'>
            {Object.entries(tailwindColors).map(([name, color]) => (
                <ColorBox key={name} name={name} color={color} />
            ))}
        </div>
    );
};
