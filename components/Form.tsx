"use client"
import DATA from "@/public/Data";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const MyForm = () => {
  const router = useRouter();
  const {data:session}=useSession();

  useEffect(()=>{

    if(!session){
        router.push("/api/auth/signin");
    }
  }
  ,[]);

  const [formData, setFormData] = useState<{
    title: string;
    Project: string;
    Github: string;
    Description: string;
    checkboxes: string[];
  }>({
    title: "",
    Project: "",
    Github: "",
    Description: "",
    checkboxes: [],
  });

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onselect = (name:any,checked:any) => {
   // select the name of the checked box
    const index = DATA.findIndex((item) => item.name === name);
    setFormData({
      ...formData,
      checkboxes: checked
        ? [...formData.checkboxes, DATA[index].name]
        : formData.checkboxes.filter((item) => item !== DATA[index].name),
    });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    try{
      const result= await axios.post("http://localhost:3000/api", formData);
      console.log(result.data);
      
    }
    catch(e){
      console.log(e);
      
    }

  };

  return (
    <div className="max-w-lg mx-auto p-6  rounded-md shadow-md">
      {/* Headline */}
        <h1 className="text-4xl font-bold  text-center text-indigo-600 mb-4">Create New Project</h1>

      {/* Description */}
      <p className="text-center text-gray-600 mb-6">
        Create new project and explore the community.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Input Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="input1">title</label>
          <input
            type="text"
              id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="textarea">Description</label>
          <textarea
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md h-32"
          ></textarea>
        </div>


        <div className="mb-4">
          <span className="block text-gray-700 font-bold mb-2">Checkboxes</span>
          <div className="grid grid-cols-2 gap-2">
            {DATA.map((item,index) => (
              <label key={item.name} className="flex items-center">
                <input
                  type="checkbox"
                  
                  onClick={(e)=>onselect(item.name,(e.target as HTMLInputElement).checked)}
                  className="mr-2"
                />
                {DATA[index].name}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="input2">Project link</label>
          <input
            type="text"
            id="Project"
            name="Project"
            value={formData.Project}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="input3">Github link</label>
          <input
            type="text"
            id="Github"
              name="Github"
            value={formData.Github}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Textarea */}
       

        {/* Checkboxes */}
       

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
