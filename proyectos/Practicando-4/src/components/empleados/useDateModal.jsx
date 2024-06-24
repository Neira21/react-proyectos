import { useState } from "react";
import { format } from "date-fns";
import DateModal from "./dateModal";

const useDateModal = () => {
  const [showDateModal, setShowDateModal] = useState(false);
  const [date, setDate] = useState();
  const [dateToShow, setDateToShow] = useState();

  function changeStateDateModal(showDateModal, date = undefined) {
    setShowDateModal(showDateModal);
    setDate(date);
    if (date != undefined) {
      setDateToShow(format(date, "dd/LL/yyyy"));
    }
  }

  function dateModal() {
    return (
      showDateModal && <DateModal changeStateDateModal={changeStateDateModal} />
    );
  }
  return {dateModal, changeStateDateModal, date, dateToShow,setDateToShow};

}
export default useDateModal;
