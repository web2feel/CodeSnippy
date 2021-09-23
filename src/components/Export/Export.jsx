import React from "react";
import ImageShare from "../ImageShare/ImageShare";
import Select from "../Inputs/Select/Select";
import Share from "../Share/Share";
import URLShare from "../URLShare/URLShare";

export default function Export() {
  return (
    <>
      <p className="font-semibold text-gray-800 flex items-center text-lg">
        <span className="text-xl font-medium ri-share-forward-fill "></span>
        &nbsp; Export Settings
      </p>
      <div className="image">
        <ImageShare />
        <Share txt="SHARE IMAGE" />
      </div>
      <div className="url">
        <URLShare />
        <div className="mt-5 w-full">
          <span className="text-sm text-gray-600 font-medium mb-3 inline-block">
            ANYONE WITH THIS LINK CAN
          </span>

          <br />
          <Select
            w="w-full"
            options={[
              "View Only",
              "12",
              "14",
              "16",
              "18",
              "20",
              "22",
              "24",
              "26",
              "28",
            ]}
          />
        </div>
        <Share txt="SHARE URL" url />
      </div>
    </>
  );
}
