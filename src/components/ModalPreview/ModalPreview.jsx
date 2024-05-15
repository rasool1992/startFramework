export default function ModalPreview(props) {
  const { handleClickOutside, selectedImg } = props;
  return (
    <>
      <div
        className="modal-overlay fixed inset-0 bg-[rgba(0,0,0,.25)] z-50  h-screen w-screen flex justify-center items-center text-white"
        onClick={handleClickOutside}
      >
        <div className=" w-full sm:w-[600px]">
          <img
            className="modal-img block w-full rounded-lg"
            src={selectedImg.imgSrc}
            alt={selectedImg.imgAlt}
          />
        </div>
      </div>
    </>
  );
}
