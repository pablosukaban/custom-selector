import React from 'react';
import Select from './Select';

const options = [
    { label: 'First', value: 1 },
    { label: 'Sec', value: 2 },
    { label: 'Third', value: 3 },
    { label: 'Forth', value: 4 },
];

function App() {
    return (
        <div className={'max-w-md mx-auto mt-28'}>
            <Select options={options} />
        </div>
    );
}

export default App;
