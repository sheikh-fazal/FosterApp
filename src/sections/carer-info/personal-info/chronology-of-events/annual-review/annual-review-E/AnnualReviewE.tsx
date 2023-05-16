import React from "react";
import TrainingDetails from "./TrainingDetailsTable";
import Placements from "./PlacementsTable";
import RespitePlacements from "./RespitePlacementsTable";
import TransferPlacements from "./TransferPlacementsTable";

const AnnualReviewE = () => {
  return (
    <>
      {/* Training Details Table */}
      <TrainingDetails />
      {/* PlacementsTable */}
      <Placements />
      {/* Respite Placements Table */}
      <RespitePlacements />
      {/* Transfer Placements Table */}
      <TransferPlacements />
    </>
  );
};

export default AnnualReviewE;
