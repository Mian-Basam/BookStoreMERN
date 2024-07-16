import React from 'react';

function Cards({ item }) {
  console.log(item);
  return (
    <div className="mt-3 my-3 p-3">
      <div className="card bg-base-100 w-75 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="break-words whitespace-normal">{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-2">${item.price}</div>
            <div className="cursor-pointer rounded-full hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
