import { useState } from "react";

export default function FlightForm() {
  const [tripType, setTripType] = useState("one-way");
  const [classType, setClassType] = useState("economy");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adultCount, setAdultCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      JSON.stringify(
        {
          tripType,
          classType,
          from,
          to,
          departureDate,
          returnDate,
          adultCount,
        },
        null,
        2
      )
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 lg:absolute top-64 left-8 sm:left-16 lg:left-32 bg-white w-[90%] sm:w-[85%] lg:w-[80%] mx-auto shadow-2xl rounded-lg space-y-4"
    >
      <div className="flex flex-col sm:flex-row justify-start gap-4 w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
        {/* Trip Type */}
        <div>
          <label className="block font-semibold">Trip Type</label>
          <div className="flex gap-4 mt-2">
            <label>
              <input
                type="radio"
                name="tripType"
                value="one-way"
                checked={tripType === "one-way"}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-2"
              />
              One Way
            </label>
            <label>
              <input
                type="radio"
                name="tripType"
                value="round-trip"
                checked={tripType === "round-trip"}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-2"
              />
              Round Trip
            </label>
          </div>
        </div>

        {/* Travel Class */}
        <div>
          <label className="block font-semibold">Class</label>
          <select
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
            className="mt-2 w-full border border-gray-300 p-2 rounded"
          >
            <option value="economy">Economy</option>
            <option value="premium">Premium</option>
            <option value="business">Business</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly gap-4">
        {/* From and To */}
        <div className="w-full sm:w-[48%] lg:w-auto">
          <label className="block font-semibold">From</label>
          <input
            type="text"
            placeholder="From?"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="mt-2 w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="w-full sm:w-[48%] lg:w-auto">
          <label className="block font-semibold">To</label>
          <input
            type="text"
            placeholder="To?"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="mt-2 w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="w-full sm:w-[48%] lg:w-auto">
          <label className="block font-semibold">Journey Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="mt-2 w-full border border-gray-300 p-2 rounded"
          />
        </div>
        {tripType === "round-trip" && (
          <div className="w-full sm:w-[48%] lg:w-auto">
            <label className="block font-semibold">Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="mt-2 w-full border border-gray-300 p-2 rounded"
            />
          </div>
        )}
        <div className="w-full sm:w-[48%] lg:w-auto">
          <label className="block font-semibold">Traveler</label>
          <input
            type="number"
            min="1"
            value={adultCount}
            onChange={(e) => setAdultCount(e.target.value)}
            className="mt-2 w-full sm:w-32 border border-gray-300 p-2 rounded"
          />
        </div>
        {/* Submit */}
        <div className="w-full sm:w-auto">
          <button
            type="submit"
            className="w-full mt-[25px] sm:w-[80px] h-[50px] bg-[#FCB301] text-white font-semibold rounded hover:bg-[#be993a]"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
