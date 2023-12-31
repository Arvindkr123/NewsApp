import React from 'react'
import newsApi from './newsApi.json'
const News = () => {
    return (
        <div className="grid gap-2 lg:grid-cols-4">
            {newsApi.articles.map((items, key) => (
                <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                    <img
                        className="object-cover w-full h-48"
                        src={items.urlToImage}
                        alt="image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold text-blue-600">

                            {items.title}
                        </h4>
                        <p className="mb-2 leading-normal">
                            {items.content}
                        </p>
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Read more
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default News
