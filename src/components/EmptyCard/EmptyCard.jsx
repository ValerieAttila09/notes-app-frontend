export default function EmptyCard({ imgSrc, message }) {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-[8rem]'>
      {imgSrc}
      <h1 className="text-3xl outfit-regular text-neutral-600">Looking For Something?</h1>
      <p className="text-lg text-center outfit-thin text-neutral-500">{message}</p>
    </div>
  )
}