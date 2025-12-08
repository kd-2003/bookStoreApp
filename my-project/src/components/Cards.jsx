import React from 'react'
import bookImage from '../../public/books.jpg';
function Cards({item}) {
    return (
        <>
            <div className="mt-3 dark:bg-white dark:text-black">
                <div className="card dark:bg-white dark:text-black w-85 shadow-sm hover:scale-105 duration-300">
                    <figure>
                        <img
                            src= {bookImage} 
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline cursor-pointer broder-[2px] hover:bg-pink-500 duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
