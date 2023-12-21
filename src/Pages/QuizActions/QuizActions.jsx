import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const QuizActions = () => {
  const naviget = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { data: quizData = [], refetch: quizDataRefetch } = useQuery({
    queryKey: ["managequizes"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/quizes`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    console.log("Delete", id);

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
        axiosSecure.delete(`/quizes/${id}`).then((res) => {
          console.log(res.data);

          if (res.data?.deletedCount === 1) {
            quizDataRefetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleUpdate = (id) => {
    console.log("update", id);
  };

  //   console.log(quizData);

  return (
    <div>
      <p className="capitalize text-center text-2xl underline font-semibold">
        {" "}
        Manage all quizes{" "}
      </p>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Headline</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {quizData?.map((quiz, index) => {
                // console.log(quiz);
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{quiz?.headline}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => handleUpdate(quiz?._id)}
                        className="btn"
                      >
                        <FaEdit className="text-2xl" />{" "}
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        onClick={() => handleDelete(quiz?._id)}
                        className="btn"
                      >
                        <MdDelete className="text-2xl" />{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizActions;
