import React from 'react';

const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 1200,
        url: 'https://soklyphone.com/storage/Apple/iphone/iPhone-15-pro-max/iphone-15-pro-max-titanium-1696500627l3hKH.png',
    },
    {
        id: 2,
        name: 'MacBook Air 15',
        price: 1500,
        url: 'https://soklyphone.com/storage/Apple/Macbook/MacBook-Air-15-M2-2022/space-gray-1689060426lnJdL.png',
    },
    {
        id: 3,
        name: 'Google Pixel 8 Pro',
        price: 999,
        url: 'https://soklyphone.com/storage/Google/Google-Pixel-8-Pro/bay-1-1697524852zNtUO.png',
    },
    {
        id: 4,
        name: 'Heuwei Buds',
        price: 39,
        url: 'https://soklyphone.com/storage/Accessories/Huawei/HUAWEI-FreeBuds-SE-2/huawei-freebuds-se-2-16950245347yCKC.png',
    },
];

const App = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="flex justify-between items-center px-10 py-4 bg-black text-white">
                <h2 className="font-bold text-2xl text-blue-500">Logo</h2>

                <ul className="flex items-center gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <button className="bg-blue-500 text-white px-4 py-2 font-bold">
                    Sign In
                </button>
            </nav>

            {/* Cards */}
            <div className="mt-10 px-10 grid grid-cols-4 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="p-4 border border-black">
                        <div className="w-full h-[300px]">
                            <img
                                src={product.url}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold">{product.name}</h2>
                            <h2 className="text-md">Price: ${product.price}</h2>
                            <button className="bg-black text-white px-4 py-2 font-bold">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
