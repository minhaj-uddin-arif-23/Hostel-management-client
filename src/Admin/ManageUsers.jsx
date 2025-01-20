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
        queryKey: ["users",currentPage],
        queryFn: async () => {
            const { data } = await axiosSequre.get(`/allUsers?page=${currentPage}&size=${itemPerPage}`);
            return data;
        },
    });

    if (isLoading) return <Loading />;
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
        <div>
            <div className="flex justify-between">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Type name & email"
                    className="input input-bordered input-info w-full max-w-lg"
                />
                <div className="border-2 border-gray-600 px-8 py-2 rounded-md">
                    Manage Users: {users.length}
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Badge</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === "admin" ? (
                                        "Admin"
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user._id)}
                                            className="btn btn-success text-white text-lg btn-sm"
                                        >
                                            <FaUsers />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <select
                                        className="select select-accent w-full max-w-xs"
                                        defaultValue={user.badge}
                                        onChange={(e) =>
                                            handleBadgeChange(user.email, e.target.value)
                                        }
                                    >
                                        <option value="Bronze">Bronze</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Gold">Gold</option>
                                        <option value="Platinum">Platinum</option>
                                    </select>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-error text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


            {/* pagination */}

            <div className="mt-10 flex items-center justify-center">
            {
                pages.map((number)=>(
                    <button
                    key={number}
                    className={`btn btn-sm ${currentPage === number ? 'btn-primary':'btn-outline' } mx-1`}
                    onClick={()=>setCurrentPage(number)}
                    >
            {number + 1}
                    </button>
                ))
            }
            </div>
        </div>
    );
}

export default ManageUsers;
