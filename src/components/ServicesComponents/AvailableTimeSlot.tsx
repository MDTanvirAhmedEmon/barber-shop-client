
const AvailableTimeSlot = ({slot, isSelected, onClick, handleSlotId}: any) => {

    return (
        <div onClick={() =>handleSlotId(slot.id)} className="">
            <div onClick={onClick} className={ `${isSelected && 'bg-primaryColor text-white'} text-black border-2 border-primaryColor text-center py-2 px-1 cursor-pointer`}>{slot.startTime} - {slot.endTime}</div>
        </div>
    );
};

export default AvailableTimeSlot;