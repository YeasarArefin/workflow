import React from 'react';

const Skeliton = () => {
    return (
        <div className="col-md-4 mb-5">
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-80 mx-auto h-96">
                <div className="animate-pulse flex flex-col space-x-4">
                    <div className="rounded bg-blue-400 h-40 w-full mb-10"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                        <div className="space-y-5">
                            <div className="h-4 bg-blue-400 rounded"></div>
                            <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                            <div className="h-4 bg-blue-400 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeliton;
