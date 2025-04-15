import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const data = useLoaderData();

    return (
        <div>
            <div className="hero bg-purple-600 text-white ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto'>
                <h3 className='font-bold text-2xl mt-10'>Statistics</h3>
                <div className='bg-white p-5 rounded-2xl my-5'>
                    <div style={{ width: '100%', height: 400 }}>
                        <ResponsiveContainer>
                            <BarChart
                                data={data}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="product_title" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                <Bar dataKey="rating" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Statistics;