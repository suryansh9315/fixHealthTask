"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [complaints, setComplaints] = useState("");
  const [past, setPast] = useState("");
  const [doctor, setDoctor] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [doctors2, setDoctors2] = useState([]);
  const searchParams = useSearchParams();

  const cityparam = searchParams.get("city");

  const fetchDoctors = async () => {
    const res = await fetch("/api/doctors");
    const data = await res.json();
    setDoctors(data.doctors);
    setDoctors2(data.doctors);
  };

  const handleCityChange = () => {
    let cityName;
    if (cityparam) {
      cityName = cityparam.toLowerCase()
      setCity(cityparam);
    }else{
      cityName = city.toLowerCase();
    }
    if (cityName) {
      const filteredDoctors = doctors.filter((d) =>
        d.city.toLowerCase().includes(cityName)
      );
      console.log(cityName, filteredDoctors);
      // if (filteredDoctors) {
        setDoctors(filteredDoctors);
      // }
    } else {
      setDoctors(doctors2);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  useEffect(() => {
    handleCityChange();
  }, [city, cityparam]);

  return (
    <div className="my-40 max-w-[1400px] mx-auto">
      <div className="mx-10 flex gap-5 flex-col xl:flex-row">
        <div className="w-full md:w-2/3 xl:w-1/3 flex flex-col gap-5">
          <div className="text-5xl font-normal">Get in touch</div>
          <div className="text-base font-normal pr-10">
            Do you have a complaint in mind? Or are you just curious to talk to us? Сomplete the form to contact us.
            </div>
          <Image
            className="hidden xl:flex mt-10 w-full h-[600px] object-cover rounded-2xl"
            width={200}
            height={600}
            alt="image_1"
            src={"https://zelh.com/wp-content/uploads/2024/01/yulia-raketa.jpg"}
          />
        </div>
        <div className="w-[100%] lg:w-[75%] xl:w-2/3 p-10 rounded-lg bg-[#f7f7f7] dark:bg-black dark:border dark:border-gray-700 flex gap-10 flex-col items-center md:items-start">
          <div className="flex justify-between flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-3 w-[250px] sm:w-[300px]">
              <div className="font-bold text-lg">Full Name</div>
              <input
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2 placeholder:text-gray-300"
              />
            </div>
            <div className="flex flex-col gap-3 w-[250px] sm:w-[300px]">
              <div className="font-bold text-lg">Phone Number</div>
              <input
                placeholder="Enter your phone number"
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                minLength={10}
                className="text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2 placeholder:text-gray-300"
              />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-10 items-center sm:items-start">
            <div className="flex flex-col gap-3 w-[250px] sm:w-[300px]">
              <div className="font-bold text-lg">Age</div>
              <input
                placeholder="Enter your age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2 placeholder:text-gray-300"
              />
            </div>
            <div className="flex flex-col gap-3 w-[250px] sm:w-[300px]">
              <div className="font-bold text-lg">City</div>
              <input
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2 placeholder:text-gray-300"
              />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-3 w-[250px] sm:w-[300px]">
              <div className="font-bold text-lg">Occupation</div>
              <input
                placeholder="Enter your occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2 placeholder:text-gray-300"
              />
            </div>
            {occupation.toLowerCase() != "housewife" &&
              occupation.toLowerCase() != "housemaker" && (
                <div className="flex flex-col gap-3 w-[250px] sm:w-[300px]">
                  <div className="font-bold text-lg">Company</div>
                  <input
                    placeholder="Enter your company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2 placeholder:text-gray-300"
                  />
                </div>
              )}
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-3 w-[250px] sm:w-[300px]">
              <div className="font-bold text-lg">Complaints</div>
              <input
                placeholder="Enter your complaints"
                value={complaints}
                onChange={(e) => setComplaints(e.target.value)}
                className="text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2 placeholder:text-gray-300"
              />
            </div>
            <div className="flex flex-col gap-3 w-[250px] sm:w-[300px]">
              <div className="font-bold text-lg">Select a Doctor</div>
              <select
                onChange={(e) => setDoctor(e.target.value)}
                className="text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2"
                name="doctor"
              >
                {doctors.map((d, i) => (
                  <option
                    value={d.name}
                    key={i}
                    className="text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2"
                  >
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {age > 30 && (
            <div className="flex flex-col gap-3">
              <div className="font-bold text-lg">
                Experience with Physiotherapy
              </div>
              <input
                placeholder="Any past experience with Physiotherapy"
                value={past}
                onChange={(e) => setPast(e.target.value)}
                className="w-full text-lg outline-none bg-[#f7f7f7] dark:bg-black border-b border-b-gray-300 pb-2 placeholder:text-gray-300"
              />
            </div>
          )}
          <div className="z-10 px-8 py-3 mt-5 bg-black cursor-pointer text-white dark:bg-white dark:text-black rounded-3xl font-bold w-[200px] text-center">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
