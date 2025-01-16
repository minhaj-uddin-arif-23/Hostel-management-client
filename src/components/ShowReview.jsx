import React from "react";


function ShowReview({reviews}) {

  // console.log(review)
  
  return (
    <div>
      <div>
        {/* Total review  {reviews.length} */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto">
        {reviews?.map((data) => (
          <>
            <div className="card card-compact bg-base-100 w-96 shadow-xl border-2 border-gray-300 mt-10 p-7">
              <figure>
                <img
                className="w-11 rounded-2xl "
                src={`${data?.user?.photo}`} alt="Shoes" />
              </figure>
              <div className="card-body">
                {/* <h2 className="card-title">{}</h2> */}
                <h1 className="card-title">{data.text}</h1>
               <div className="flex">
               <p>{data?.user?.name}</p>
               <p className="ml-10">Rating {data?.rating}</p>
               </div>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ShowReview;
