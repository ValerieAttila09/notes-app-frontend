import { getInitials } from "../../utils/helper";

export default function ProfileInfo({ onLogout, userInfo }) {

  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-neutral-950 bg-neutral-100">
        {getInitials(userInfo?.fullName)}
      </div>

      <div className="">
        <p className="text-sm outfit-regular">William</p>
        <button className="text-sm text-enutral-700 outfit-regular hover:underline transition-all cursor-pointer" onClick={onLogout}>Log Out</button>
      </div>
    </div>
  )
}