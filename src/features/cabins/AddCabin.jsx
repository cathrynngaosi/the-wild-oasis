import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isOpeMondal, setisOpeMondal] = useState(false);

  return (
    <div>
      <Button onClick={() => setisOpeMondal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpeMondal && (
        <Modal onClose={() => setisOpeMondal(false)}>
          <CreateCabinForm onCloseModal={() => setisOpeMondal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
