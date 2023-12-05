import Image from 'next/image'
import Counter from "./components/Counter"

export default function Home() {
  return (
    <main className="">
      <nav>
        <ul className="flex gap-8 justify-center bg-blue-500">
          <li>Nav 1</li>
          <li>Nav 2</li>
          <li>Nav 3</li>
        </ul>
      </nav>

      <Counter></Counter>

      <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="bg-purple-500 text-center">01</div>
      <div className="bg-purple-500 text-center">02</div>
      <div className="bg-purple-500 text-center">03</div>
      <div className="col-span-2 bg-red-500 text-center">04</div>
      <div className="bg-purple-500 text-center">05</div>
      <div className="bg-purple-500 text-center">06</div>
      <div className="col-span-2 bg-purple-500 text-center">07</div>
    </div>

  
    </main>
  )
}
