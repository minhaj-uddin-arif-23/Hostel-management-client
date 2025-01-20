import React, { useState } from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

function ManageUsers() {
    const [search, setSearch] = useState("");
    const [currentPage,setCurrentPage] = useState(0);
    const itemPerPage = 10
    const axiosSequre = useAxiosSecure();
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["users",currentPage,search],
        queryFn: async () => {
            const { data } = await axiosSequre.get(`/allUsers?search=${search}&page=${currentPage}&size=${itemPerPage}`);
            return data;
        },
    });
    // console.log("search value is --> ",search)

    // if (isLoading) return ;

    const totalPage = Math.ceil(100/itemPerPage)
    const pages = [...Array(totalPage).keys()]
    // console.log('manage user page',pages)

    const handleMakeAdmin = (id) => {
        axiosSequre.patch(`/user/admine/${id}`).then((res) => {
            if (res.data.modifiedCount > 0) {
                refetch();
                toast.success(`User is now an Admin`);
            }
        });
    };

    const handleBadgeChange = (email, newBadge) => {
        axiosSequre.patch(`/user/status/${email}`, { badge: newBadge }).then((res) => {
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                  title: `Status Updated Successfully ${newBadge}`,
                  icon: "success",
                  draggable: true
                });
            }
        }).catch((error) => {
          Swal.fire({
            title: 'Somthing was issue',
            icon: "error",
            draggable: true
          });
        });
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSequre.delete(`/userDelete/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    }
                });
            }
        });
    };
    return (
        <div className="p-6 space-y-6">
        {/* Search and User Count Section */}
        <div className="flex justify-between items-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by Name & Email"
            className="input input-bordered input-info w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="border-2 border-gray-600 px-8 py-2 rounded-md font-semibold text-lg text-gray-700">
            Manage Users: {users.length}
          </div>
        </div>
      {
        isLoading && <Loading />
      }
        {/* Table Section */}
        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="table table-striped">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-sm font-semibold text-gray-700">Name</th>
                <th className="text-sm font-semibold text-gray-700">Email</th>
                <th className="text-sm font-semibold text-gray-700">Role</th>
                <th className="text-sm font-semibold text-gray-700">Badge</th>
                <th className="text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="text-sm text-gray-700 py-3">{user.name}</td>
                  <td className="text-sm text-gray-700 py-3">{user.email}</td>
                  <td className="text-sm py-3">
                    {user.role === "admin" ? (
                      <span className="badge badge-primary">Admin</span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-success btn-sm text-white"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td className="py-3">
                    <select
                      className="select select-accent w-full max-w-xs"
                      defaultValue={user.badge}
                      onChange={(e) => handleBadgeChange(user.email, e.target.value)}
                    >
                      <option value="Bronze">Bronze</option>
                      <option value="Silver">Silver</option>
                      <option value="Gold">Gold</option>
                      <option value="Platinum">Platinum</option>
                    </select>
                  </td>
                  <td className="py-3">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-error text-white text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      





        {/* Pagination Section */}
        <div className="mt-6 flex items-center justify-center">
          {pages.map((number) => (
            <button
              key={number}
              className={`btn btn-sm ${
                currentPage === number ? "btn-primary" : "btn-outline"
              } mx-2`}
              onClick={() => setCurrentPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
      
    );
}

export default ManageUsers;
