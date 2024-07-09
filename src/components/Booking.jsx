// src/components/BookingForm.js
import React, { useState } from "react";

const BookingForm = () => {
  const [duration, setDuration] = useState(1);
  const [rentDate, setRentDate] = useState("");
  const [rentTime, setRentTime] = useState("");
  const user = true; // ganti dengan kondisi autentikasi pengguna Anda

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleRentDateChange = (event) => {
    setRentDate(event.target.value);
  };

  const handleRentTimeChange = (event) => {
    setRentTime(event.target.value);
  };

  const handleMinusClick = () => {
    setDuration((prevDuration) => Math.max(1, prevDuration - 1));
  };

  const handlePlusClick = () => {
    setDuration((prevDuration) => Math.min(4, prevDuration + 1));
  };

  const totalPrice = duration * 20000;

  return (
    <div className="col-lg-12 p-2">
      <div className="box-payment box border border-secondary rounded-3">
        <form>
          <h4 className="fw-bold fs-5 text-center">Mulai Pemesanan Studio</h4>
          <input type="hidden" value="" name="studioId" id="studioId" />
          <h3 className="fw-bold text-success fs-2 text-center">
            RP 20K <span className="fw-light fs-3 text-secondary">per jam</span>
          </h3>
          <input type="hidden" value="" name="priceStudio" id="priceStudio" />
          <input type="hidden" value="0" name="totalPayment" id="totalPayment" />

          <p className="mt-4">Berapa lama ingin sewa studio?</p>
          <div className="btn-package d-flex justify-content-center">
            <button type="button" className="fw-bold btn btn-danger" id="btn-minus" onClick={handleMinusClick}>
              -
            </button>
            <input className="bg-body-secondary" type="number" value={duration} min="1" max="4" onChange={handleDurationChange} name="duration" id="duration" required />
            <button type="button" className="fw-bold btn btn-success" id="btn-plus" onClick={handlePlusClick}>
              +
            </button>
          </div>

          <p className="mt-4">Pilih tanggal</p>
          <div className="btn-date d-flex">
            <button className="btn btn-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="3" width="23" height="23" rx="2" stroke="white" strokeWidth="2" />
                <rect x="5" y="15" width="5" height="5" rx="1" stroke="white" strokeWidth="2" />
                <rect x="15" y="15" width="5" height="5" rx="1" stroke="white" strokeWidth="2" />
                <path d="M1 9H24" stroke="white" strokeWidth="2" />
                <path d="M5 1L5 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 1L20 5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <input className="bg-body-secondary" type="date" value={rentDate} onChange={handleRentDateChange} name="rentDate" id="rentDate" required />
          </div>

          <p className="mt-4">Pilih jam</p>
          <div className="btn-time d-flex">
            <select className="bg-body-secondary form-control" value={rentTime} onChange={handleRentTimeChange} name="rentTime" id="rentTime" required>
              <option value="">Pilih jam</option>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={`${i}:00`}>
                  {`${i}:00`}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-5">
            Anda akan membayar sewa studio sebesar:{" "}
            <span className="fw-semibold" id="showTotalPrice">
              Rp{totalPrice}
            </span>{" "}
            per{" "}
            <span className="fw-semibold" id="hourRentStudio">
              {duration} jam
            </span>
          </p>

          {!user ? (
            <>
              <button type="submit" className="btn btn-primary w-100 p-2" disabled>
                Lanjut Pembayaran
              </button>
              <p className="text-danger mt-2">*Silahkan login dahulu sebelum Anda melakukan pemesanan Studio</p>
            </>
          ) : (
            <button type="submit" className="btn btn-primary w-100 p-2">
              Lanjut Pembayaran
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
