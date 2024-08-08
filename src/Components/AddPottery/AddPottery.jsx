import React from "react";

const AddPottery = () => {
  return (
    <div>
      <h2 className="text-2xl text-center">
        Add Pottery & Ceramics:Admin Page
      </h2>
      <form>
        <div className="flex">
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Pottery || Ceramics name?</span>
              </div>
              <input
                type="text"
                placeholder="Type item name here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Available Qty</span>
              </div>
              <input
                type="number"
                placeholder="Type Quantity here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPottery;
