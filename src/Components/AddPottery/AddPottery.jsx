import React from "react";
import { json } from "react-router-dom";
import Swal from "sweetalert2";

const AddPottery = () => {
  const handleAddPtryCeramics = (e) => {
    e.preventDefault();
    console.log("added pottery & cermamics data");

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const price = form.price.value;
    const status = form.status.value;
    const rating = form.rating.value;

    console.log(
      name,
      quantity,
      supplier,
      photo,
      description,
      price,
      status,
      rating
    );
    const newPotteryCeramics = {
      name,
      quantity,
      supplier,
      photo,
      description,
      price,
      status,
      rating,
    };
    console.log(newPotteryCeramics);

    //send data to the server'
    fetch(
      "https://b9-a-10-ceramics-pottery-server-4lx8.vercel.app/addPotteryCeramics",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newPotteryCeramics),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // alert("data mongoDB te insert hoiche");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data has been saved to database-->MongoDB",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div className="bg-yellow-50 p-20">
      <h2 className="text-2xl text-center">
        Add Pottery & Ceramics:Admin Page-
        <span className="bg-orange-500 p-2 font-bold text-white rounded">
          CREATE
        </span>
      </h2>
      <form onSubmit={handleAddPtryCeramics}>
        {/* form row */}
        <div className="flex gap-5">
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">
                  Pottery || Ceramics name
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Type item name here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Available Qty</span>
              </div>
              <input
                type="number"
                name="quantity"
                placeholder="Type Quantity here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="flex gap-5">
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Supplier name</span>
              </div>
              <input
                type="text"
                name="supplier"
                placeholder="Type Supplier name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Photo URL</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="give photo url here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="flex gap-5">
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">
                  Pottery_Ceramics Description
                </span>
              </div>
              <input
                type="text"
                name="description"
                placeholder="Type description here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Price</span>
              </div>
              <input
                type="number"
                name="price"
                placeholder="Enter Price here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="flex gap-5">
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Status</span>
              </div>
              <input
                type="text"
                name="status"
                placeholder="Type status here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg">Rating of Item</span>
              </div>
              <input
                type="number"
                name="rating"
                placeholder="Type Rating here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="my-5">
          <div className="w-full ">
            <label className="form-control w-full">
              <input
                type="submit"
                className="input input-bordered w-full bg-amber-200 text-xl"
                value="Add Pottery & Ceramics Data"
                // onClick={handleAddPtryCeramics}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPottery;
